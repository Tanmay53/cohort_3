from flask import Flask
from flask import request

import json
import csv

app = Flask(__name__)

# function to read user csv


def read_user():
    try:
        items = list()
        with open("/home/akamit21/repos/cohort_3/submissions/sm_102_amit/week_16/day_4/assignment/server/data/users.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                items.append(dict(row))
        return items
    except Exception as e:
        return (e)

# function to read address csv


def read_address():
    try:
        items = list()
        with open("/home/akamit21/repos/cohort_3/submissions/sm_102_amit/week_16/day_4/assignment/server/data/addresses.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                items.append(dict(row))
        return items
    except Exception as e:
        return (e)

# function to append user data to csv file


def append_user(name, mobile, email):
    try:
        with open("/home/akamit21/repos/cohort_3/submissions/sm_102_amit/week_16/day_4/assignment/server/data/users.csv", "a") as csvfile:
            fieldnames = ["name", "mobile", "email"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow(
                {"name": name, "mobile": mobile, "email": email})
        return True
    except Exception as e:
        return (e)

# function to append user data to csv file


def append_address(user_id, line_1, city, pincode):
    try:
        with open("/home/akamit21/repos/cohort_3/submissions/sm_102_amit/week_16/day_4/assignment/server/data/addresses.csv", "a") as csvfile:
            fieldnames = ["user_id", "line_1", "city", "pincode"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow(
                {"user_id": user_id, "line_1": line_1, "city": city, "pincode": pincode})
        return True
    except Exception as e:
        return (e)

# function to write data to csv file


def write_csv(items=None):
    try:
        with open("/home/akamit21/coding/week_15/day_2/session_1/server/data/groceries.csv", "w") as csvfile:
            fieldnames = ["item", "quantity", "purchased"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for item in items:
                writer.writerow(item)
        return True
    except Exception as e:
        return (e)

# base route
@app.route("/")
def home():
    return "Welcome! Amit ... "

# user list
@app.route("/user/list")
def list_users():
    users = read_user()
    addresses = read_address()
    return json.dumps({"status": 200, "users": users, "addresses": addresses})

# create route
@app.route("/user/create", methods=["POST"])
def add_item():
    item = request.json["item"]
    quantity = request.json["quantity"]
    purchased = False
    if append_csv(item, quantity, purchased):
        return json.dumps({"status": 200, "message": item + " added ..."})
    else:
        return json.dumps({"status": 400, "message": item + " not added ..."})


# run server
if __name__ == "__main__":
    app.run(debug=1)
