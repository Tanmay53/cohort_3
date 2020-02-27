from flask import Flask
from flask import Blueprint
from flask import jsonify
from flask import request
import json
import os.path
import csv
add = Blueprint("add", __name__)
address = []


# get user info from user id
@add.route('/get_address/<int:id>')
def get_address(id):
    global address
    address = []
    with open("/home/piyush/coding/week_16/day_4/address/src/address.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        for row in reader:
            if(int(row["id"]) == int(id)):
                address.append(row)
        return jsonify(address)


# function to post that particular user's address in separate csv at first while creating
@add.route('/create_address', methods=['POST'])
def create_address():
    if request.method == 'POST':
        isExists = os.path.isfile(
            "/home/piyush/coding/week_16/day_4/address/src/address.csv")
        with open("/home/piyush/coding/week_16/day_4/address/src/address.csv", "a") as csvfile:
            fieldnames = ["id", "add_id", "line_1",
                          "line_2", "pincode", "city"]
            writer = csv.DictWriter(
                csvfile, delimiter=" ", fieldnames=fieldnames)
            if not isExists:
                writer.writeheader()
            writer.writerow({"id": request.json["id"], "add_id": request.json["add_id"], "line_1": request.json["line_1"],
                             "line_2": request.json["line_2"], "pincode": request.json["pincode"], "city": request.json["city"]})
            return json.dumps({"message": "address added successfully"})

# function to get a particular address of a particular user
@add.route('/get_user_address/<int:id>/<int:add_id>', methods=['GET'])
def get_user_address(id, add_id):
    get_add = []
    print(id, add_id)
    with open("/home/piyush/coding/week_16/day_4/address/src/address.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        for row in reader:
            if(int(row["id"]) == int(id) and int(row["add_id"]) == int(add_id)):
                get_add.append(row)
        print(get_add)
        return jsonify(get_add)
