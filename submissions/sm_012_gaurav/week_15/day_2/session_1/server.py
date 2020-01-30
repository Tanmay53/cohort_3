from flask import Flask
from flask import request
import json
import csv
import os
app = Flask(__name__)

def read_csv():
    d = []
    try:
        with open('data/groceries.csv') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row['purchased'] == "False":
                    purchasedFlag = False
                else:
                    purchasedFlag = True
                d.append({'item': row['item'], 'quantity': int(row['quantity']), 'purchased': purchasedFlag})
        return d
    except FileNotFoundError:
        return []

def write_csv(d):
    if not os.path.exists('data'):
        os.mkdir('data')
    with open("data/groceries.csv", 'w') as csvfile:
        fieldnames = ['item', 'quantity', 'purchased']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()
        for a in d:
            writer.writerow(a)


@app.route('/listing')
def getData():
    d = read_csv()
    return json.dumps({"data": d})

@app.route('/create', methods = ['POST'])
def appendData():
    item = request.json["item"].capitalize()
    quantity = request.json["quantity"]
    d = read_csv()
    print("Append", d)
    d.append({'item': item, 'quantity': quantity, 'purchased': False})
    print("After", d)
    write_csv(d)
    return json.dumps({"message": "Item Added Successfully"})

@app.route('/edit/<int:item_no>', methods=['POST'])
def changeItem(item_no):
    item = request.json['item']
    quantity = request.json['quantity']
    d = read_csv()
    purchased = d[item_no - 1]['purchased']
    d[item_no - 1] = {'item': item, 'quantity':quantity, 'purchased': purchased}
    write_csv(d)
    return json.dumps({"message": "Item Changed Successfully"})

@app.route('/delete', methods=['POST'])
def deleteItem():
    item_no = int(request.json['item_no'])
    d = read_csv()
    del d[item_no - 1]
    write_csv(d)
    return json.dumps({"message": "Item Deleted Successfully"})

@app.route('/purchased', methods=['POST', 'GET'])
def changePurchased():
    if request.method == 'POST':
        item_no = int(request.json['item_no'])
        d = read_csv()
        d[item_no - 1]['purchased'] = True
        write_csv(d)
        return json.dumps({"message": "Purchased status changed successfully"})
    else:
        d = read_csv()
        newData = []
        for a in d:
            if a['purchased']:
                newData.append(a)
        return json.dumps({"data": newData})    
