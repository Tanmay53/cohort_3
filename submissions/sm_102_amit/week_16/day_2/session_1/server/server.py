from flask import Flask
from flask import request

import csv
import json
import math

app = Flask(__name__)

# function to add data to csv file


def append_csv(id, name, email, mobile, age):
    try:
        with open("/home/akamit21/repos/cohort_3/submissions/sm_102_amit/week_16/day_2/session_1/server/data/users.csv", "a") as csvfile:
            fieldnames = ["_id", "name", "email", "mobile", "age"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow(
                {"_id": id, "name": name, "email": email, "mobile": mobile, "age": age})
        return True
    except Exception as e:
        return (e)

# read csv file


def read_csv():
    try:
        items = list()
        with open("/home/akamit21/repos/cohort_3/submissions/sm_102_amit/week_16/day_2/session_1/server/data/users.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                items.append(dict(row))
        return items
    except Exception as e:
        return (e)

# limit users


def filter_data(users, page, size):
    curr_page = page
    per_page = size
    total_pages = math.ceil(len(users)/per_page)
    prev_page_end = (curr_page-1) * per_page
    curr_page_end = curr_page * per_page
    curr_page_items = users[prev_page_end:curr_page_end]
    return ({"users": curr_page_items, "pages": total_pages})


# base route
@app.route("/")
def home():
    return "Server is running ..."

# users listing
@app.route("/list", methods=["GET"])
def get_user_list():
    page = request.args.get('page', default=1, type=int)
    size = request.args.get('size', default=10, type=int)
    users = read_csv()
    data = filter_data(users, page, size)
    return json.dumps(({"status": 200, "users": data["users"], "pages": data["pages"]}))

# create route
@app.route("/create", methods=["POST"])
def add_item():
    id = request.json["id"]
    name = request.json["name"]
    email = request.json["email"]
    mobile = request.json["mobile"]
    age = request.json["age"]
    if append_csv(id, name, email, mobile, age):
        return json.dumps({"status": 200, "message": name + " added ..."})
    else:
        return json.dumps({"status": 400, "message": name + " not added ..."})
