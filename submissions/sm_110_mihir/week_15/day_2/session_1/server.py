from flask import Flask
from flask import request
import csv
import json
app= Flask(__name__)

@app.route('/')
def home():
    return "Masai Home Page"

@app.route('/listing')
def listing():
    result=[]
    with open('data/groceries.csv') as csvfile:
        reader=csv.DictReader(csvfile)
        for row in reader:
            print (row)
            result.append(row)
        return json.dumps({"groseries":result})


@app.route('/create',methods=['POST'])
def create():
    item=request.json["item"]
    quantity=request.json["quantity"]
    with open('data/groceries.csv','a') as csvfile:
        fieldnames=['item','quantity','purchased']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow({'item':item,'quantity':quantity,'purchased':False})
    return "successfully created"
