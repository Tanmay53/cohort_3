from flask import Blueprint
from flask import request
from flask import json
import server
import csv

address = Blueprint("address", __name__)


@address.route('/updateaddress/<id>', methods=["GET", "POST"])
def updateaddress(id):
    if request.method == "GET":
        with open("data/address.csv") as csvfile:
            reader = csv.DictReader(csvfile)
            for r in reader:
                if r["id"] == id:
                    return r
    else:
        address1 = request.json["address1"]
        address2 = request.json["address2"]
        pincode = request.json["pincode"]
        list = []
        with open("data/address.csv") as csvfile:
            reader = csv.DictReader(csvfile)
            for r in reader:
                if r["id"] == id:
                    r["address1"] = address1
                    r["address2"] = address2
                    r["pincode"] = pincode
                list.append(r)
        server.write_address(list)
    return json.dumps({"message": "hiii"})
