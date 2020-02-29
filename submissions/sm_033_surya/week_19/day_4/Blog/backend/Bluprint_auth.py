from flask import Blueprint
from flask import Flask
from flask import request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from server import mysql
# from server import md5_hash
from server import generate_salt
import base64
import jwt
import hashlib
import os
import json




auth = Blueprint("auth",__name__)

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()




@auth.route('/login', methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from users where email = %s""", (email,)
    )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for item in results:
        items.append(item)
    salt = items[0]["salt"]
    new_password = md5_hash(password+str(salt))
    password_hash = new_password
    if items[0]["password_hash"] == password_hash:
        encode_data = jwt.encode(
            {"id": items[0]["id"]}, 'user', algorithm='HS256')
        return {"token": str(encode_data)}
    else:
        return {"token": "error"}

@auth.route("/register", methods=["POST"])
def register():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    salt = generate_salt()
    new_password = md5_hash(password+str(salt))
    print(new_password)
    password_hash = new_password
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (name, email, salt, password_hash)
        VALUES (%s, %s, %s, %s )""", (name, email, salt, password_hash)
    )
    mysql.connection.commit()
    cursor.close()
    return {"message": "user created"}