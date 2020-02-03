from flask import Flask
from flask import request
import json
import csv
app = Flask(__name__)

@app.route('/listing')
def listing():
    arr = []
    with open('data/groceries.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            arr.append(row)
    return json.dumps({'arr':arr,'message':'res success'}) if len(arr) > 0 else json.dumps({'arr':[],'message':'No items to display'})


@app.route('/create',methods=['POST'])
def createItem():
    item = request.json['item']
    quantity = request.json['quantity']
    purchased = request.json['purchased']
    with open('data/groceries.csv','a') as csvfile:
        fieldnames = ['item','quantity','purchased']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writerow({'item':item,'quantity':quantity,'purchased':purchased})
        return json.dumps({'message':'Item Added'})


@app.route('/edit/<item_no>',methods=['POST'])
def editItem(item_no):
    print(request.json)
    item = request.json['item']
    quantity = int(request.json['quantity'])

    groceryList = []
    #creating grocery list
    with open('data/groceries.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:  
            groceryList.append(row)

    #updating with new item,quanity
    groceryList[int(item_no)]['item'] = item
    groceryList[int(item_no)]['quantity'] = quantity

    #rewriting groceries list
    with open('data/groceries.csv','w') as csvfile:
        fieldnames = ['item','quantity','purchased']
        writer = csv.DictWriter(csvfile,fieldnames = fieldnames)
        writer.writeheader()
        for i in range(len(groceryList)):
            writer.writerow({'item':groceryList[i]['item'],'quantity':groceryList[i]['quantity'],'purchased':groceryList[i]['purchased']})

    return json.dumps(groceryList)


@app.route('/delete',methods = ['POST'])
def deleteItem():
    no = int(request.json['item_no'])
    groceryList = []

    #creating grocery list as array
    with open('data/groceries.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:  
            groceryList.append(row)
        
    #removing particular item
    idx = 0
    updated_list = []
    for i in range(len(groceryList)):
        if i == no:
            print('coming inside')
            continue
        updated_list.append(groceryList[i])
        idx += 1

    groceryList = updated_list

    #rewriting groceries file
    with open('data/groceries.csv','w') as csvfile:
        fieldnames = ['item','quantity','purchased']
        writer = csv.DictWriter(csvfile,fieldnames = fieldnames)
        writer.writeheader()
        for i in range(len(groceryList)):
            writer.writerow({'item':groceryList[i]['item'],'quantity':groceryList[i]['quantity'],'purchased':groceryList[i]['purchased']})

    return json.dumps(groceryList)


@app.route('/purchased',methods=['GET','POST'])
def purchasedStatus():
    if request.method == 'POST':
        no = int(request.json['item_no'])
        groceryList = []

        #creating grocery list as array
        with open('data/groceries.csv') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:  
                groceryList.append(row)

        #updating particular item
        idx = 0
        for i in range(len(groceryList)):
            if i == no:
                groceryList[i]['purchased'] = True

        #rewriting groceries file
        with open('data/groceries.csv','w') as csvfile:
            fieldnames = ['item','quantity','purchased']
            writer = csv.DictWriter(csvfile,fieldnames = fieldnames)
            writer.writeheader()
            for i in range(len(groceryList)):
                writer.writerow({'item':groceryList[i]['item'],'quantity':groceryList[i]['quantity'],'purchased':groceryList[i]['purchased']})

        return json.dumps(groceryList)
    elif request.method == 'GET':
        groceryList = []
        #creating grocery list as array
        with open('data/groceries.csv') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:  
                groceryList.append(row)

        #updating particular item
        updated_list = []
        for i in range(len(groceryList)):
            if groceryList[i]['purchased'] == 'True':   
                updated_list.append(groceryList[i])

        return json.dumps(updated_list)

    else: return json.dumps('Invalid Request')

