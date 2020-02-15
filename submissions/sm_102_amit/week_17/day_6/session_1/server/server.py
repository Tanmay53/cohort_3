from flask import Flask
from flask import request

import hashlib
import base64
import json
import csv
import os

app = Flask(__name__)

# function to read user csv


def read_file():
    try:
        items = list()
        with open("/home/akamit21/repos/cohort_3/submissions/sm_102_amit/week_17/day_6/session_1/server/data/users.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                items.append(dict(row))
        return items
    except Exception as e:
        return (e)


# function to append user data to csv file


def append_file(uid, name, email, salt, enc_password):
    try:
        with open("/home/akamit21/repos/cohort_3/submissions/sm_102_amit/week_17/day_6/session_1/server/data/users.csv", "a") as csvfile:
            fieldnames = ["uid", "name", "email", "salt", "password_hash"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow(
                {"uid": uid, "name": name, "email": email, "salt": salt, "password_hash": enc_password})

        return True
    except Exception as e:
        return (e)

# function to hash user password


def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

# function to generate salt


def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))

# function to check existed email


def check_email(email_id):
    users = read_file()
    for user in users:
        if user["email"] == email_id:
            return False
    return True

# function to get salt


def get_salt(email_id):
    users = read_file()
    for user in users:
        if user["email"] == email_id:
            return user["salt"]

# function to verify user login


def verify_user(email_id, enc_password):
    users = read_file()
    for user in users:
        if user["email"] == email_id and user["password_hash"] == enc_password:
            return True
    return False

# base route
@app.route("/")
def home():
    return "Hello Amit ...."

# user list
@app.route("/user/list")
def list_users():
    users = read_file()
    return json.dumps({"status": 200, "data": users})

# signup route
@app.route("/auth/signup", methods=["POST"])
def user_signup():
    users = read_file()
    uid = len(users) + 1
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]

    if check_email(email):
        salt = generate_salt()
        enc_password = md5_hash(password + salt)
        if append_file(uid, name, email, salt, enc_password):
            return json.dumps({"status": 200, "message": name + " added ..."})
        else:
            return json.dumps({"status": 200, "message": name + " not added ..."})
    else:
        return json.dumps({"status": 200, "message": email + " already exist..."})


@app.route("/auth/login", methods=["POST"])
def user_login():
    email = request.json["email"]
    password = request.json["password"]

    salt = get_salt(email)

    if salt:
        enc_password = md5_hash(password + salt)
        if verify_user(email, enc_password):
            return json.dumps({"status": 200, "message": "login successful ..."})
        else:
            return json.dumps({"status": 200, "message": "login failed ..."})
    else:
        return json.dumps({"status": 200, "message": email + " not found ..."})


# run server
if __name__ == "__main__":
    app.run(debug=1)
