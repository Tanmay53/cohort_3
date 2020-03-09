from flask import Flask
from flask import Blueprint
from flask import jsonify
from flask import request
import json
import os.path
import csv
user = Blueprint("user", __name__)
users = []

# function to create users at first
@user.route('/create', methods=['POST'])
def create():
    if request.method == 'POST':
        isExists = os.path.isfile(
            "/home/piyush/coding/week_16/day_4/address/src/users.csv")
        with open("/home/piyush/coding/week_16/day_4/address/src/users.csv", "a") as csvfile:
            fieldnames = ["id", "name", "email", "password", "number"]
            writer = csv.DictWriter(
                csvfile, delimiter=" ", fieldnames=fieldnames)
            if not isExists:
                writer.writeheader()
            writer.writerow({"id": request.json["id"], "name": request.json["name"], "email": request.json["email"],
                             "password": request.json["password"], "number": request.json["number"]})
            return json.dumps({"message": "Item Added Successfully"})

# get user info from user id
@user.route('/get_user/<int:id>')
def get_user(id):
    global users
    users = []
    with open("/home/piyush/coding/week_16/day_4/address/src/users.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        for row in reader:
            if(int(row["id"]) == int(id)):
                users.append(row)
        return jsonify(users)

# function to get a particular user detail
@user.route('/detail/<int:id>')
def user_detail(id):
    global users
    users = []
    with open("/home/piyush/coding/week_16/day_4/address/src/users.csv", "r")as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        for row in reader:
            if(int(row["id"]) == int(id)):
                users.append(row)
        return jsonify(users)

# function to get a particular user's all address's
@user.route('/address_detail/<int:idx>')
def address_detail(idx):
    global users
    users = []
    with open("/home/piyush/coding/week_16/day_4/address/src/address.csv", "r")as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        for row in reader:
            if(int(row["id"]) == idx):
                users.append(row)
        print(users)
        return jsonify(users)
