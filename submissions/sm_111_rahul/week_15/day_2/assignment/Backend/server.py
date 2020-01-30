from flask import Flask
from flask import request
import csv
import json

app = Flask(__name__)


def read_csv():
    items = list()
    with open("data/groceries.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            items.append(row)
    return items


def write_csv(u, q, p):
    with open("data/groceries.csv", "a") as csvfile:
        fieldnames = ["item_name", "quantity", "purchased"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow(
            {"item_name": u, "quantity": q, "purchased": p})


def modify_csv(item_num, modifyQuantity, modifyName):
    arr = list()
    arr = read_csv()
    arr[item_num-1]["quantity"] = modifyQuantity
    arr[item_num-1]["item_name"] = modifyName
    with open("data/groceries.csv", "w") as csvfile:
        fieldnames = ["item_name", "quantity", "purchased"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for i in arr:
            writer.writerow(i)


def delete_csv(item_num):
    arr = list()
    arr = read_csv()
    arr.pop(item_num)
    if item_num < len(arr):
        with open("data/groceries.csv", "w") as csvfile:
            fieldnames = ["item_name", "quantity", "purchased"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for i in arr:
                writer.writerow(i)
        return True
    else:
        return False


def markPurchase(item_num, isPurchase):
    arr = list()
    arr = read_csv()
    arr[item_num-1]["purchased"] = isPurchase
    with open("data/groceries.csv", "w") as csvfile:
        fieldnames = ["item_name", "quantity", "purchased"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for i in arr:
            writer.writerow(i)


@app.route("/listing")
def listGroceries():
    return json.dumps({"items": read_csv()})


@app.route("/create", methods=["POST"])
def create():
    item_name = request.json["item_name"]
    quantity = request.json["quantity"]
    purchased = False
    write_csv(item_name, quantity, purchased)
    return json.dumps({"message": "Item added successfully"})


@app.route("/modify/<int:item_num>", methods=["POST", "GET"])
def modify(item_num):

    modifyQuantity = request.json["modifyQuantity"]
    modifyName = request.json["modifyName"]
    modify_csv(item_num, modifyQuantity, modifyName)
    return json.dumps({"message": "modified successfully"})


@app.route("/delete/<int:item_num>", methods=["POST"])
def delete(item_num):

    x = delete_csv(item_num)
    if x:
        return json.dumps({"message": "deleted successfully"})
    else:
        return "Not Found"


@app.route("/purchased/<int:item_num>", methods=["POST"])
def purchase(item_num):
    isPurchase = request.json["isPurchase"]
    markPurchase(item_num, isPurchase)
    if isPurchase:
        return json.dumps({"message": "Marked As Purchase"})
    else:
        return json.dumps({"message": "Marked As Not Purchased"})


@app.route("/purchased", methods=["GET"])
def show_purchased_list():
    purchasedList = list()
    arr = list()
    arr = read_csv()
    for i in arr:
        if i["purchased"] == "True":
            purchasedList.append(i)
    return json.dumps({"items": purchasedList})
