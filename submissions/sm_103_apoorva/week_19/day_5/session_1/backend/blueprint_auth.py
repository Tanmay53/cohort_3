from flask import Flask
from flask import Blueprint
from flask import request, make_response, jsonify
import base64
import json
import hashlib
import os
import jwt
from flask_mysqldb import MySQL

auth = Blueprint("auth", __name__)
app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Kushal#025'
app.config['MYSQL_DB'] = 'blog_app'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)



def read():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM users """
    )
    results = cursor.fetchall()
    cursor.close()

    items = []

    for i in results:
        items.append(i)

    return {"users":items}


def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

def generate_salt():
    salt = os.urandom(16)
    return base64.b64encode(salt)

def check_duplicate(email):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT COUNT(user_id) FROM users WHERE email = %s """,(email,)
    )
    email_count = cursor.fetchone()['COUNT(user_id)']
    cursor.close()
    return {"email_count": email_count}

@auth.route('/signup', methods = ['POST'])
def create():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    mobile = request.json['mobile']
    check = check_duplicate(email)
    cursor = mysql.connection.cursor()
    try:
        if check['email_count'] >= 1:
            return {"message": "Email Already exist"}
        else:
            salt = str(generate_salt())
            pass_string = salt+password
            new_pass = ""
            for i in range(15):
                new_pass = md5_hash(pass_string)
                pass_string = new_pass
            cursor.execute(
                """INSERT INTO users(name,email,mobile,password,salt)
                VALUES(%s, %s, %s, %s, %s) """, (name,email,mobile,new_pass,salt,)
                )
            mysql.connection.commit()
            return {"message": "user created"}
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()

@auth.route('/signin', methods = ['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    users = read()
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT salt FROM users where email = %s """,(email,)
    )
    salt = cursor.fetchone()
    if salt is None:
        return jsonify({"message": "Email Doesn't Exist"})
    else:
        cursor.execute(
        """SELECT salt FROM users where email = %s """,(email,)
        )
        salt_check = cursor.fetchone()['salt']
        pass_string = salt_check+password
        new_pass = ""
        for i in range(15):
            new_pass = md5_hash(pass_string)
            pass_string = new_pass
        cursor.execute(
            """SELECT password FROM users where email = %s """,(email,)
        )
        password_data =cursor.fetchone()['password']
        if pass_string == password_data:
            cursor.execute(
            """SELECT user_id,name FROM users where email = %s """,(email,)
            )
            user = cursor.fetchone()
            user_id = user['user_id']
            user_name = user['name']
            encode_data = jwt.encode({"user_id": user_id}, 'secure', algorithm='HS256')
            return jsonify({"token": str(encode_data),"message": "Login Successful","user":user_name})
        else:
            return jsonify({"message": "Wrong Credentials"})
    cursor.close() 