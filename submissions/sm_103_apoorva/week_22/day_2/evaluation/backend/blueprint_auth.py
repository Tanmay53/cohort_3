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
app.config['MYSQL_DB'] = 'employee'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

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
        """SELECT COUNT(aid) FROM admin WHERE email = %s """,(email,)
    )
    email_count = cursor.fetchone()['COUNT(aid)']
    cursor.close()
    return {"email_count": email_count}


@auth.route('/signup', methods = ['POST'])
def admin_creation():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    mobile = request.json['mobile']
    designation = request.json['designation']
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
                """INSERT INTO admin(name,email,mobile,password,salt,designation)
                VALUES(%s, %s, %s, %s, %s, %s) """, (name,email,mobile,new_pass,salt,designation)
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

    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT salt FROM admin where email = %s """,(email,)
    )
    salt = cursor.fetchone()
    if salt is None:
        return jsonify({"message": "Email Doesn't Exist"})
    else:
        cursor.execute(
        """SELECT salt FROM admin where email = %s """,(email,)
        )
        salt_check = cursor.fetchone()['salt']
        pass_string = salt_check+password
        new_pass = ""
        for i in range(15):
            new_pass = md5_hash(pass_string)
            pass_string = new_pass
        cursor.execute(
            """SELECT password FROM admin where email = %s """,(email,)
        )
        password_data = cursor.fetchone()['password']
        if pass_string == password_data:
            cursor.execute(
            """SELECT aid FROM admin where email = %s """,(email,)
            )
            aid = cursor.fetchone()['aid']
            cursor.execute(
            """SELECT name FROM admin where email = %s """,(email,)
            )
            name = cursor.fetchone()['name']
            encode_data = jwt.encode({"aid": aid}, 'masai', algorithm='HS256')
            return jsonify({"token": str(encode_data),"message": "Login Successful","name":name})
        else:
            return jsonify({"message": "Wrong Credentials"})
    cursor.close()