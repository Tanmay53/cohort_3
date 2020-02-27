from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL

import jwt
import json
import csv
import hashlib
import os


app = Flask(__name__)


app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "87654321"
app.config["MYSQL_DB"] = "blog"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"
mysql = MySQL(app)


# ----------------------------- READ USER---------------------------------
def read_user():
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT * FROM users """)
    results = cursor.fetchall()
    cursor.close()
    items = []
    for item in results:
        items.append(item)
    return items


# ----------------------------- WRITE USER---------------------------------
def write_user(fname, lname, email, password, salt, age):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (fname,lname,email,password,salt,age) VALUES (%s,%s,%s,%s,%s,%s) """,
        (fname, lname, email, password, salt, age),
    )
    mysql.connection.commit()
    cursor.close()
    return {"message": "User Added Successfully", "error": False}


# ----------------------------- SIGN IN USER ROUTE ---------------------------------
@app.route("/signup", methods=["POST"])
def new_user():
    fname = request.json["first_name"]
    lname = request.json["last_name"]
    age = request.json["age"]
    email = request.json["email"]
    password = request.json["password"]
    salt = generate_salt()
    password = password + salt
    password = md5_hash(password)
    user_data = check_user(email)
    if user_data is None:
        return write_user(fname, lname, email, password, salt, age)
    else:
        return {"message": "User already exist", "error": True}


# ----------------------------- LOGIN USER ROUTE ---------------------------------
@app.route("/login", methods=["POST"])
def user_login():
    email = request.json["email"]
    password = request.json["password"]
    user_data = check_user(email)
    if user_data is not None:
        password = password + user_data["salt"]
        password = md5_hash(password)
        if user_data["password"] == password:
            return {
                "message": "User Login Successfully",
                "error": False,
                "data": user_data,
            }
    else:
        return {"message": "User does't exist", "error": True}


# ----------------------------- CHECK EXIST USER ---------------------------------
def check_user(email):
    user_data = None
    row_data = read_user()
    for row in row_data:
        if row["email"] == email:
            user_data = row
            break
    return user_data


# ----------------------------- ENCRYPT PASSWORD ---------------------------------
def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode("utf-8"))
    print(hash.hexdigest())
    return hash.hexdigest()


# ----------------------------- ADD SALT---------------------------------
def generate_salt():
    return "gy74ye"


# ----------------------------- Create Blog ---------------------------------
def create_blog(category_id, user_id, title, body):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ INSERT INTO blogs (title,body,category_id,user_id) VALUES (%s,%s,%s,%s) """,
        (title, body, category_id, user_id),
    )
    cursor.connection.commit()
    cursor.close()
    return {"message": "Your blog is added", "error": False}


# ----------------------------- Create Blogs Route ---------------------------------
@app.route("/create/blog", methods=["POST"])
def blog_input():
    category_id = request.json["category_id"]
    user_id = request.json["user_id"]
    title = request.json["title"]
    body = request.json["body"]
    return create_blog(category_id, user_id, title, body)


# ----------------------------- Show Blogs Route ---------------------------------
@app.route("/show/blog", methods=["GET"])
def get_blogs():
    cursor = mysql.connection.cursor()
    cursor.execute(""" SELECT * FROM blogs """)
    result = cursor.fetchall()
    cursor.close()
    blogs = []
    for row in result:
        row.update(
            {"created_at": str(row["created_at"]),}
        )
        blogs.append(row)
    return json.dumps(blogs)


# ----------------------------- Create Comment Route ---------------------------------
@app.route("/create/comment", methods=["POST"])
def create_comment():
    comment = request.json["comments"]
    user_id = request.json["user_id"]
    blog_id = request.json["blog_id"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ INSERT INTO comments (comment,user_id,blog_id) VALUES (%s,%s,%s) """,
        (comment, user_id, blog_id),
    )
    cursor.connection.commit()
    cursor.close()
    return {"message": "comment added", "error": False}


# ----------------------------- Show Comment Route ---------------------------------
@app.route("/show/comment", methods=["POST"])
def get_comment():
    blog_id = request.json["blog_id"]
    cursor = mysql.connection.cursor()
    cursor.execute(""" SELECT * FROM comments WHERE blog_id = %s """, (blog_id,))
    result = cursor.fetchall()
    cursor.close()
    comments_data = []
    for row in result:
        comments_data.append(row)
    print(comments_data, "<<<<<===========-------------------------")
    return json.dumps(comments_data)


@app.route("/show/myblog", methods=["POST"])
def show_myblog():
    user_id = request.json["user_id"]
    cursor = mysql.connection.cursor()
    cursor.execute(""" SELECT * FROM blogs WHERE user_id = %s """, (user_id,))
    result = cursor.fetchall()
    cursor.close()
    blog_data = []
    for row in result:
        row.update(
            {"created_at": str(row["created_at"]),}
        )
        blog_data.append(row)
    return json.dumps(blog_data)


@app.route("/delete/this/myblog", methods=["POST"])
def delete_myblog():
    user_id = request.json["user_id"]
    blog_id = request.json["blog_id"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ DELETE FROM blogs WHERE user_id = %s AND id = %s """, (user_id, blog_id)
    )
    result = cursor.connection.commit()
    cursor.close()
    return {"message": "Delete blog succesfully", "error": False}


@app.route("/delete/all/myblog", methods=["POST"])
def delete_all_myblog():
    user_id = request.json["user_id"]
    cursor = mysql.connection.cursor()
    cursor.execute(""" DELETE FROM blogs WHERE user_id = %s """, (user_id,))
    result = cursor.connection.commit()
    cursor.close()
    return {"message": "All blog deleted", "error": False}


if __name__ == "__main__":
    app.run(debug=True)


# "first_name":"Manish",
# 	"last_name":"Kumar",
# 	"age":45,
# 	"email":"manish121@gmail.com",
# 	"password":"12345"
