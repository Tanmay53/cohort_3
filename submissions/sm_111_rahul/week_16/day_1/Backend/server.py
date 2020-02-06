from flask import Flask
from flask import request

import csv
import json
import math

app = Flask(__name__)


def read_csv():
    users = list()
    with open("data/users.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            users.append(row)
    return users


def write_csv(user_list):
    with open("data/users.csv", "w") as csvfile:
        field_names = ["id", "Name", "email", "mobile", "age"]
        writer = csv.DictWriter(csvfile, fieldnames=field_names)
        writer.writeheader()
        writer.writerows(user_list)


@app.route("/")
def home():
    return "server is running"


@app.route("/users/create", methods=["POST"])
def add_user():
    users = read_csv()
    new_id = users[len(users)-1]["id"]
    Name = request.json["Name"]
    email = request.json["email"]
    mobile = request.json["mobile"]
    age = request.json["age"]
    with open("data/users.csv", "a") as csvfile:
        field_names = ["id", "Name", "email", "mobile", "age"]
        writer = csv.DictWriter(csvfile, fieldnames=field_names)
        writer.writerow(
            {"id": int(new_id)+1, "Name": Name, "email": email, "mobile": mobile, "age": age})
    return json.dumps({"msg": "user created successfully"})


@app.route("/users/listing", methods=["GET"])
def display_users():
    page = request.args.get("page_no", default=1, type=int)
    per_page = request.args.get("per_page", default=25, type=int)
    users = read_csv()
    total_pages = math.ceil(len(users)/per_page)
    prev_page_end = (page-1) * per_page
    curr_page_start = page * per_page
    user_list_display = users[prev_page_end:curr_page_start]
    return json.dumps({"user_list_display": user_list_display, "pages": total_pages})


@app.route("/users/show/<int:id>", methods=["GET"])
def show_user(id):
    user_data = read_csv()
    for user in user_data:
        if int(user["id"]) == int(id):
            return json.dumps(user)
            break


@app.route("/users/edit/<int:id>", methods=["PUT"])
def edit_user(id):
    user_data = read_csv()
    updated_user_data = list()
    Name = request.json["Name"]
    email = request.json["email"]
    mobile = request.json["mobile"]
    age = request.json["age"]
    for user in user_data:
        if int(user["id"]) == int(id):
            updated_user_data.append(
                {"id": id, "Name": Name, "email": email, "mobile": mobile, "age": age})
        else:
            updated_user_data.append(user)
    write_csv(updated_user_data)
    return json.dumps({"msg": "edited successfully"})


@app.route("/users/delete/<int:id>", methods=["DELETE"])
def delete_user(id):
    user_data = read_csv()
    updated_user_data = list()
    for user in user_data:
        if int(user["id"]) != int(id):
            updated_user_data.append(user)
    write_csv(updated_user_data)
    return json.dumps({"msg": "deleted successfully"})
