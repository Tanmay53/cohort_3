from flask import Blueprint
from flask import request
import csv
import json
import hashlib
import os
import base64

auth = Blueprint("auth", __name__)

# Signup function
@auth.route("/signup", methods = ["POST"])
def signup():

    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    salt = generate_salt()
    print(salt)
    salted_password = salt + password
    password_hash = hash_cycle(salted_password)

    users_data = read_csv()
    id = len(users_data) + 1
    
    user_details = {"id": id, "name": name, "email": email, "salt": salt, "password_hash": password_hash}
    
    for ele in users_data:
        if ele["email"] == email:
            return json.dumps({"message": "Email already present"})
    write_csv(user_details)
    return json.dumps({"message": "Signup Successful"})


def read_csv():
    data = list()
    with open("data/users.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    return data

def write_csv(user_data):
    data = read_csv()
    with open("data/users.csv", "a") as csvfile:
        fieldnames = ["id", "name", "email", "salt", "password_hash"]
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        if len(data) == 0:
            writer.writeheader()
        writer.writerow(user_data)

def generate_salt():
    salt = os.urandom(16)
    # print(salt.encode('base-64'))
    return str(base64.b64encode(salt))

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    print(hash.hexdigest())
    return hash.hexdigest()

def hash_cycle(string):
    for i in range(5):
        string = md5_hash(string)
    return string


# Login function
@auth.route("/login", methods = ["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]

    users_data = read_csv()
    for ele in users_data:
        if ele["email"] == email:
            if ele["password_hash"] == hash_cycle(ele["salt"] + password):
                return json.dumps({"message": "Login Successful"})
            else:
                return json.dumps({"message": "Incorrect Password"})
    return json.dumps({"message": "Check your email and ensure you are a registered user."})

