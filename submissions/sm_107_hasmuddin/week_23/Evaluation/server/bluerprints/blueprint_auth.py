from flask import Blueprint, request
from App.app import *
import jwt
import os
import hashlib
import base64
import json


# Auth blueprint will invoke while user interact with login page and signup page


# this function will return salt which is used for making more complicated passwords.
def salt_generate():
    salt = os.urandom(16)
    return base64.b64encode(salt)


# this function will change normal string to hashing string
def hasing_password(password):
    hashing = hashlib.sha1()
    hashing.update(password.encode("utf-8"))
    return hashing.hexdigest()

# for more complex password use salt and mixup with password


def pass_generator(password, salt):
    new_password = ""
    for _ in range(10):
        new_password = hasing_password(str(password)+str(salt))
    return new_password


# search user if user is already registered or not,
def search_user(email):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Admins WHERE email=%s", (email,))
    response = cur.fetchone()
    cur.close()
    return response

# uniq username


def uniq_user(username):
    cur = mysql.connection.cursor()
    cur.execute("SELECT username from Admins WHERE username=%s", (username,))
    Admins = cur.fetchall()
    cur.close()
    return Admins


auth = Blueprint("auth", __name__)


@auth.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    cur_user = search_user(email)
    if cur_user:
        salt = cur_user["salt"]
        hashed_password = pass_generator(password, salt)
        if hashed_password == cur_user['password']:
            send_user = {"id": cur_user["id"],
                         "username": cur_user["username"],
                         "email": email,
                         "name": cur_user["name"]}
            encode_data = jwt.encode(send_user, 'ayaan', algorithm='HS256')
            return json.dumps({"message": "login successfully", "error": False, "token": str(encode_data, "utf-8")}), 200
        else:
            return json.dumps({"message": "password is wrong", "error": True}), 401
    else:
        return json.dumps({"message": "User is not registered yet"}), 401


@auth.route("/signup", methods=['POST'])
def signup():
    cur = mysql.connection.cursor()
    username = request.json["username"]
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    if search_user(email):
        return json.dumps({"message": "User is already registered, please log in. "}), 401
    elif not search_user(email):
        if uniq_user(username):
            return {"message": "username should be uniq"}, 401
        else:
            salt = salt_generate()
            hashed_password = pass_generator(password, salt)
            cur.execute("INSERT INTO Admins (name, username, email, salt, password) VALUES (%s, %s, %s, %s, %s)",
                        (name, username, email, str(salt), hashed_password,))
            mysql.connection.commit()
            cur.close()

            return json.dumps({"message": "Registration successfull"}), 201
