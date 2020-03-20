from flask import Blueprint
from flask import request, jsonify
from db import connection

import jwt

auth = Blueprint("auth", __name__)


def check_username(username):
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT * FROM users WHERE username = %s""", (username,))
        row = cursor.fetchone()
        print(row)
        return True if row == None else False
    except Exception as e:
        print(str(e))
        return False
    finally:
        cursor.close()


def verify_user(username, password, usertype):
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT * FROM users WHERE username = %s AND password = %s AND type = %s""", (username, password, usertype))
        row = cursor.fetchone()
        print(row)
        return False if row == None else row
    except Exception as e:
        print(str(e))
        return False
    finally:
        cursor.close()


@auth.route("/signup", methods=["POST"])
def signup():
    username = request.json["username"]
    password = request.json["password"]
    fullname = request.json["fullname"]
    usertype = request.json["usertype"]

    if check_username(username):
        try:
            conn, cursor = connection()
            cursor.execute(
                """INSERT INTO users (username, password, fullname, type) VALUES (%s, %s, %s, %s)""", (username, password, fullname, usertype))
            conn.commit()
            return jsonify({"error": False, "message": "User added successfully ..."}), 200
        except Exception as e:
            print(str(e))
            return jsonify({"error": True, "message": "Error " + str(e)}), 400
        finally:
            cursor.close()
    else:
        return jsonify({"error": True, "message": username + " already exist ..."}), 200


@auth.route("/login", methods=["POST"])
def login():
    username = request.json["username"]
    password = request.json["password"]
    usertype = request.json["usertype"]

    user = verify_user(username, password, usertype)
    if user:
        encode_data = jwt.encode(
            {"uid": user['_id'], "username": user['username'], "usertype": user['type']}, "masai", algorithm="HS256")
        return jsonify({"error": False, "message": "Login successful !!!", "token": str(encode_data, "utf-8")}), 200
    else:
        return jsonify({"error": True, "message": "Wrong password or username ..."}), 200


@auth.route("/user", methods=["GET"])
def authentication():
    token = request.headers.get('Authorization')
    print(token)
    try:
        token = token.split(' ')[1]
        decoded_data = jwt.decode(token, 'masai', algorithm=['HS256'])
        print(decoded_data)
        uid = decoded_data['uid']
        username = decoded_data['username']
        usertype = decoded_data['usertype']
        return jsonify({"error": False, "message": "SUCCESS", "uid": uid, "username": username, "usertype": usertype}), 200
    except Exception as e:
        print(e)
        return jsonify({"error": True, "message": str(e)}), 400
