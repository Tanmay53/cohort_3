from flask import Flask
from flask import request

import csv
import json

app = Flask(__name__)


# function to read data from csv file


def read_csv():
    try:
        items = list()
        with open("/home/akamit21/coding/week_15/day_2/session_1/server/data/groceries.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                items.append(dict(row))
        return items
    except Exception as e:
        return (e)


# function to add data to csv file


def append_csv(item, quantity, purchased):
    try:
        with open("/home/akamit21/coding/week_15/day_2/session_1/server/data/groceries.csv", "a") as csvfile:
            fieldnames = ["item", "quantity", "purchased"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow(
                {"item": item, "quantity": quantity, "purchased": purchased})
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


# function to edit data in csv file


def edit_csv(item_id, item=None, quantity=None, t=None):
    try:
        data = read_csv()
        items = list()
        for i, row in enumerate(data):
            if t is "edit":
                if i is int(item_id) - 1:
                    items.append(
                        {"item": item, "quantity": quantity, "purchased": False})
                else:
                    items.append(row)
            elif t is "purchase":
                if i is int(item_id) - 1:
                    items.append(
                        {"item": row['item'], "quantity": row['quantity'], "purchased": True})
                else:
                    items.append(row)
            elif t is "delete":
                if i is int(item_id) - 1:
                    data.remove(data[i])
                items = data.copy()

        if write_csv(items=items):
            return True
        else:
            return False

    except Exception as e:
        return (e)


# base route
@app.route('/')
def home():
    return 'Hello, Amit!'

# list route
@app.route("/listing")
def list_item():
    data = read_csv()
    return json.dumps({"status": 200, "items": data})

# create route
@app.route("/create", methods=["POST"])
def add_item():
    item = request.json["item"]
    quantity = request.json["quantity"]
    purchased = False
    if append_csv(item, quantity, purchased):
        return json.dumps({"status": 200, "message": item + " added ..."})
    else:
        return json.dumps({"status": 400, "message": item + " not added ..."})

# edit route
@app.route("/edit/<int:item_id>", methods=["POST"])
def edit_item(item_id):
    item = request.json["item"]
    quantity = request.json["quantity"]
    if edit_csv(item_id, item, quantity, t="edit"):
        return json.dumps({"status": 200, "message": item + " edited ..."})
    else:
        return json.dumps({"status": 400, "message": item + " not edited ..."})


# edit route
@app.route("/delete", methods=["POST"])
def delete_item():
    item_id = request.json["item_id"]
    if edit_csv(int(item_id), t="delete"):
        return json.dumps({"status": 200, "message": "item deleted ..."})
    else:
        return json.dumps({"status": 400, "message": "item not deleted ..."})


@app.route("/purchased", methods=["GET", "POST"])
def purchased_item():
    if request.method == "GET":
        items = list()
        data = read_csv()
        for x in data:
            if x["purchased"] == "True":
                items.append(x)
        return json.dumps({"status": 200, "items": items})
    else:
        item_id = request.json["item_id"]
        if edit_csv(int(item_id), t="purchase"):
            return json.dumps({"status": 200, "message": "item purchased ..."})
        else:
            return json.dumps({"status": 400, "message": "item not purchased ..."})
