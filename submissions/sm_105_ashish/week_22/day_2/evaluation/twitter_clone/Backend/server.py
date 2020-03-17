from flask import Flask,flash,redirect,request, url_for, session,make_response,jsonify
from werkzeug.utils import secure_filename
from flask_mysqldb import MySQL
import hashlib
import os
import base64
import json
app = Flask(__name__)
import jwt
import math


app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Averma379@'
app.config['MYSQL_DB'] = 'twitterdb'
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
        """INSERT INTO users (name,email,imgurl,salt,password_hash) 
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

@app.route('/auth/allUsers')
def get_all_user():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
    myid = decode_data["id"]
    cursor = mysql.connection.cursor()
    cursor.execute (
        """SELECT id,name,imgurl FROM users WHERE id != %s""",(myid,)
    )
    results = cursor.fetchall()
    cursor.close()
    return {'users':results}


        
#  tweets sending and adding server.

@app.route("/auth/tweet", methods = ["POST","GET"])
def tweet_handle():
    if request.method == "POST":
        auth_header = request.headers.get('Authorization')
        token_encoded = auth_header.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
        myid = decode_data["id"]
        content = request.json["content"]
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO tweets (content,user_id) 
            VALUES (%s,%s)""", (content,myid)
            )
        mysql.connection.commit()
        cursor.close()
        return {"message":"Tweet added successfully"}
    elif request.method == "GET":
        auth_header = request.headers.get('Authorization')
        token_encoded = auth_header.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
        myid = decode_data["id"]
        page_no = request.args.get("page_no") or 1
        page_limit = (int(page_no) - 1) * 20
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT tweets.content,tweets.user_id,tweets.created_on,users.name,users.imgurl FROM  tweets join followers ON followers.user = %s JOIN users ON users.id = tweets.user_id WHERE tweets.user_id = followers.follower OR tweets.user_id = %s ORDER BY tweets.id desc LIMIT %s, 20""",
             (myid,myid,page_limit)
        )
        result_tweets = cursor.fetchall()
        cursor.execute(
            """SELECT COUNT(tweets.id) as count FROM tweets JOIN followers ON followers.user = %s JOIN users ON users.id = tweets.user_id WHERE tweets.user_id = followers.follower OR tweets.user_id = %s""",
            (myid,myid)
        )
        result2 = cursor.fetchall()
        cursor.close()
        total_tweets = result2[0]["count"]
        return {"tweets":result_tweets,"total_tweets":total_tweets}

@app.route("/auth/mytweets")
def my_tweets():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
    myid = decode_data["id"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT tweets.content,tweets.user_id,tweets.created_on,users.name,users.imgurl FROM  tweets  JOIN users ON users.id = tweets.user_id WHERE tweets.user_id = %s""",
            (myid,)
    )
    result_tweets = cursor.fetchall()
    cursor.close()
    return {"mytweets":result_tweets}
    




@app.route('/auth/follow', methods = ["POST"])
def add_follower():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
    myid = decode_data["id"]
    user_id = request.json["user_id"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO followers (follower,user) 
        VALUES (%s,%s)""", (myid,user_id)
        )
    mysql.connection.commit()
    cursor.close()
    return {"message":"Person is added in your following list"}


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
        """UPDATE  users SET imgurl = %s WHERE id = %s""", (location,myid)
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