import json
import os.path
import csv
import hashlib
import os
import base64
from flask import Flask
from flask import jsonify
from flask import request
from user import user
import jwt
from addresses import add
from registration import auth
app = Flask(__name__)
app.register_blueprint(user, url_prefix="/user")
app.register_blueprint(add, url_prefix="/add")
app.register_blueprint(auth, url_prefix="/auth")
users = []
address = []

# function to change the edited user inside the CSV file
@app.route('/edit/<int:id>', methods=['POST'])
def edit(id):
    global users
    users = []
    if request.method == "POST":
        with open("/home/piyush/coding/week_16/day_4/address/src/users.csv", "r")as csvfile:
            reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
            for row in reader:
                if(int(row["id"]) == int(id)):
                    users.append({"id": request.json["id"], "name": request.json["name"], "number": request.json["number"],
                                  "password": request.json["password"], "email": request.json["email"]})
                else:
                    users.append(row)
            write_csv(users)
            return ({"message": "getting edited"})

# function to delete an item
@app.route('/delete/<int:idx>')
def delete(idx):
    global users
    users = []
    delete_address_csv(idx)
    print(idx)
    with open("/home/piyush/coding/week_16/day_4/address/src/users.csv", "r")as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        for row in reader:
            print("reached")
            if(int(row["id"]) == int(idx)):
                continue
            else:
                users.append(row)
        write_csv(users)
        return ({"message": "User Deleted"})

# function to re-write the csv again


def write_csv(users):
    print(users, "inside")
    isExists = os.path.isfile(
        "/home/piyush/coding/week_16/day_4/address/src/users.csv")
    with open("/home/piyush/coding/week_16/day_4/address/src/users.csv", "w") as csvfile:
        fieldnames = ["id", "name", "email", "password", "number"]
        writer = csv.DictWriter(csvfile, delimiter=" ", fieldnames=fieldnames)
        writer.writeheader()
        for element in users:
            writer.writerow(element)
        return ({"message": "edited"})


# function to detect the id in address csv
def delete_address_csv(idx):
    global address
    address = []
    with open("/home/piyush/coding/week_16/day_4/address/src/address.csv", "r")as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        for row in reader:
            print("here")
            if(int(row["id"]) == int(idx)):
                continue
            else:
                address.append(row)
        write_address_csv(address)
        return ({"message": "Deleted all the address's of Users"})

# function to remove all address's of that user


def write_address_csv(address):
    print(address, "inside")
    isExists = os.path.isfile(
        "/home/piyush/coding/week_16/day_4/address/src/address.csv")
    with open("/home/piyush/coding/week_16/day_4/address/src/address.csv", "w") as csvfile:
        fieldnames = ["id", "add_id", "line_1", "line_2", "pincode", "city"]
        writer = csv.DictWriter(csvfile, delimiter=" ", fieldnames=fieldnames)
        writer.writeheader()
        for element in address:
            writer.writerow(element)
        return ({"message": "edited"})


# function to display all the entries in listing page
@app.route('/list')
def list():
    global users
    users = []
    with open("/home/piyush/coding/week_16/day_4/address/src/users.csv", "r")as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        for row in reader:
            users.append(row)
        return jsonify(users)


# function to hold the count
@app.route('/count', methods=['GET', 'POST'])
def count():
    if request.method == 'GET':
        with open("/home/piyush/coding/week_16/day_4/address/src/count.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
            for row in reader:
                return jsonify(row["count"])
    else:
        with open("/home/piyush/coding/week_16/day_4/address/src/count.csv", "w") as csvfile:
            fieldnames = ["count"]
            writer = csv.DictWriter(
                csvfile, delimiter=" ", fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow({"count": request.json["count"]})
            return ({"message": "done"})


# function to add edited address back in csv
@app.route('/store_user_address/<int:id>/<int:add_id>', methods=['POST'])
def store_user_address(id, add_id):
    if(request.method == 'POST'):
        global address
        address = []
        with open("/home/piyush/coding/week_16/day_4/address/src/address.csv", "r")as csvfile:
            reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
            for row in reader:
                if(int(row["id"]) == int(id) and (int(row["add_id"]) == int(add_id))):
                    address.append({"id": request.json["id"], "add_id": request.json["add_id"], "line_1": request.json["line_1"],
                                    "line_2": request.json["line_2"], "pincode": request.json["pincode"], "city": request.json["city"]})
                else:
                    address.append(row)
            write_address_csv(address)
            return({"message": "edited"})

# function to delete a address of a user
@app.route('/del_user_address/<int:id>/<int:add_id>', methods=['GET'])
def del_user_address(id, add_id):
    get_add = []
    print(id, add_id)
    with open("/home/piyush/coding/week_16/day_4/address/src/address.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
        for row in reader:
            if(int(row["id"]) == int(id) and int(row["add_id"]) == int(add_id)):
                continue
            else:
                get_add.append(row)
        write_address_csv(get_add)
        return jsonify(get_add)
