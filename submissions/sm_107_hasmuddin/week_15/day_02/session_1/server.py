from flask import Flask
from flask import request
import csv
import json


def write_csv(item, quantity, purchased):
    with open("data/groceries.csv", "a") as csvFile:
        writer = csv.DictWriter(csvFile, fieldnames=["item", "quantity", "purchased"])
        # writer.writeheader()
        writer.writerow({"item": item, "quantity": quantity, "purchased": purchased})
        csvFile.close()


def read_csv():
    with open("data/groceries.csv") as readcsv:
        reader = csv.DictReader(readcsv)
        data = []
        for line in reader:
            data.append(line)
        return data


def edit_csv(rowNum, item, quantity):
    data = read_csv()
    data[rowNum - 1]["item"] = item
    data[rowNum - 1]["quantity"] = quantity
    data[rowNum - 1]["purchased"] = False
    with open("data/groceries.csv", "w") as ed_csv:
        writer = csv.DictWriter(ed_csv, fieldnames=["item", "quantity", "purchased"])
        writer.writeheader()
        for items in data:
            writer.writerow(items)


def remove_csv(item_num):
    data = read_csv()
    newData = []
    for i in range(len(data)):
        if i != int(item_num) - 1:
            newData.append(data[i])
    with open("data/groceries.csv", "w") as csv_data:
        writer = csv.DictWriter(csv_data, fieldnames=["item", "quantity", "purchased"])
        writer.writeheader()
        for items in newData:
            writer.writerow(items)


def purchase_item(item_num):
    data = read_csv()
    n = int(item_num) - 1
    data[n]["purchased"] = True
    with open("data/groceries.csv", "w") as file:
        writer = csv.DictWriter(file, fieldnames=["item", "quantity", "purchased"])
        writer.writeheader()
        for items in data:
            writer.writerow(items)


def purchase_item_data():
    data = read_csv()
    purchased_items = []
    for items in data:
        if items["purchased"]=="True":
            purchased_items.append(items)

    return json.dumps({"purchased_items": purchased_items})


app = Flask(__name__)


@app.route("/listing")
def listing():
    with open("data/groceries.csv") as groceries:
        reader = csv.DictReader(groceries)
        data = []
        for line in reader:
            data.append(line)
        return json.dumps({"data": data})


@app.route("/create", methods=["POST"])
def create():
    item = request.json["item"]
    quantity = request.json["quantity"]
    purchased = False
    write_csv(item, quantity, purchased)
    message = "Item added Successfully"
    return json.dumps({"message": message, "data": {"item": item, "quantity": quantity, "purchased": purchased}})


@app.route("/edit/<int:item_no>", methods=["POST"])
def edit_item(item_no):
    item = request.json["item"]
    quantity = request.json["quantity"]
    edit_csv(item_no, item, quantity)
    message = "Edit Success"
    return json.dumps({"message": message})


@app.route("/delete", methods=["POST"])
def delete_item():
    item_no = request.json['item_no']
    remove_csv(item_no)
    message = "Item removed successfully"
    return json.dumps({"message": message})


@app.route("/purchased", methods=["POST", "GET"])
def purchasing():
    if request.method == "POST":
        item_no = request.json["item_no"]
        purchase_item(item_no)
        message = "item purchased"
        return json.dumps({"message": message})
    else:
        return purchase_item_data()
