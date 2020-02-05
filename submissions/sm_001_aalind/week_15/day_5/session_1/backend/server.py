from flask import Flask
from flask import request
import csv
import os
import json

app = Flask(__name__)
FILE_NOT_FOUND_ERR = "File Not Found!"
NO_USER_FOUND_ERR = "No User Found!"


def write_to_file(data, mode):
    fieldnames = ["id", "name", "age", "email", "mobile"]
    if os.path.isfile("users_data.csv"):
        with open("users_data.csv", mode) as file:
            file_writer = csv.DictWriter(file, fieldnames=fieldnames)

            if mode == "w":
                file_writer.writeheader()

            if type(data) is list:
                for item in data:
                    file_writer.writerow(item)
            elif type(data) is dict:
                file_writer.writerow(data)
    else:
        with open("users_data.csv", "w+") as file:
            file_writer = csv.DictWriter(file, fieldnames=fieldnames)
            file_writer.writeheader()

            if type(data) is list:
                for item in data:
                    file_writer.writerow(item)
            elif type(data) is dict:
                file_writer.writerow(data)


def read_file():
    if os.path.isfile("users_data.csv"):
        users_list = []
        with open("users_data.csv", "r") as file:
            file_reader = csv.DictReader(file)
            for user in file_reader:
                users_list.append(user)
        return users_list
    else:
        return FILE_NOT_FOUND_ERR

def check_user_existence(users_data, user_id):
    if user_id > 0 and user_id <= len(users_data):
        return True
    
    return False

@app.route("/users")
def listing():
    users_data = read_file()
    return json.dumps(users_data)

@app.route("/users", methods=["POST"])
def index():
    users_data = read_file()
    user_id = len(users_data) + 1 if users_data != FILE_NOT_FOUND_ERR else 1
    user_obj = {
        "id": user_id,
        "name": request.json["name"],
        "age": request.json["age"],
        "email": request.json["email"],
        "mobile": request.json["mobile"],
    }
    write_to_file(user_obj, "a")

    return "User created successfully."

@app.route("/users/<int:user_id>", methods=["GET"])
def show(user_id):
    users_data = read_file()
    
    if not check_user_existence(users_data, user_id):
        return NO_USER_FOUND_ERR

    return json.dumps(users_data[user_id-1])

@app.route("/users/<int:user_id>", methods=["PATCH"])
def edit(user_id):
    users_data = read_file()

    if not check_user_existence(users_data, user_id):
        return NO_USER_FOUND_ERR

    user_to_edit = users_data[user_id-1]
    user_to_edit["name"] = request.json["name"]
    user_to_edit["age"] = request.json["age"]
    user_to_edit["mobile"] = request.json["mobile"]
    user_to_edit["email"] = request.json["email"]
    users_data[user_id-1] = user_to_edit
    write_to_file(users_data, "w")

    return json.dumps(read_file())

@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete(user_id):
    users_data = read_file()

    if not check_user_existence(users_data, user_id):
        return NO_USER_FOUND_ERR
    
    del users_data[user_id-1]

    for index, user in enumerate(users_data):
        users_data[index]["id"] = index + 1

    write_to_file(users_data, "w")

    return json.dumps(read_file())