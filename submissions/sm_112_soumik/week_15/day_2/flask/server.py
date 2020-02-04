from flask import Flask
from flask import request
from flask import json
import csv

app = Flask(__name__)
app.run(debug=True)


def read_csv():
    data = []
    with open('data/groceries.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for items in reader:
            data.append(dict(items))
        return data


def write_csv(items, quantity, purchased):
    with open('data/groceries.csv', 'a') as csvfile:
        fieldnames = ['items', 'quantity', "purchased"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        # writer.writeheader()
        writer.writerow(
            {"items": items, "quantity": quantity, "purchased": purchased})


def delete_csv(item_no):
    data = read_csv()
    with open('data/groceries.csv', 'w') as csvfile:
        fieldnames = ['items', 'quantity', "purchased"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        new_data = []
        for items in range(0, len(data)):
            if items == int(item_no):
                pass
            else:
                new_data.append(data[items])
        for items in new_data:
            writer.writerow(items)
        return new_data


def edit_csv(item_no, item, quantity, purchased):
    data = read_csv()
    with open('data/groceries.csv', 'w') as csvfile:
        fieldnames = ['items', 'quantity', "purchased"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        new_data = []
        for items in range(0, len(data)):
            if items == int(item_no):
                new_data.append(
                    {"items": item, "quantity": quantity, "purchased": purchased})
            else:
                new_data.append(data[items])
        for items in new_data:
            writer.writerow(items)
        return new_data


def toggle_purchased(item_no):
    data = read_csv()
    with open('data/groceries.csv', 'w') as csvfile:
        fieldnames = ['items', 'quantity', "purchased"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        new_data = []
        for items in range(0, len(data)):
            if items == int(item_no):
                temp_data = data[items]
                temp_data["purchased"] = "True"
                new_data.append(temp_data)
            else:
                new_data.append(data[items])
        for items in new_data:
            writer.writerow(items)
        return new_data


def all_purchased():
    data = read_csv()
    purchased = []
    for items in range(len(data)):
        if data[items]["purchased"] == "True":
            purchased.append(dict(data[items]))
    return purchased


def match_csv(item):
    data = read_csv()
    with open('data/groceries.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        match_data = []
        for items in range(0, len(data)):
            if items == int(item):
                match_data.append(dict(data[items]))
                return match_data


@app.route("/listings", methods=["GET"])
def show():
    database = read_csv()
    return json.dumps(database)


@app.route("/create", methods=["POST"])
def add():
    item = request.json["items"]
    quantity = request.json["quantity"]
    purchased = request.json["purchased"]
    write_csv(item, quantity, purchased)
    return "Added TO Cart"


@app.route("/edit/<item_no>", methods=["POST"])
def edit(item_no):
    item = request.json["items"]
    quantity = request.json["quantity"]
    purchased = request.json["purchased"]
    data = edit_csv(item_no, item, quantity, purchased)
    new_data = read_csv()
    return json.dumps(new_data)


@app.route("/delete/<item_no>", methods=["POST"])
def delete(item_no):
    data = delete_csv(item_no)
    return json.dumps(data)


@app.route("/purchased/<item_no>", methods=["POST", "GET"])
def purchased(item_no):
    if request.method == "POST":
        data = toggle_purchased(item_no)
        return json.dumps(data)

    else:
        data = all_purchased()
        return json.dumps(data)


@app.route("/match/<item>", methods=["GET"])
def matchdata(item):
    data = match_csv(item)
    return json.dumps(data)
