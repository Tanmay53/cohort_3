from flask import Flask
app = Flask(__name__)
from flask import request
import csv
import json


def read_csv():
    li = []
    with open('/home/apoorva/coding/week_15/day_2/session_1/data/groceries.csv','r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            li.append(dict(row))
        return li


def write_csv(items, quantity):
    li = read_csv()
    if len(li) is 0:
        with open('/home/apoorva/coding/week_15/day_2/session_1/data/groceries.csv','w') as csvfile:
            fieldnames = ['items','quantity','purchased']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow({'items' : items, 'quantity' : quantity, 'purchased' : False})
    else:
        with open('/home/apoorva/coding/week_15/day_2/session_1/data/groceries.csv','a') as csvfile:
            fieldnames = ['items','quantity','purchased']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow({'items' : items, 'quantity' : quantity, 'purchased' : False})
    

def edit_csv(item_no, item, quantity,purchased):
    li = read_csv()
    with open('/home/apoorva/coding/week_15/day_2/session_1/data/groceries.csv','w') as csvfile:
            fieldnames = ['items','quantity','purchased']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for i in range(len(li)):
                if i is item_no:
                    writer.writerow({'items' : item, 'quantity' : quantity, 'purchased' : purchased})
                else:
                    writer.writerow(dict(li[i]))
            

def delete_csv(item_no):
    li = read_csv()
    with open('/home/apoorva/coding/week_15/day_2/session_1/data/groceries.csv','w') as csvfile:
            fieldnames = ['items','quantity','purchased']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for i in range(len(li)):
                if i is item_no:
                    continue
                else:
                    writer.writerow(dict(li[i]))


def purchased_item(item_no):
    li = read_csv()
    with open('/home/apoorva/coding/week_15/day_2/session_1/data/groceries.csv','w') as csvfile:
            fieldnames = ['items','quantity','purchased']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for i in range(len(li)):
                if i is item_no:
                    item = li[i]["items"]
                    quantity = li[i]["quantity"]
                    writer.writerow({'items' : item, 'quantity' : quantity, 'purchased' : True})
                else:
                    writer.writerow(dict(li[i]))


def purchased_csv():
    li = read_csv()
    with open('/home/apoorva/coding/week_15/day_2/session_1/data/groceries.csv','r') as csvfile:
            new_li = []
            for i in li:
                if i["purchased"] == "True":
                    new_li.append(dict(i))
                else:
                    continue
    return new_li


@app.route('/listing')
def listings():
    li = read_csv()
    return json.dumps(li)


@app.route('/create', methods = ['POST'])
def create():
    item = request.json['items']
    quantity = request.json['quantity']
    write_csv(item,quantity)
    return "Data Added"


@app.route('/edit/<int:item_no>', methods = ['POST'])
def edit(item_no):
    item = request.json['items']
    quantity = request.json['quantity']
    purchased = request.json['purchased']

    edit_csv(item_no,item,quantity,purchased)
    li = read_csv()
    return json.dumps(li)

@app.route('/delete/<int:item_no>', methods = ['POST'])
def delete(item_no):
    delete_csv(item_no)
    li = read_csv()
    return json.dumps(li)


@app.route('/purchased', methods = ['GET'])
def all_purchased():
    li = purchased_csv()
    return json.dumps(li)

@app.route('/purchased/<int:item_no>', methods = ['POST'])
def purchased(item_no):
    purchased_item(item_no)
    li = read_csv()
    return json.dumps(li)



