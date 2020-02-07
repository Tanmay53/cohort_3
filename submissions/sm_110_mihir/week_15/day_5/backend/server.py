import csv
from flask import Flask
import json
from flask import request
import math
app = Flask(__name__)

@app.route("/users/listing",methods=["GET"])
def listing():
    with open("data/MOCK_DATA.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        res=[]
        for row in reader:
            res.append(row)
        page = request.args.get('page', default = 1, type = int)
        per_page = request.args.get('per_page', default = 10, type = int)
        print("per page: ",per_page)
        total_pages = math.ceil(len(res)/per_page)
        print("total_pages",total_pages)
        prev_page_end = (page-1) * per_page
        curr_page_end = page * per_page
        curr_page_items = res[prev_page_end:curr_page_end]
        print("page:",page)
        data={"items":curr_page_items,"total_pages":total_pages}
    return json.dumps(data)