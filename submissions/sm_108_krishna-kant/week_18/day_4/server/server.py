from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL

import os
import jwt
import base64
import hashlib
import datetime

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Krishna@7860'
app.config['MYSQL_DB'] = 'BLOG_APPLICATION'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

# base route
@app.route("/")
def home():
    try:
        conn = mysql.connection.cursor()
        conn.execute("""SELECT * FROM users""")
        rows = conn.fetchall()
        return jsonify({"data": rows}), 200
    except Exception as e:
        print(e)
    finally:
        conn.close()

# function to hash user password


def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

# function to generate salt


def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))

# All Blogs
def get_blogs():
    try:
        conn = mysql.connection.cursor()
        conn.execute(""" SELECT * FROM blogs """)
        row = conn.fetchall()
        return row
    except Exception as e:
        print(e)
        return False
    finally:
        conn.close()

# function to check existed email


def check_email(email_id):
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """SELECT COUNT(id) AS `count` FROM `users` WHERE `email` = %s""", (email_id,))
        row = conn.fetchone()
        return True if row['count'] == 0 else False
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()

# function to get salt


def get_salt(email_id):
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """SELECT `email`, `salt` FROM `users` WHERE `email` = %s""", (email_id,))
        row = conn.fetchone()
        return row['salt'] if row['email'] == email_id else False
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()

# Get Comment
def get_comments(blog_id):
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """ SELECT * FROM comments WHERE blog_id = %s """, (blog_id,)
        )
        row = conn.fetchall()
        return row
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()

# function to verify user login


def verify_user(email_id, hashed_pwd):
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """SELECT * FROM `users` WHERE `email` = %s AND `password` = %s""", (email_id, hashed_pwd,))
        row = conn.fetchone()
        return False if row == None else row
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()

# function to get user after login

def get_user_by_email(email_id):
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """SELECT * FROM `users` WHERE `email` = %s""", (email_id,))
        row = conn.fetchone()
        print(row)
        return False if row == None else row
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()  

def get_user_by_id(id):
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """SELECT * FROM `users` WHERE `id` = %s""", (id,))
        row = conn.fetchone()
        print(row)
        row.pop('salt')
        row.pop('password')
        return False if row == None else row
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close() 

def get_catagory_by_id(id):
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """SELECT * FROM `catagory` WHERE `id` = %s""", (id,))
        row = conn.fetchone()
        print(row)
        return False if row == None else row
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close() 

def save_profile(location,email):
    print(location)
    try:
        conn = mysql.connection.cursor()
        conn.execute("""UPDATE users SET `profile_img` = %s WHERE `email` = %s """,
                        (location,email))
        mysql.connection.commit()
        user = get_user_by_email(email)
        return user
    except Exception as e:
        return str(e)
    finally:
        conn.close()

# signup route
@app.route("/auth/signup", methods=["POST"])
def user_signup():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    gender = request.json["gender"]
    print(name,email,password,gender)

    if check_email(email):
        salt = generate_salt()
        hashed_pwd = md5_hash(password + salt)
        try:
            conn = mysql.connection.cursor()
            conn.execute("""INSERT  INTO `users`(`name`, `email`,`gender`,`salt`,`is_verified`,`password`) VALUES (%s, %s, %s, %s, %s, %s)""",
                         (name , email, gender,salt,"false", hashed_pwd))
            mysql.connection.commit()
            return jsonify({"message": "User added successfully ...", "error": False}), 200
        except Exception as e:
            print(e)
            return jsonify({"message": str(e), "error": True}), 400
        finally:
            conn.close()
    else:
        return jsonify({"message": email + " already exist...", "error": True}), 200


@app.route("/auth/login", methods=["POST"])
def user_login():
    email = request.json["email"]
    password = request.json["password"]
    salt = get_salt(email)
    if salt:
        hashed_pwd = md5_hash(password + salt)
        user = verify_user(email, hashed_pwd)
        if user:
            encode_data = jwt.encode(
                {"uid": user['id'], "email": user['email']}, "Secret", algorithm="HS256")
            return jsonify({"error": False, "message": "Login successful!", "token": str(encode_data)}), 200
        else:
            return jsonify({"error": True, "message": "Login failed! Username/Password Wrong"}), 200
    else:
        return jsonify({"error": True, "message": email + " not found ..."}), 200

#auth route

@app.route("/auth/getuser", methods=["GET"])
def get_user():
    token = request.headers.get('Authorization')
    try:
        token = token.split(' ')[1]
        decode_data = jwt.decode(token,'Secret',algorithm=['HS256'])
        email = decode_data['email']
        user =  get_user_by_email(email)
        user.pop('password')
        user.pop('salt')
        return jsonify({"error":False, 'user': user})
    except:
        return jsonify({"error":True,"msg":"Invalid Token Login Again..!!"})


@app.route('/user/update/<email>',methods=['POST'])
def update_pic(email):
    f = request.files['picture']
    path1 = '../client/public/static/img/'
    path2 = 'static/img/'
    location = path1 + email.split("@")[0] +"/"+ f.filename
    location_database = path2 + email.split("@")[0] +"/"+ f.filename
    temp1 = path1 + email.split('@')[0]
    temp2 = path2 + email.split('@')[0]
    print(temp1)
    print(temp2)
    if not os.path.exists(temp1):
        os.makedirs(temp1)
        if not os.path.exists(temp2):
            os.makedirs(temp2)
            f.save(location)
            user = save_profile(location_database,email)
    else:
        f.save(location)
        user = save_profile(location_database,email)

    return {"user": user,"error" : False }

# blog route
# create blog

@app.route("/blog/create", methods=["POST"])
def create_blog():
    title = request.json["title"]
    blog = request.json["blog"]
    category_id = request.json["category_id"]
    user_id = request.json["user_id"]
    date = datetime.datetime.now().strftime("%Y-%m-%d")
    try:
        conn = mysql.connection.cursor()
        conn.execute("""INSERT  INTO `blogs`(`blog_title`, `blog`, `category_id`, `user_id`, `published_on`) VALUES (%s, %s, %s, %s, %s)""",
                     (title, blog, int(category_id), int(user_id), date))
        mysql.connection.commit()
        return jsonify({"message": "Blog added successfully ...", "error": False}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": str(e), "error": True}), 400
    finally:
        conn.close()

@app.route('/blog' , methods=['GET'])
def list_blog():
    blogs = get_blogs()
    for blog in blogs:
        catagory = get_catagory_by_id(blog['catagory'])
        user = get_user_by_id(blog['id'])
        print(blog)
        blog["catagory"] = catagory
        blog["author"] = user
    return jsonify({"blogs": blogs, "error" : False}),200
    
@app.route('/comment/<blog>',methods=['GET'])
def list_comment(blog):
    comments = get_comments(blog)
    for comment in comments:
        user = get_user_by_id(comment['author_id'])
        comment['author'] = user
    return jsonify({"comment":comments,"error":False})


    # run server
if __name__ == "__main__":
    app.run(debug=1)
