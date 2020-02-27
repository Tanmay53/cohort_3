from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import hashlib
import base64
import json
import os
import jwt

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'nipLOVESsud@94'
app.config['MYSQL_DB'] = 'Blog'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


@app.route('/')
def home():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM blogs"""
    )
    results = cursor.fetchall()
    cursor.close()
    blogs = []
    for i in results:
        blogs.append(i)
    return {"Blogs": blogs}

@app.route('/auth/register', methods=['POST'])
def user_register():
    if request.method == 'POST':
        body = request.json
        name = body['name']
        email = body['email']
        password = body['password']
        salt = generate_salt()
        salt_password = salt + password
        password_hash = hash_cycle(salt_password)
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO users (name, email, salt, password_hash)
            VALUES (%s, %s, %s, %s)""", (str(name), str(email), str(salt), str(password_hash))
        )
        mysql.connection.commit()
        cursor.close()
        return {"error":email, "message":"user registered successfully"}

@app.route('/auth/login', methods=['POST'])
def login():
    if request.method == 'POST':
        body = request.json
        email = body['email']
        password = body['password']
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM users WHERE email = %s""", [(str(email))]
        )
        results = cursor.fetchall()
        cursor.close()
        users = []
        for user in results:
            users.append(user)
        
        if len(users) != 0:
            for user in users:
                if user['password_hash'] == hash_cycle(user['salt'] + password):
                    encode_data = jwt.encode({"id": user["id"]}, 'sudhir', algorithm='HS256')
                    return {"message": "Sign successfully", "token": str(encode_data), "error": False}
                else:
                    return {'message': "Wrong Password"}
        return {'message': 'Please Signup first'}

@app.route('/user/details')
def details():
    res = token_decoder()
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM users WHERE id = %s""", (str(res['id']))
    )
    results = cursor.fetchall()
    users = {}
    for user in results:
        users['name'] = user['name']
        users['email'] = user['email']
        users['avatar'] = user['avatar']
    return {"users": users, "error": False}

@app.route('/user/upload', methods=['POST'])
def upload_avatar():
    if request.method == "POST":
        user_id = token_decoder()
        f = request.files['picture']
        location = "../frontend/public/images/" + f.filename
        img_url = "/images/" + f.filename 
        f.save(location)

        cursor = mysql.connection.cursor()
        cursor.execute(
            """UPDATE users SET avatar = %s WHERE id = %s""", (str(img_url), user_id['id'])
        )
        mysql.connection.commit()
        cursor.close()
        return {"message": "Picture Uploaded", "id": user_id}

@app.route('/blog_create', methods=['POST'])
def blog_create():
    body = request.json
    title = body['title']
    content = body['content']
    user_id = token_decoder()
    category_id = body['category_id']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO blogs (title, content, user_id, category_id)
        VALUES (%s, %s, %s, %s)""", (str(title), str(content), user_id['id'], category_id)
    )
    mysql.connection.commit()
    cursor.close()
    return { "message": "Blog Created"}

@app.route('/create/category', methods=['POST', 'GET'])
def category_create():
    if request.method == "POST":
        category = request.json['category']
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO categories (category) 
            VALUES (%s)""", [(str(category))]
        )
        mysql.connection.commit()
        cursor.close()
        return {"message": "Category Added"}
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM categories"""
        )
        results = cursor.fetchall()
        cursor.close()
        categories = []
        for i in results:
            categories.append(i)
        return {"categories": categories}

@app.route('/comment', methods=['POST'])
def comment():
    body = request.json
    comment = body['comment']
    blog_id = body['blog_id']
    user_id = token_decoder()

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO comments (comment, blog_id, user_id)
        VALUES (%s, %s, %s)""", (str(comment), str(blog_id), user_id['id'])
    )
    mysql.connection.commit()
    cursor.close()
    return {"message": "Comment Added"}

def hash_cycle(usr_str):
    for i in range(10):
        usr_str = md5_hash(usr_str)
        return usr_str

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))

def token_decoder():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'sudhir', algorithms=['HS256'])
    return decode_data



# @app.route('/')
# def read():
#     cursor = mysql.connection.cursor()
#     # cursor.execute(
#     #     """SELECT * FROM students_marks where class = %s AND gender = %s""", ('X', 'Male')
#     # )
#     cursor.execute (
#         """SELECT * FROM users"""
#     )
#     results = cursor.fetchall()
#     cursor.close()
#     items = []
#     for item in results:
#         items.append(item)
#     return {"users": items}

# @app.route('/')

# # crud things
# @app.route('/create', methods=['POST', 'GET'])
# def create():
#     if request.method == "POST":
#         body = request.json
#         title = body['title']
#         category_id = body['category_id']
#         user_id = body['user_id']

#         cursor = mysql.connection.cursor()
#         cursor.execute(
#             """INSERT INTO blogs (title, category_id, user_id)
#             VALUES (%s, %s, %s)""", (str(title), str(category_id), str(user_id))
#         )
#         mysql.connection.commit()
#         cursor.close()
#         return {"message": "blog created"}

# @app.route('/update', methods=['POST'])
# def update():
#     body = request.json
#     name = body['name']
#     cursor = mysql.connection.cursor()
#     cursor.execute(
#         """UPDATE users SET name = %s WHERE id = %s""", [(str(name), 3)]
#         )
#     mysql.connection.commit()
#     cursor.close()
#     return {"message": "users updated"}

# @app.route('/delete', methods=['POST'])
# def delete():
#     id = request.json['id']
#     cursor = mysql.connection.cursor()
#     cursor.execute(
#         """DELETE FROM blogs WHERE id = %s""", (str(id)) 
#         )
#     mysql.connection.commit()
#     cursor.close()
#     return {"message": "blogs deleted"}


# # CREATE TABLE users (id int NOT NULL AUTO_INCREMENT,name varchar(255) NOT NULL,email varchar(255) NOT NULL,salt varchar(255) NOT NULL, password_hash varchar(255) NOT NULL, avatar varchar(255), PRIMARY KEY(id), UNIQUE (email));
# # );