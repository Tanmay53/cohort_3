from flask  import Blueprint
from flask import flash
import json
import csv
from flask import request
import hashlib
import os

auth = Blueprint("auth", __name__)

# ---------------------------Read csv file--------------------------------#

def read_csv():
    row_data = []
    with open("./data/user.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            row_data.append(dict(row))
        return row_data

# ---------------------------Write csv file--------------------------------#

def write_csv(name,email,password):
    row_data = read_csv()
    id_ = 1
    salt = generate_salt()
    password = salt + password
    password_hash = md5_hash(password)
    if len(row_data) is 0:
        with open("./data/user.csv", "w") as csvfile:
            fieldnames = ["id", "name", "email", "salt", "password_hash"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow({"id":id_,"name":name,"email":email, "salt":salt,"password_hash":password_hash})
    else:
        with open("./data/user.csv", "a") as csvfile:
            fieldnames = ["id", "name", "email", "salt", "password_hash"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow({"id":id_,"name":name,"email":email, "salt":salt,"password_hash":password_hash})
    id_ = id_ + 1
# ---------------------------User sign up route-----------------------------#

@auth.route("/signup", methods=["POST"])
def newUser():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    row_data = read_csv()
    user_data = check_user(email)
    print(user_data)
    print(name,email,password)
    if user_data == None:
        print("IF is True")
        write_csv(name,email,password)
        return "signup successfully"
    else:
        return "User already exist"


@auth.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    user_data = check_user(email)
    if user_data is not None:
        salt = user_data["salt"]
        password = salt + password
        password = md5_hash(password)
        if user_data["password_hash"] == password:
                return "Login successfully"
        return "Invalid Password"
    else:
        return "Invalid User"


def check_user(email):
    user_data = None
    row_data = read_csv()
    for row in row_data:
        if row["email"] == email:
            print("-----------",row["email"],email)
            user_data = row
            break
    return user_data

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    print(hash.hexdigest())
    return hash.hexdigest()
def generate_salt():
    return "gy74ye"
    