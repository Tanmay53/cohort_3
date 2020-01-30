from flask import Flask
import json
from flask import request
import csv
app = Flask(__name__)


def read_csv():
    arr = list()
    with open('data/groceries.csv') as csv_file:
        reader = csv.DictReader(csv_file)
        for line in reader:
            arr.append(line)
    return arr

def write_csv(item, quantity, purchased):
    with open('data/groceries.csv', 'a') as csv_file:
        field_names = ['item', 'quantity', 'purchased']
        writer = csv.DictWriter(csv_file, fieldnames = field_names)
        writer.writerow({'item': item, 'quantity': quantity, 'purchased': purchased})

@app.route('/')
def home():
    return "Home Page"

@app.route('/listing')
def listing():
    a = read_csv()
    return json.dumps({'item' : a})

@app.route('/create', methods=['POST'])
def create():
    item = request.json['item'] 
    quantity =  request.json['quantity'] 
    purchased = False 
    write_csv(item, quantity, purchased)
    return json.dumps({'msg' : 'item added succesfully'})

def edit_write_csv(item_no, edit_quantity):
    a = read_csv()
    a[item_no - 1]['quantity'] = edit_quantity
    with open('data/groceries.csv', 'w') as csv_file:
        field_names = ['item', 'quantity', 'purchased']
        writer = csv.DictWriter(csv_file, fieldnames = field_names)
        writer.writeheader()
        for line in a:
            writer.writerow(line)
            


@app.route('/edit/<int:item_no>', methods=["GET", "POST"])
def edit(item_no):
    edit_quantity = request.json['edit_quantity']
    edit_write_csv(item_no, edit_quantity)
    return json.dumps({'item': 'Edited successfully'})