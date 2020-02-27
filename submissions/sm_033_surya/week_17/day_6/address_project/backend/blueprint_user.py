from flask import Blueprint
from flask import request
from flask import json
import server
import csv

user = Blueprint("user",__name__)

@user.route('/updateuser/<id>',methods=["GET","POST"])
def updateuser(id):
    if request.method == "GET":
        with open("data/user.csv") as csvfile:
            reader = csv.DictReader(csvfile)
            for r in reader:
                if r["id"] == id:
                    return r
    else:
        name = request.json["name"]
        mobile = request.json["mobile"]
        email= request.json["email"]
        list = []
        with open("data/user.csv") as csvfile:
            reader = csv.DictReader(csvfile)
            for r in reader:
                if r["id"] == id:
                    r["name"] = name 
                    r["mobile"] = mobile 
                    r["email"] = email
                list.append(r)
        server.write_user(list)
    return json.dumps({"message":"hello"})