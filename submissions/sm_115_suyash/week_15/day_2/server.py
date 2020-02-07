from flask import Flask
from flask import request
import json
import csv
app = Flask(__name__)

# ---------------------------Read csv file--------------------------------#
def read_csv():
    row_data = []
    with open("./data/groceries.csv","r") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            row_data.append(dict(row))
        return row_data

# ---------------------------Write csv file--------------------------------#
def write_csv(item,quantity,purchased):
    row_data = read_csv()
    if len(row_data) is 0:
        with open("./data/groceries.csv", "w") as csvfile :
            fieldnames = ["item", "quantity", "purchased"]
            writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
            writer.writeheader()
            writer.writerow({"item":item,"quantity":quantity,"purchased":purchased})
    else:
        with open("./data/groceries.csv", "a") as csvfile :
            fieldnames = ["item", "quantity", "purchased"]  
            writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
            writer.writerow({"item":item,"quantity":quantity,"purchased":purchased})


# ---------------------------Show Item API--------------------------------#
@app.route('/listing', methods=["GET"])
def showItems():
    row_data = read_csv()
    return json.dumps(row_data)


# ---------------------------Add New Item API--------------------------------#
@app.route("/create", methods=["POST"])
def addItems():
    item = request.json["item"]
    quantity = request.json["quantity"]
    purchased = request.json["purchased"]
    write_csv(item,quantity,purchased)
    return "Item added successfully"

# ---------------------------Edit Item API--------------------------------#
@app.route("/edit/<int:item_no>", methods=["POST"])
def editItems(item_no):
    item = request.json["item"]
    quantity = request.json["quantity"]
    purchased = request.json["purchased"]
    row_data = read_csv()
    with open("./data/groceries.csv", "w") as csvfile :
        fieldnames = ["item", "quantity", "purchased"]
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()
        for row in range(len(row_data)):
            if (row + 1) == item_no:
                writer.writerow({"item":item,"quantity":quantity,"purchased":purchased})
            else:
                writer.writerow({"item":row_data[row]["item"],"quantity":row_data[row]["quantity"],"purchased":row_data[row]["purchased"]})
    return "Item edited successfully"

# ---------------------------Delete Item API--------------------------------#
@app.route("/delete/<int:item_no>", methods=["POST"])
def deleteItems(item_no):
    row_data = read_csv()
    with open("./data/groceries.csv", "w") as csvfile :
        fieldnames = ["item", "quantity", "purchased"]
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()
        for row in range(len(row_data)):
            if (row + 1) == item_no:
                pass
            else:
                writer.writerow({"item":row_data[row]["item"],"quantity":row_data[row]["quantity"],"purchased":row_data[row]["purchased"]})
    return "Item deleted successfully"

# ---------------------------Want Purchased Item API--------------------------------#
@app.route("/purchased/<int:item_no>", methods=["POST"])
def isPurchased(item_no):
    row_data = read_csv()
    with open("./data/groceries.csv", "w") as csvfile :
        fieldnames = ["item", "quantity", "purchased"]
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()
        for row in range(len(row_data)):
            if (row + 1) == item_no:
                writer.writerow({"item":row_data[row]["item"],"quantity":row_data[row]["quantity"],"purchased":True})
            else:
                writer.writerow({"item":row_data[row]["item"],"quantity":row_data[row]["quantity"],"purchased":row_data[row]["purchased"]})
    return "Thankyou, item purchased successfully"

# ---------------------------Show Purchased Item API--------------------------------#
@app.route("/purchased", methods=["GET"])
def showPurchasedItems():
    row_data = read_csv()
    purchased_data = []
    for row in range(len(row_data)):
        if row_data[row]["purchased"] == "True":
            purchased_data.append(row_data[row])
    if len(purchased_data) == 0: 
        return "No item is purchased"
    else:
        return json.dumps(purchased_data)