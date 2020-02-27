from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL

import os
import jwt
import base64
import hashlib

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '12345678'
app.config['MYSQL_DB'] = 'masai3'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

# base route
@app.route("/")
def home():
    try:
        conn = mysql.connection.cursor()
        conn.execute("""SELECT  * FROM users""")
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
    return str(base64.b64encode(salt), "utf-8")

# function to check existed email


def check_email(email_id):
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """SELECT COUNT(_id) AS `count` FROM `users` WHERE `email` = %s""", (email_id,))
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
            """SELECT `username`, `salt` FROM `users` WHERE `email` = %s""", (email_id,))
        row = conn.fetchone()
        return row['salt'] if row['username'] == email_id else False
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()

# function to verify user login


def verify_user(email_id, enc_password):
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """SELECT * FROM `users` WHERE `email` = %s AND `password` = %s""", (email_id, enc_password,))
        row = conn.fetchone()
        return False if row == None else row
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()


# signup route
@app.route("/auth/signup", methods=["POST"])
def user_signup():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    gender = request.json["gender"]
    dob = request.json["dob"]

    if check_email(email):
        salt = generate_salt()
        enc_password = md5_hash(password + salt)
        try:
            conn = mysql.connection.cursor()
            conn.execute("""INSERT  INTO `users`(`username`, `password`, `salt`, `fullname`, `email`, `gender`, `dob`) VALUES (%s, %s, %s, %s, %s, %s, %s)""",
                         (email, enc_password, salt, name, email, gender, dob))
            mysql.connection.commit()
            return jsonify({"message": "User added successfully ...", "error": False}), 200
        except Exception as e:
            print(e)
            return jsonify({"message": str(e), "error": True}), 400
        finally:
            conn.close()
    else:
        return jsonify({"message": email + " already exist...", "error": False}), 200


@app.route("/auth/login", methods=["POST"])
def user_login():
    email = request.json["email"]
    password = request.json["password"]
    salt = get_salt(email)
    if salt:
        enc_password = md5_hash(password + salt)
        user = verify_user(email, enc_password)
        if user:
            encode_data = jwt.encode(
                {"uid": user['_id'], "email": user['email']}, "nS/Z9k", algorithm="HS256")
            return jsonify({"error": False, "message": "Login successful!", "token": str(encode_data, "utf-8")}), 200
        else:
            return jsonify({"error": True, "message": "Login failed! Username/Password Wrong"}), 200
    else:
        return jsonify({"error": True, "message": email + " not found ..."}), 200


# run server
if __name__ == "__main__":
    app.run(debug=1)
