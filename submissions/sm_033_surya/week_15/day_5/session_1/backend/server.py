from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
import csv
import json
import os.path
import math
app = Flask(__name__)
cors = CORS(app)


def write_csv(list):
    with open("data/user.csv", "w") as csvfile:
        fieldnames = ["name", "email", "age", "mobile", "id"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for r in list:
            writer.writerow({"name": r["name"], "id": r["id"],
                             "mobile": r["mobile"], "age": r["age"], "email": r["email"]})


@app.route("/listing")
def get_Data():
    list = []
    # count = request.args.get("count", type=int)
    # offset = request.args.get("offset", type=int)
    with open("data/user.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for r in reader:
            list.append(r)
    # total_pages = math.ceil(len(list) / count)
    # end_point = offset + count
    # print(offset,end_point,total_pages)
    # {"total":len(list),"perpage":offset,total_pages:total_pages}
    return json.dumps({"data_list":list})


@app.route("/create", methods=["POST"])
def list_Data():
    name = request.json["name"]
    id = request.json["id"]
    email = request.json["email"]
    age = request.json["age"]
    mobile = request.json["mobile"]
    isExists = os.path.isfile("data/user.csv")
    with open("data/user.csv", "a") as csvfile:
        fieldnames = ["name", "email", "age", "mobile", "id"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not isExists:
            writer.writeheader()
        writer.writerow(
            {"name": name, "id": id, "mobile": mobile, "age": age, "email": email})
    return json.dumps({"message": "added"})


@app.route("/show/<id>")
def show_data(id):
    with open("data/user.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for r in reader:
            if r["id"] == id:
                return json.dumps(r)


@app.route("/delete/<id>", methods=["DELETE"])
def del_data(id):
    list = []
    with open("data/user.csv") as csvfile:
        print(id)
        reader = csv.DictReader(csvfile)
        for r in reader:
            if r["id"] == id:
                continue
            list.append(r)
    print(list)
    write_csv(list)
    return json.dumps(list)


@app.route("/edit/<id>", methods=["PATCH"])
def edit_data(id):
    id = request.json["id"]
    name = request.json["name"]
    email = request.json["email"]
    mobile = request.json["mobile"]
    age = request.json["age"]
    list = []
    with open("data/user.csv") as csvfile:
        print(id)
        reader = csv.DictReader(csvfile)
        for r in reader:
            if r["id"] == id:
                r.update({"name": name, "email": email,
                          "mobile": mobile, "age": age, "id": id})
            list.append(r)
    print(list)
    write_csv(list)
    return json.dumps(list)
