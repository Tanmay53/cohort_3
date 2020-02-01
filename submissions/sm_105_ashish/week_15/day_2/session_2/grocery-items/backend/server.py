from flask import Flask
import json
import csv
from flask import request

app = Flask(__name__)

@app.route('/')
def home():
    return 'Masai Home Page'

def read_item_file():
    arr = list()
    with open("data/groceries.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            arr.append(row)
    return arr
            

def write_item_file(item, quantity, purchased):
    with open("data/groceries.csv", "a") as csvfile:
        fieldnames = ["item_name", "quantity",'purchased']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow({"item_name": item, "quantity": quantity ,"purchased" : purchased})

def edit_item_file(edited_name ,new_quantity ,item_no):
    arr = read_item_file()
    arr[item_no-1]["quantity"] = new_quantity
    arr[item_no-1]["item_name"] = edited_name
    with open("data/groceries.csv", "w") as csvfile:
        fieldnames = ["item_name", "quantity",'purchased']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for data in arr:
            writer.writerow(data)
        
def deleting_item(item_no):
    arr = read_item_file()
    arr.remove(arr[item_no-1])
    with open("data/groceries.csv", "w") as csvfile:
        fieldnames = ["item_name", "quantity",'purchased']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for data in arr:
            writer.writerow(data)

def set_purchased(item_no,isPost = True):
    arr = read_item_file()
    if isPost:
        arr[item_no-1]["purchased"] = True
        with open("data/groceries.csv", "w") as csvfile:
            fieldnames = ["item_name", "quantity",'purchased']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for data in arr:
                writer.writerow(data)
    else:
        sold_list = list()
        for data in arr:
            if data['purchased'] == "True":
                sold_list.append(data)
        return sold_list


@app.route("/listing")
def listing_items():
    arr = read_item_file()
    return json.dumps({'arr':arr})

@app.route("/create" , methods=['POST'])
def adding_items():
    item = request.json["item_name"]
    quantity  = request.json['quantity']
    purchased = False
    write_item_file(item , quantity , purchased)
    return json.dumps({'msg': 'added succesfully'})

@app.route('/edit/<int:item_no>' , methods = ['POST'])
def editing_item(item_no):
    item_name = request.json["item_name"]
    quantity = request.json["quantity"]
    edit_item_file(item_name,quantity,item_no)
    return json.dumps({"msg":"item updated successfully"})

@app.route('/delete/<int:item_no>', methods = ["POST"])
def deleting(item_no):
    deleting_item(item_no)
    return json.dumps({'item_no': "item deleted successfully"})


@app.route("/purchased/<int:item_no>", methods =['POST','GET'])
def marking_purchased(item_no):
    if request.method == 'POST':
        set_purchased(item_no,True)
        return json.dumps({"purchased_items":"Item sold"})
    elif request.method == 'GET':
        arr = set_purchased(-1,False)
        return json.dumps({"purchased_items":arr})












