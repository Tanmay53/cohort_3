import csv
from flask import Flask
from flask import request
import json
app = Flask(__name__)

def read_csv():
    groc_items = dict()
    groc_items['items'] = list()
    with open('/home/coderhex/repos/cohort_3/submissions/sm_108_krishna-kant/week_15/coding_1/data/groceries.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            groc_items['items'].append(row)
    return groc_items
            
def write_csv(item,quality,purchased):
    with open('/home/coderhex/repos/cohort_3/submissions/sm_108_krishna-kant/week_15/coding_1/data/groceries.csv', 'a') as csvfile:
        fieldnames = ['item', 'quality','purchased']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow({'item':item,'quality':quality,'purchased':purchased})

def edit_csv(item,quality,purchased,lineno,task):
    groc_items = read_csv()
    for data in range(len(groc_items["items"])):
        if data is (lineno-1):
            if task == "edit":
                groc_items["items"][data] = {"item" : item,"quality":quality,"purchased":purchased}
            elif task == "delete":
                groc_items["items"].pop(data)

    if len(groc_items["items"]) < lineno:
        if task == "edit":
            write_csv(item,quality,purchased)
    else:
        with open('/home/coderhex/repos/cohort_3/submissions/sm_108_krishna-kant/week_15/coding_1/data/groceries.csv', 'w') as csvfile:
            fieldnames = ['item', 'quality','purchased']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for product in groc_items["items"]:
                writer.writerow(product)

@app.route('/')
def home():
    return 'Home Route'

@app.route('/listing')
def print_list():
    items = read_csv()
    return json.dumps(items)

@app.route('/create', methods=['POST'])
def create_item():
    item_name = request.json['item']
    quality = request.json['quality']
    purchased = False
    write_csv(item_name,quality,purchased)
    return json.dumps({'message':'Item Added Successfully','data':{'item':item_name,'quality':quality,'purchased':purchased}})

@app.route('/edit/<int:item_no>',methods=['POST'])
def edit_item(item_no):
    item_name = request.json['item']
    quality = request.json['quality']
    purchased = False
    edit_csv(item_name,quality,purchased,item_no,"edit")
    return json.dumps({"message":"Data Edited Successfully"})

@app.route('/delete/<int:item_no>' , methods = ['POST'])
def delete_item(item_no):
    edit_csv(None,None,None,item_no,"delete")
    return json.dumps({"message":"Data Deleted Successfully"})