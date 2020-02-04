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
    curr_page = 1
    per_page = request.json["per_page"]
    total_pages = math.ceil(len(total_items) / per_page)
    prev_page_end = (page - 1) * per_page
    curr_page_end = page * per_page
    curr_page_items = total_items[prev_page_end:curr_page_end]
    return json.dumps({"data": curr_page_items, "total_pages": total_pages, "page":page,"total":total})


# @app.route()