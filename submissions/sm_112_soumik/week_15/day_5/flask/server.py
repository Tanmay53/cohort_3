from flask import Flask
from flask import request
from flask import json
import math
import csv

app = Flask(__name__)
app.run(debug=True)


def read_csv():
    data = []
    with open("data/user.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for items in reader:
            data.append(dict(items))
        return data


def write_csv(name, email, mobile, age):
    data = read_csv()
    if len(data) == 0:
        new_id = 1
    else:
        new_id = int(data[len(data) - 1]["id"]) + 1
    with open("data/user.csv", "a") as csvfile:
        fieldnames = ["id", "name", "email", "mobile", "age"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        # writer.writeheader()
        writer.writerow({"id": new_id, "name": name,
                         "email": email, "mobile": mobile, "age": age})


def edit_csv(id, name, email, mobile, age):
    data = read_csv()
    new_data = []
    edit = []
    for items in data:
        if items["id"] == str(id):
            new_data.append(
                {"id": id, "name": name, "email": email, "mobile": mobile, "age": age})
            edit.append({"id": id, "name": name, "email": email,
                         "mobile": mobile, "age": age})
        else:
            new_data.append(dict(items))
    with open("data/user.csv", "w") as csvfile:
        fieldnames = ["id", "name", "email", "mobile", "age"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for items in new_data:
            writer.writerow(items)
    return edit


def del_csv(id):
    data = read_csv()
    new_list = []
    for items in data:
        if items["id"] == str(id):
            pass
        else:
            new_list.append(dict(items))
    with open("data/user.csv", "w") as csvfile:
        fieldnames = ["id", "name", "email", "mobile", "age"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for items in new_list:
            writer.writerow(items)


@app.route("/user", methods=["GET", "POST"])
def listings():
    if request.method == "GET":
        page = request.args.get('page_no', default=1, type=int)
        perPage = request.args.get("user_per_page", default=25, type=int)
        prev_page = (page - 1) * perPage
        curr_page_end = page * perPage
        data = read_csv()
        total_pages = math.ceil(len(data)/perPage) + 1
        new_data = data[prev_page:curr_page_end]
        return json.dumps({"data": new_data, "page": int(total_pages)})

    elif request.method == "POST":
        name = request.json["name"]
        email = request.json["email"]
        mobile = request.json["mobile"]
        age = request.json["age"]
        write_csv(name, email, mobile, age)
        return "User Added"


@app.route("/user/<int:id>", methods=["GET", "PUT", "DELETE"])
def show(id):
    if request.method == "GET":
        data = read_csv()
        for items in data:
            if items["id"] == id:
                return items
    elif request.method == "PUT":
        new_id = id
        name = request.json["name"]
        email = request.json["email"]
        mobile = request.json["mobile"]
        age = request.json["age"]
        data = edit_csv(id, name, email, mobile, age)
        return json.dumps(data)
    elif request.method == "DELETE":
        del_csv(id)
        return "deleted"
