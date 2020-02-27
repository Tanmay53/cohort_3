from flask import Flask
import json
import os.path
from flask import jsonify
import csv
from flask import request
app = Flask(__name__)
count = 0
db = []


@app.route('/options', methods=['GET'])
def select():
    option = []
    value = 1
    while value <= 100:
        option.append(value)
        value += 1
    return jsonify(option)


@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        print("flow")
        exists = os.path.isfile(
            "/home/piyush/coding/week_15/day_5/user/src/users.csv")
        with open("/home/piyush/coding/week_15/day_5/user/src/users.csv", "a") as csvfile:
            fieldnames = ["id", "name", "age", "email", "mobile"]
            writer = csv.DictWriter(
                csvfile, delimiter=" ", fieldnames=fieldnames)
            if not exists:
                writer.writeheader()
            global count
            count =count+ 1
            with open("/home/piyush/coding/week_15/day_5/user/src/count.csv","w") as csvfile:
                fieldnames["count"]
                writer=csv.writer(csvfile,delimiter=" ",quotechar=" ")
                writer.writeheader()
                writer.writerow({count)
            global db
            db.append({"id": request.json["id"], "name": request.json["name"], "age": request.json["age"],
                       "email": request.json["email"], "mobile": request.json["mobile"]})
            writer.writerow({"id": request.json["id"], "name": request.json["name"],
                             "age": request.json["age"], "email": request.json["email"], "mobile": request.json["mobile"]})
        return ({"message": "Item Added successfully"})
    else:
        with open("/home/piyush/coding/week_15/day_5/user/src/count.csv") as csvfile:            
            reader=csv.reader(csvfile,delimiter=" ")
            for row in reader:
                count=row
        return jsonify(count)


@app.route('/list', methods=['GET'])
def list():
    global db
    db = []
    with open("/home/piyush/coding/week_15/day_5/user/src/users.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ")
        for row in reader:
            db.append(row)
    return jsonify(db)


@app.route('/show/<int:id>', methods=['GET'])
def show(id):
    temp = []
    with open("/home/piyush/coding/week_15/day_5/user/src/users.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ")
        for row in reader:
            if (int(row["id"])) == int(id):
                temp.append(row)
            else:
                continue
    return jsonify(temp)


@app.route('/edit/<int:id>', methods=['POST'])
def edit(id):
    global db
    db = []
    with open("/home/piyush/coding/week_15/day_5/user/src/users.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ")
        for row in reader:
            if (int(row["id"])) == int(id):
                db.append({"id": request.json["id"], "name": request.json["name"], "age": request.json["age"],
                           "email": request.json["email"], "mobile": request.json["mobile"]})
            else:
                db.append(row)
        write_csv(db)
    return ({"message": "Successfully Edited"})


@app.route('/delete/<int:id>', methods=['POST'])
def delete(id):
    global db
    db = []
    with open("/home/piyush/coding/week_15/day_5/user/src/users.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ")
        for row in reader:
            if (int(row["id"])) == int(id):
                continue
        else:
            db.append(row)
        write_csv(db)
    return ({"message": "Successfully Deleted"})


def write_csv(db):
    with open("/home/piyush/coding/week_15/day_5/user/src/users.csv", "w") as csvfile:
        fieldnames = ["id", "name", "age", "email", "mobile"]
        writer = csv.DictWriter(csvfile, delimiter=" ", fieldnames=fieldnames)
        writer.writeheader()
        for item in db:
            writer.writerow(item)
    return ({"message": "Done"})
