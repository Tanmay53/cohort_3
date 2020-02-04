from flask import Flask
from flask import request
import math
import csv
import json

app = Flask(__name__)


def read_csv():
    data = []
    with open("Data/users.csv") as users:
        reader = csv.DictReader(users)
        for line in reader:
            data.append(line)
    return data


@app.route("/users", methods=["POST"])
def users():
    page = request.args.get('page', default=1, type=int)
    total_items = read_csv()
    total = len(total_items)
    per_page = request.json["per_page"]
    total_pages = math.ceil(total / per_page)
    prev_page_end = (page - 1) * per_page
    curr_page_end = page * per_page
    curr_page_items = total_items[prev_page_end:curr_page_end]
    return json.dumps({"data": curr_page_items, "total_pages": total_pages, "page": page, "total": total})


def write_csv(id, name, mobile, email, age):
    with open("Data/users.csv", "a") as csvFile:
        writer = csv.DictWriter(csvFile, fieldnames=["id", "name", "email", "mobile", "age"])
        # writer.writeheader()
        writer.writerow({"id": id, "name": name, "mobile": mobile, "email": email, "age": age})


def remove_csv(item_num):
    data = read_csv()
    newData = []
    for i in range(len(data)):
        if i != int(item_num) - 1:
            newData.append(data[i])
    with open("Data/users.csv", "w") as csv_data:
        writer = csv.DictWriter(csv_data, fieldnames=["id", "name", "email", "mobile", "age"])
        writer.writeheader()
        for items in newData:
            writer.writerow(items)


@app.route("/create", methods=["POST"])
def create():
    id = len(read_csv()) + 1
    name = request.json["name"]
    mobile = request.json["mobile"]
    email = request.json["email"]
    age = request.json["age"]
    write_csv(id, name, mobile, email, age)
    message = "user added Successfully"
    return json.dumps({"message": message})


@app.route("/delete", methods=["POST"])
def delete_item():
    user_id = request.json['user_id']
    remove_csv(user_id)
    message = "Item removed successfully"
    return json.dumps({"message": message})
