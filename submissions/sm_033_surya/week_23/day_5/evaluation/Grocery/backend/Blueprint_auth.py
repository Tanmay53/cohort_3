from flask import Blueprint
from flask import request
import os
import json
import base64
import jwt
import hashlib
from server import mysql

usersdata = Blueprint('usersdata',__name__)

@usersdata.route("/register",methods=["POST"])
def registeruser():
    username = request.json["username"]
    email= request.json["email"]
    mobile = request.json["mobile"]
    password = request.json["password"]
    usertype = request.json["isadmin"]
    salt = genarate_salt()
    password_hash= hashing(password+str(salt))
    print(usertype)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (username, email, salt, password_hash,mobile,user_type)
        VALUES (%s, %s, %s, %s,%s,%s )""", (username, email, salt, password_hash,mobile,usertype)
    )
    mysql.connection.commit()
    cursor.close()
    return json.dumps({"message":"updated"})

@usersdata.route("/login" ,methods=["POST"])
def login():
    username = request.json["username"]
    password = request.json["password"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from users where username= %s""",(username,)
    )
    results = cursor.fetchall()
    user = results[0]
    salt = user["salt"]
    new_password = password+salt
    password_hash = hashing(new_password)
    if password_hash == user["password_hash"]:
        encode_Data = jwt.encode({"id":user["id"]},'users',algorithm= 'HS256')
        return json.dumps({"token":str(encode_Data),"username":user["username"],"isadmin":user["user_type"] })
    else:
        return "error occurs"
    
    
    
def genarate_salt():
    salt = os.urandom(16)
    return base64.b64encode(salt)
def hashing(value):
    hash= hashlib.md5()
    hash.update(value.encode('utf-8'))
    return hash.hexdigest()
    