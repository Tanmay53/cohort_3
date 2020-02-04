from flask import Flask
app = Flask(__name__)
import csv
from flask import request
import json
   

def writeHeaders():
    with open('data/groceries.csv', 'a') as data:
        fieldnames = ['item', 'quantity', 'purchased']
        data = csv.DictWriter(data, fieldnames=fieldnames)
        data.writeheader()

@app.route('/listing')
def listing():   
    with open("data/groceries.csv") as grocery:
        readData = csv.DictReader(grocery)
        dataDict = {
            'data' : [],
            'headers' : ['item', 'quantity', 'purchased']
        }
        for row in readData:
            dataDict['data'].append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased'] })
        return json.dumps(dataDict)

@app.route('/create', methods = ['POST'])
def create():
    with open('data/groceries.csv', 'a') as groceryData:
        fieldnames = ['item', 'quantity', 'purchased']
        writeData = csv.DictWriter(groceryData, fieldnames=fieldnames)
        item = request.json['item']
        quantity = request.json['quantity']
        writeData.writerow({'item' : item, 'quantity': quantity, 'purchased': False})
        return 'Successfully added'

@app.route('/edit/<int:itemNo>', methods = ['POST', 'GET'])
def edit(itemNo):
    if request.method == "POST":
        with open('data/groceries.csv') as data:
            readData = csv.DictReader(data)
            count = 0
            item = request.json['item']
            qty = request.json['quantity']
            dataList = []
            for row in readData:
                if count != itemNo:
                    dataList.append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : 'False'})
                count += 1
            dataList.insert(itemNo, { 'item' : item, 'quantity' : qty, 'purchased' : 'False'})

        with open('data/groceries.csv', 'w') as data:
            fieldnames = ['item', 'quantity', 'purchased']
            writeData = csv.DictWriter(data, fieldnames = fieldnames)
            writeData.writeheader()
            for row in dataList:
                writeData.writerow({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})

        return 'Data updated successfully'
    elif request.method == 'GET':
        with open('data/groceries.csv') as data:
            readData = csv.DictReader(data)
            count = 0
            dataList = []
            for row in readData:
                if count == itemNo:
                    dataList.append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
                count += 1
        return json.dumps(dataList)
        

@app.route('/delete', methods = ['POST'])
def delete():
    with open('data/groceries.csv') as data:
        readData = csv.DictReader(data)
        count = 0
        itemNo = request.json['itemNo']
        dataList = []
        for row in readData:
            if count != itemNo:
                dataList.append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
            count += 1

    with open('data/groceries.csv', 'w') as data:
        fieldnames = ['item', 'quantity', 'purchased']
        writeData = csv.DictWriter(data, fieldnames = fieldnames)
        writeData.writeheader()
        for row in dataList:
            writeData.writerow({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
    return 'Data deleted successfully'

@app.route('/purchased', methods = ['POST', 'GET'])
def markPurchased():
    if request.method == "POST":
        with open('data/groceries.csv') as data:
            readData = csv.DictReader(data)
            count = 0
            itemNo = request.json['itemNo']
            itemPurchased = []
            dataList = []
            for row in readData:
                if count != itemNo:
                    dataList.append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
                elif count == itemNo:
                    itemPurchased.append({ 'item': row['item'], 'quantity': row['quantity'], 'purchased': row['purchased']})
                count += 1
            dataList.insert(itemNo, { 'item' : itemPurchased[0]['item'], 'quantity' : itemPurchased[0]['quantity'], 'purchased' : 'True'})
        
        with open('data/groceries.csv', 'w') as data:
            fieldnames = ['item', 'quantity', 'purchased']
            writeData = csv.DictWriter(data, fieldnames = fieldnames)
            writeData.writeheader()
            for row in dataList:
                writeData.writerow({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
        return 'Item purchased'
    else:
        with open('data/groceries.csv') as data:
            readData = csv.DictReader(data)
            dataList = []
            for row in readData:
                if row['purchased'] == "True":
                    dataList.append({ 'item' : row['item'], 'quantity' : row['quantity'], 'purchased' : row['purchased']})
        return json.dumps(dataList)
