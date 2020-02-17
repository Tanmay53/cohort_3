from flask import Blueprint
from flask import request
import os
import hashlib
import json
import csv
import base64


auth = Blueprint("auth", __name__)

fieldnames = ["id", "name", "email", "salt", "password_hash"]
path = "Data/users.csv"


def sha1_hash(string):
    hashing = hashlib.sha1()
    hashing.update(string.encode('utf-8'))
    return hashing.hexdigest()


def salt_generate():
    salt = os.urandom(16)
    return base64.b64encode(salt)


def password_generator(password, salt):
    i = 0
    pswd = ""
    while i < 30:
        ps = salt+password
        pswd = sha1_hash(ps)
        i += 1
    return pswd


def csv_reader():
    data = []
    with open(path) as user_data:
        reader = csv.DictReader(user_data, fieldnames=fieldnames)
        for line in reader:
            data.append(line)
    return data


def get_user(email):
    data = csv_reader()
    for line in data:
        if line["email"] == email:
            return line


def id_generate():
    data = csv_reader()
    if len(data) <= 1:
        return 1
    else:
        last_id = data[-1]["id"]
        return int(last_id)+1


def check_email(email):
    data = csv_reader()
    for file in data:
        if file["email"] == email:
            return True
    return False


def write_csv(**data):
    with open(path, "a") as users:
        writer = csv.DictWriter(users, fieldnames=fieldnames)
        writer.writerow(data)
    return json.dumps({"error":"false", "message":"Registration Success"})


@auth.route("/signup", methods=['POST'])
def sign_up():
    id = id_generate()
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    salt = str(salt_generate())
    password_hash = password_generator(str(password), salt)
    if check_email(email):
        return json.dumps({"error": "true", "message": "Email Already Exist"})
    else:
        message = write_csv(id=id, name=name, email=email, salt=salt, password_hash=password_hash)
        return message


@auth.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    if check_email(email):
        user = get_user(email)
        password_hash = password_generator(str(password), user["salt"])
        if password_hash == user["password_hash"]:
            return json.dumps({"error": "false", "message": "login Successfull"})
        else:
            return json.dumps({"error":"true", "message":"Incorrect Password"})

    else:
        return json.dumps({"error": "true", "message": "Invalid login Creadentials"})


