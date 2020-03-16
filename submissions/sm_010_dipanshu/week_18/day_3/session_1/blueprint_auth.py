from flask import Blueprint, request
import os
import csv
import hashlib
import jwt

auth = Blueprint("auth", __name__)


def file_exists_check():
    if os.path.exists("/home/dipanshu/coding/week_17/day_6/session_1/data/users.csv"):
        return True
    else:
        return False


def generate_salt():
    salt = os.urandom(16);
    salt = salt.encode('base-64')
    return salt


def generate_hash(salted_password):
    hash = hashlib.md5()
    hash.update(salted_password.encode("utf-8"))

    re_hashed_salted_password = re_hash(hash.hexdigest()).hexdigest()
    return re_hashed_salted_password


def re_hash(hashed_salted_password):
    hash = hashlib.md5()

    for i in range(30):
        hash.update(hashed_salted_password.encode("utf-8"))

    return hash


def user_exists_check(email):
    with open("data/users.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row["email"] == email:
                return True

    return False


def fetch_last_id():
    last_id = 0
    with open("data/users.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            last_id = row["id"]

    return last_id


@auth.route("/signup", methods=["POST"])
def signup():
    name = request.json["name"].lower()
    email = request.json["email"].lower()
    password = request.json["password"]

    salt = generate_salt()
    hashed_password = generate_hash(salt + password)

    if file_exists_check():
        if user_exists_check(email):
            return {"status": 400, "message": "Signup failed. Email already exists"}
        else:
            new_id = int(fetch_last_id()) + 1;
            with open("data/users.csv", "a") as csvfile:
                fieldnames = ["id", "name", "email", "salt", "hash_password", "image", "image_url"]
                writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                writer.writerow(
                    {"id": new_id, "name": name, "email": email, "salt": salt, "hash_password": hashed_password,
                     "image": "", "image_url": ""})

            return {"status": 200, "message": "Signup successful"}

        return "No match found"


    else:
        with open("data/users.csv", "w") as csvfile:
            fieldnames = ["id", "name", "email", "salt", "hash_password", "image", "image_url"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow(
                {"id": 1, "name": name, "email": email, "salt": salt, "hash_password": hashed_password, "image": "",
                 "image_url": ""})

        return {"status": 200, "message": "Signup successful"}


@auth.route("/login", methods=["POST"])
def login():
    email = request.json["email"].lower()
    password = request.json["password"]
    salt = ""
    hash_password_from_file = ""
    id = ""

    if file_exists_check():
        with open("data/users.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row["email"] == email:
                    salt = row["salt"]
                    hash_password_from_file = row["hash_password"]
                    id = row["id"]

        hashed_password = generate_hash(salt + password)

        if hashed_password == hash_password_from_file:
            token = jwt.encode({"id": id}, "masai-jwt", algorithm="HS256")
            return {"status": 200, "message": "Login successful", "token": token}
        else:
            return {"status": 400, "message": "Login failure. Passwords do not match"}

    else:
        return {"status": 400, "message": "Login Failure. users.csv file does not exist"}
