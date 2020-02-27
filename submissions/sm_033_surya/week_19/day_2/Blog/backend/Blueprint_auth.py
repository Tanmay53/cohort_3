from flask import Blueprint
from flask import request
from flask import json
import os
# from server import mysql
from flask_mysqldb import MySQL
import hashlib

auth = Blueprint("auth",__name__)

@auth.route("/register")
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
        """INSERT INTO  (name, email,salt,password_hash)
        VALUES (%s, %s,%s,%s) """, (name, email,salt,password_hash) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "user created"}

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    # print(hash.hexdigest())
    return hash.hexdigest()
def generate_salt():
    salt = os.urandom(16)
    print(salt)
    return salt