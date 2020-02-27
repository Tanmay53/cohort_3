import json
import os.path
import csv
import jwt
import base64
import hashlib
import os
from flask import Flask
from flask import Blueprint
from flask import jsonify
from flask import request
auth = Blueprint("auth", __name__)


def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))


def md5_hash(string,salt):
    new_string = string+salt
    print(new_string)
    hash = hashlib.md5()
    hash.update(new_string.encode('utf-8'))
    return hash.hexdigest()


@auth.route('/count')
def count():
    count = 0
    with open("/home/piyush/coding/week_19/day_2/blog/src/registration.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        count = 0
        for row in reader:
            count = row["id"]
        return jsonify(count)


@auth.route('/check/<email>')
def check(email):
    with open("/home/piyush/coding/week_19/day_2/blog/src/registration.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        status = 0
        for row in reader:
            if(row["email"] == email):
                print("here")
                status = 1
        return jsonify(status)


# SignUp
@auth.route('/signup', methods=['POST'])
def registration():
    if request.method == "POST":
        reg = os.path.isfile(
            "/home/piyush/coding/week_19/day_2/blog/src/registration.csv")
        with open("/home/piyush/coding/week_19/day_2/blog/src/registration.csv", "a") as csvfile:
            fieldnames = ["id", "name", "email", "number", "salt", "password"]
            salt = generate_salt()
            hashed_Value = md5_hash(request.json["password"],salt)
            writer = csv.DictWriter(
                csvfile, delimiter=" ", fieldnames=fieldnames)
            if not reg:
                writer.writeheader()
            writer.writerow({"id": request.json["id"], "name": request.json["name"], "email": request.json["email"],
                             "number": request.json["number"], "salt": salt, "password": hashed_Value})
            return ({"message": "user registered"})


# user login function
@auth.route('/login/<email>/<password>')
def login(email, password):
    print("entry")
    idx=0
    with open("/home/piyush/coding/week_19/day_2/blog/src/registration.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        status = 0
        for row in reader:
            if(row["email"] == email):
                print("email done")
                verify = md5_hash(password, row["salt"])
                print(verify)
                if(verify == row["password"]):
                    print("password done")
                    idx=row["id"]
                    print(idx)
                    encoded_data=jwt.encode({"id":idx},"masai",algorithm="HS256")
                    print(encoded_data)
                    status = 1
        return {"token":str(encoded_data)}
