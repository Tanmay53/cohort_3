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

# create new item

@app.route('/create',methods=['POST'])
def create():
    item=request.json["item"]
    quantity=request.json["quantity"]
    with open('data/groceries.csv','a') as csvfile:
        fieldnames=['item','quantity','purchased']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow({'item':item,'quantity':quantity,'purchased':False})
    return "successfully created"

# to edit an item in groceries
@app.route('/edit/<int:item_no>',methods=['POST'])
def edit(item_no):
    item=request.json["item"]
    item_no-=1
    quantity=request.json["quantity"]
    groceries=[]
    with open('data/groceries.csv','r') as csvfile:
        reader=csv.DictReader(csvfile)
        for row in reader:
            groceries.append(row)
    for keys in groceries[item_no]:
        if keys == "item":
            groceries[item_no][keys]=item
        if keys == "quantity":
            groceries[item_no][keys]=quantity
    
    # write edit version to file
    with open('data/groceries.csv','w') as csvfile:
        fieldnames=["item","quantity","purchased"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for row in groceries:
            writer.writerow(row)
    return json.dumps({'message':'edited successfully'})

# delete an item

@app.route('/delete',methods=['POST'])
def delete():
    item_no=int(request.json["item_no"])
    item_no-=1

    groceries=[]
    with open('data/groceries.csv','r') as csvfile:
        reader=csv.DictReader(csvfile)
        for row in reader:
            groceries.append(row)
    
    # write edit version to file
    with open('data/groceries.csv','w') as csvfile:
        fieldnames=["item","quantity","purchased"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for i in range(len(groceries)):
            if i != item_no:
                writer.writerow(groceries[i])
    return json.dumps({'message':'deleted successfully'})

# mark item_no purchased as true
def mark_purchased():
    item_no=int(request.json["item_no"])
    item_no-=1

    groceries=[]
    with open('data/groceries.csv','r') as csvfile:
        reader=csv.DictReader(csvfile)
        for row in reader:
            groceries.append(row)
    for keys in groceries[item_no]:
        if keys == "purchased":
            groceries[item_no][keys]= True
    # write edit version to file
    with open('data/groceries.csv','w') as csvfile:
        fieldnames=["item","quantity","purchased"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for row  in groceries:
            writer.writerow(row)
     


# return all the items marked as purchased=true

@app.route('/purchased',methods=['POST','GET'])
def purchased():
    if request.method == 'POST':
        mark_purchased()
        return json.dumps({'message':'purchased true'})
    else:
        with open('data/groceries.csv','r') as csvfile:
            reader=csv.DictReader(csvfile)
            result=[]
            for row in reader:
                for keys in row:
                    if keys == "purchased":
                        if row[keys] == "True":
                            result.append(row)
        return json.dumps(result)