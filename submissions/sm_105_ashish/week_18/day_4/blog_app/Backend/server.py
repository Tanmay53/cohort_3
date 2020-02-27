from flask import Flask,flash,redirect,request, url_for, session,make_response,jsonify
from werkzeug.utils import secure_filename
from flask_mysqldb import MySQL
import hashlib
import os
import base64
import json
app = Flask(__name__)
import jwt


app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Averma379@'
app.config['MYSQL_DB'] = 'myblogdb'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)
@app.route('/')
def home():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
    myid = decode_data["id"]
    cursor = mysql.connection.cursor()
    cursor.execute (
        """SELECT * FROM users WHERE id = %s""",(myid,)
    )
    results = cursor.fetchall()
    cursor.close()
    return results[0]

@app.route('/auth/register',methods=["POST"])
def register():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    salt = generate_salt()
    password_hash = salt + password
    new_password = ""
    for i in range(10):
        new_password = md5_hash(password_hash)
        password_hash =  new_password
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (name,email,imageurl,salt,password_hash) 
        VALUES (%s,%s,%s,%s,%s)""", (name,email,"",salt,new_password)
        )
    mysql.connection.commit()
    cursor.close()
    return {"message":"user registered successfully"}

@app.route("/auth/login" , methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    data = check_auth(email,password)
    return json.dumps({"user":data})

@app.route("/uploader", methods=["POST"])
def upload_file():
   if request.method == 'POST':
       auth_header = request.headers.get('Authorization')
       token_encoded = auth_header.split(' ')[1]
       decode_data = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
       myid = decode_data["id"]
       f = request.files['picture']
       location = "../frontend/public/img/" + f.filename
       f.save(location)
       imgurl = "/img/"+f.filename
       upload_img(myid,imgurl)
       return {"path": location,"msg":"image uploaded successfully"}

# categories server

@app.route("/auth/categories", methods = ["POST","GET"])
def categories():
    if request.method == "POST":
        category = request.json["category"]
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO category (category) 
            VALUES (%s)""", (category,)
            )
        mysql.connection.commit()
        cursor.close()
        return {"message":"category added successfully"}
    elif request.method == "GET":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM category"""
        )
        results = cursor.fetchall()
        categories = []
        for item in results:
            categories.append(item)
        return {"categories":categories}
 
        
#  blogs sending and adding server.

@app.route("/auth/blogs", methods = ["POST","GET"])
def blogs():
    if request.method == "POST":
        auth_header = request.headers.get('Authorization')
        token_encoded = auth_header.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
        myid = decode_data["id"]
        category_id = request.json["category_id"]
        title = request.json["title"]
        content = request.json["content"]
        imgurl = request.json["imgurl"]
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO blogs (user_id,category_id,title,content,imgurl) 
            VALUES (%s,%s,%s,%s,%s)""", (myid,category_id,title,content,"")
            )
        mysql.connection.commit()
        cursor.close()
        return {"message":"Blog added successfully"}
    elif request.method == "GET":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM blogs"""
        )
        results = cursor.fetchall()
        blogs = []
        for item in results:
            blogs.append(item)
        return {"blogs":blogs}

@app.route("/blogs/comments", methods=["POST","GET"])
def get_all_comments():
    if request.method == "POST":
        auth_header = request.headers.get('Authorization')
        token_encoded = auth_header.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
        myid = decode_data["id"]
        blog_id = requset.json["blog_id"]
        comment = request.json["comment"]
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO blogs (user_id,category_id,title,content,imgurl) 
            VALUES (%s,%s,%s,%s,%s)""", (myid,category_id,title,content,"")
            )
        mysql.connection.commit()
        cursor.close()
        return {"message":"Blog added successfully"}
    elif request.method == "GET":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM blogs"""
        )
        results = cursor.fetchall()
        blogs = []
        for item in results:
            blogs.append(item)
        return {"blogs":blogs}
    

#  authentication checking method used in login route

def check_auth(email,password):
    cursor = mysql.connection.cursor()
    cursor.execute (
        """SELECT * FROM users WHERE email = %s""", (email,)
    )
    results = cursor.fetchall()
    cursor.close()
    if len(results) > 0:
        input_password = results[0]["salt"] + password
        new_password = ""
        for i in range(10):
            new_password = md5_hash(input_password)
            input_password =  new_password
        if new_password == results[0]["password_hash"]:
            encode_data = jwt.encode({"id": results[0]["id"]}, 'secret', algorithm='HS256')
            return ({"message":"login successfull","error":False,"token":str(encode_data)})
        else:
            return ({"message":"Incorrect email/password","error":True})
    else:
        return ({"message":"user Not found","error":True})

# image uploading method used in profile pic uploader route...  

def upload_img(myid,location):
    cursor = mysql.connection.cursor()
    cursor.execute (
        """UPDATE  users SET imageurl = %s WHERE id = %s""", (location,myid)
    )
    mysql.connection.commit()
    results = cursor.fetchall()
    cursor.close()
         



def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()
def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))