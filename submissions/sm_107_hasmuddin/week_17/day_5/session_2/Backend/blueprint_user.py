from flask import Blueprint
from flask import request
import json
import csv

userdata = Blueprint("userdata", __name__)
user_head = ["user_id", "name", "mobile", "email"]
user_add_head = ["user_id", "line_1", "line_2", "city", "pincode"]


def user_exist(path, user_id):
    with open(path) as user:
        reader = csv.DictReader(user)
        for line in reader:
            if line["user_id"] == user_id:
                return True
        return False


def user_finder(path, user_id):
    with open(path) as user:
        reader = csv.DictReader(user)
        for line in reader:
            if line["user_id"] == user_id:
                return {"user": line}
        return {"user": "Not found"}


def read_csv(path):
    with open(path) as file:
        data = []
        reader = csv.DictReader(file)
        for lines in reader:
            data.append(dict(lines))
        return data


def edit_csv(user_id, fieldnames, path, **edit_data):
    data = read_csv(path)
    with open(path, "w") as ed_csv:
        writer = csv.DictWriter(ed_csv, fieldnames=fieldnames)
        writer.writeheader()
        for line in data:
            if line["user_id"] == user_id:
                edit_data.update({"user_id": user_id})
                writer.writerow(edit_data)
            else:
                writer.writerow(line)


def delete_address(user_id, adPath, fieldName):
    condition = user_exist(adPath, user_id)
    if condition:
        user_add = read_csv(adPath)
        with open(adPath, "w+") as adr:
            write = csv.DictWriter(adr, fieldnames=fieldName)
            write.writeheader()
            for line in user_add:
                if not line["user_id"] == user_id:
                    write.writerow(line)
        return "Address Deleted"
    else:
        return "Address not found"


def delete_user(user_id, fieldnames1, fieldnames2, path1, path2):
    user_data = read_csv(path1)
    with open(path1, "w+") as user:
        writer = csv.DictWriter(user, fieldnames=fieldnames1)
        writer.writeheader()
        for line in user_data:
            if not line["user_id"] == user_id:
                writer.writerow(line)
        user.close()
    delete_address(user_id, path2, fieldnames2)


def write_csv(path, fieldnames, **data):
    with open(path, "a") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
        writer.writerow(data)

@userdata.route("/")
def getUser():
    user = read_csv("Data/users.csv")
    return json.dumps({"users":user})


@userdata.route("/create", methods=["POST"])
def create_user():
    user_id = request.json["user_id"]
    name = request.json["name"]
    mobile = request.json["mobile"]
    email = request.json["email"]
    path = "Data/users.csv"
    if not user_exist(path, id):
        write_csv(path, user_head, user_id=int(user_id), name=name, mobile=mobile, email=email)
        return json.dumps({"message" : "Added Successfully"})
    else:
        return json.dumps(({"message":"User Already exist"}))


@userdata.route("/address/<user_id>", methods=["POST"])
def user_address(user_id):
    user_csv = "Data/users.csv"
    add_csv = "Data/addresses.csv"
    user_data = read_csv(user_csv)
    add_data = read_csv(add_csv)
    user = {}
    not_address = {}
    for users in user_data:
        for addresses in add_data:
            if users["user_id"] == user_id and addresses["user_id"] == user_id:
                user = users
                address = addresses
                user["address"]=address
                break
            elif users["user_id"] == user_id and not addresses["user_id"] == user_id:
                not_address = users
                not_address["address"]= None
    if not_address == {}:
        return json.dumps({"user": user})
    return json .dumps({"user":not_address})


@userdata.route("/update/<user_id>", methods=['PUT'])
def modify_user(user_id):
    path = "Data/users.csv"
    name = request.json["name"]
    mobile = request.json["mobile"]
    email = request.json["email"]
    edit_csv(user_id, user_head, path, name=name, mobile=mobile, email=email)
    return json.dumps({"message": "Modify successfully"})


@userdata.route("/delete/<user_id>", methods=["DELETE"])
def deleteUser(user_id):
    path1 = "Data/users.csv"
    path2 = "Data/addresses.csv"
    delete_user(user_id, user_head, user_add_head, path1, path2)
    return json.dumps({"message":"User deleted"})
