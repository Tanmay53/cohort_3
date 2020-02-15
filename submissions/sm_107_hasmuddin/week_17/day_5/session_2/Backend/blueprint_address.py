from flask import Blueprint
from flask import request
import json
import csv

useradd = Blueprint("useradd", __name__)

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


@useradd.route("/create/<user_id>", methods=["POST"])
def create_add(user_id):
    line_1 = request.json["line_1"]
    line_2 = request.json["line_2"]
    city = request.json["city"]
    pincode = request.json["pincode"]
    path = "Data/addresses.csv"
    if not user_exist(path, user_id):
        write_csv(path, user_add_head, user_id=int(user_id), line_1=line_1, line_2=line_2, city=city, pincode=pincode)
        return json.dumps({"message" : "Added Successfully"})
    else:
        return json.dumps(({"message": "id Already exist"}))


@useradd.route("/delete/<user_id>", methods=["DELETE"])
def delete_ad(user_id):
    message = delete_address(user_id, "Data/addresses.csv", user_add_head)
    return json.dumps({"message":message})


@useradd.route("/update/<user_id>", methods=["PUT"])
def modify_add(user_id):
    path = "Data/addresses.csv"
    line_1 = request.json['line1']
    line_2 = request.json['line2']
    city = request.json['city']
    pincode= request.json['pincode']
    edit_csv(user_id, user_add_head, path, line_1=line_1, line_2=line_2, city=city, pincode=pincode)
    return json.dumps({"message":"Address Updated"})
