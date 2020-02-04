from flask import Flask
from flask import request
from flask import jsonify
import csv
import json
import os.path
app = Flask(__name__)


def writeto_csv(list, mode): #data write to .csv file function
    
    fieldnames = ["item", "quantity", "purchased", "id"]
    with open("data/groceries.csv", mode) as csvfile:
        fieldnames = ["item", "quantity", "purchased", "id"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for n in list:
            writer.writerow(
                {"item": n["item"], "quantity": n["quantity"], "purchased": n["purchased"], "id": n["id"]})


@app.route("/create", methods=["POST"])
def add_data():
    
    item = request.json["item"]
    quantity = request.json["quantity"]
    purchased = request.json["purchased"]
    id = request.json["id"]
    isexist = os.path.isfile("data/groceries.csv")
    with open("data/groceries.csv", "a") as csvfile:
        fieldnames = ["item", "quantity", "purchased", "id"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not isexist:
            writer.writeheader()
        writer.writerow({"item": item, "quantity": quantity,
                         "purchased": purchased, "id": id})
    return json.dumps({"item": item, "quantity": quantity, "purchased": purchased, "id": id})


@app.route("/listing")
def get_data():
    list = []
    with open("data/groceries.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for n in reader:
            list.append(n)
    return jsonify(list)


@app.route("/edit/<id>", methods=["POST"])
def edit_data(id):
    item = request.json["item"]
    quantity = request.json["quantity"]
    purchased = request.json["purchased"]
    id = request.json["id"]
    list = []
    with open("data/groceries.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for n in reader:
            if n["id"] == id:
                n.update({"item": item, "quantity": quantity,
                          "purchased": purchased, "id": id})
            list.append(n)
            
        writeto_csv(list, "w")
        
        return jsonify(list)


@app.route("/delete/<id>", methods=["POST"])
def delete_data(id):
    list = []
    with open("data/groceries.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for n in reader:
            if n["id"] == id:
                continue
            list.append(n)
            
        writeto_csv(list, "w")
        
        return jsonify(list)


@app.route("/mark/<id>", methods=["POST"])
def mark_data(id):
    list = edit_data(id)
    return list


@app.route("/purchased")
def purchased_data():
    list = []
    with open("data/groceries.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for n in reader:
            if n["purchased"] == "True":
                list.append(n)
    return jsonify(list)
