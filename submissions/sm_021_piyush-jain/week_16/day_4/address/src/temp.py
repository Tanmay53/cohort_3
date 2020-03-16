from flask import Flask
import json
import os.path
from flask import jsonify
import csv
from flask import request
app = Flask(__name__)
users = []
address=[]


# function to get a particular user detail
@app.route('/detail/<int:id>')
def user_detail(id):
    global users
    users=[]
    with open("/home/piyush/coding/week_16/day_4/address/src/users.csv","r")as csvfile:
        reader=csv.DictReader(csvfile,delimiter=" ",quotechar=" ")
        for row in reader:
            if(int(row["id"])==int(id)):
                users.append(row)
        return jsonify(users)        

 # function to change the edited user inside the CSV file
@app.route('/edit/<int:id>',methods=['POST'])
def edit(id):
    global users
    users=[]
    if request.method=="POST":
        with open("/home/piyush/coding/week_16/day_4/address/src/users.csv","r")as csvfile:
            reader=csv.DictReader(csvfile,delimiter=" ",quotechar=" ")
            for row in reader:
                if(int(row["id"])==int(id)):
                    users.append({"id":request.json["id"],"name":request.json["name"],"number":request.json["number"],"password":request.json["password"],"email":request.json["email"]})
                else:
                    users.append(row)
            write_csv(users)
            return ({"message":"getting edited"})            

# function to delete an item
@app.route('/delete/<int:id>')
def delete(id):
    global users 
    users=[]
    delete_address_csv(id)
    with open("/home/piyush/coding/week_16/day_4/address/src/users.csv","r")as csvfile:
        reader=csv.DictReader(csvfile,delimiter=" ",quotechar=" ")
        for row in reader:
            if(int(row["id"])==int(id)):
                continue
            else:
                # print("matched")
                users.append(row)
        write_csv(users)
        return ({"message":"User Deleted"})    

# function to detect the id in address csv
def delete_address_csv(id):
    global address
    address=[]
    with open("/home/piyush/coding/week_16/day_4/address/src/address.csv","r")as csvfile:
        reader=csv.DictReader(csvfile,delimiter=" ",quotechar=" ")
        for row in reader:
            if(int(row["id"])==int(id)):
                continue
            else:
                address.append(row)
        write_address_csv(address)
        return ({"message":"Deleted all the address's of Users"})        

# function to remove all address's of that user
def write_address_csv(address):
    print(address,"inside")
    isExists = os.path.isfile("/home/piyush/coding/week_16/day_4/address/src/address.csv")
    with open("/home/piyush/coding/week_16/day_4/address/src/address.csv", "w") as csvfile:
        fieldnames = ["id","add_id","line_1", "line_2", "pincode", "city"]
        writer = csv.DictWriter(csvfile, delimiter=" ", fieldnames=fieldnames)
        writer.writeheader()
        for element in address:
            writer.writerow(element)
        return ({"message":"edited"})



# function to re-write the csv again
def write_csv(users):
    print(users,"inside")
    isExists = os.path.isfile("/home/piyush/coding/week_16/day_4/address/src/users.csv")
    with open("/home/piyush/coding/week_16/day_4/address/src/users.csv", "w") as csvfile:
        fieldnames = ["id", "name", "email", "password", "number"]
        writer = csv.DictWriter(csvfile, delimiter=" ", fieldnames=fieldnames)
        writer.writeheader()
        for element in users:
            writer.writerow(element)
        return ({"message":"edited"})                

# function to get a particular user's all address's
@app.route('/address_detail/<int:id>')
def address_detail(id):
    global users
    users=[]
    with open("/home/piyush/coding/week_16/day_4/address/src/address.csv","r")as csvfile:
        reader=csv.DictReader(csvfile,delimiter=" ",quotechar=" ")
        for row in reader:
            if(int(row["id"])==int(id)):
                users.append(row)
        return jsonify(users)        

# function to display all the entries in listing page
@app.route('/list')
def list():
    global users
    users=[]
    with open("/home/piyush/coding/week_16/day_4/address/src/users.csv","r")as csvfile:
        reader=csv.DictReader(csvfile,delimiter=" ",quotechar=" ")
        for row in reader:
            users.append(row)
        return jsonify(users)    



# get user info from user id
@app.route('/get_user/<int:id>')
def get_user(id):
    global users
    users=[]
    with open("/home/piyush/coding/week_16/day_4/address/src/users.csv","r") as csvfile:
        reader=csv.DictReader(csvfile,delimiter=" ",quotechar=" ")
        for row in reader:
            if(int(row["id"])==int(id)):
                users.append(row)
        return jsonify(users)    



# get user info from user id
@app.route('/get_address/<int:id>')
def get_address(id):
    global users
    users=[]
    with open("/home/piyush/coding/week_16/day_4/address/src/address.csv","r") as csvfile:
        reader=csv.DictReader(csvfile,delimiter=" ",quotechar=" ")
        print(id)
        for row in reader:
            if(int(row["id"])==int(id)):
                print(int(row["id"]),int(id))
                users.append(row)
                print(users)
        return jsonify(users)


# function to hold the count
@app.route('/count', methods=['GET', 'POST'])
def count():
    if request.method == 'GET':
        with open("/home/piyush/coding/week_16/day_4/address/src/count.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile, delimiter=" ", quotechar=" ")
            for row in reader:
                return jsonify(row["count"])
    else:
        with open("/home/piyush/coding/week_16/day_4/address/src/count.csv", "w") as csvfile:
            fieldnames = ["count"]
            writer = csv.DictWriter(
                csvfile, delimiter=" ", fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow({"count": request.json["count"]})
            return ({"message": "done"})




# function to create users at first
@app.route('/create', methods=['POST'])
def create():
    if request.method == 'POST':
        isExists = os.path.isfile("/home/piyush/coding/week_16/day_4/address/src/users.csv")
        with open("/home/piyush/coding/week_16/day_4/address/src/users.csv", "a") as csvfile:
            fieldnames = ["id", "name", "email", "password", "number"]
            writer = csv.DictWriter(csvfile, delimiter=" ", fieldnames=fieldnames)
            if not isExists:
                writer.writeheader()
            writer.writerow({"id": request.json["id"], "name": request.json["name"], "email": request.json["email"],
                             "password": request.json["password"], "number": request.json["number"]})
            return json.dumps({"message": "Item Added Successfully"})



# function to post that particular user's address in separate csv at first while creating
@app.route('/create_address', methods=['POST'])
def create_address():
    if request.method == 'POST':
        isExists = os.path.isfile("/home/piyush/coding/week_16/day_4/address/src/address.csv")
        with open("/home/piyush/coding/week_16/day_4/address/src/address.csv", "a") as csvfile:
            fieldnames = ["id","add_id" ,"line_1", "line_2", "pincode", "city"]
            writer = csv.DictWriter(csvfile, delimiter=" ", fieldnames=fieldnames)
            if not isExists:
                writer.writeheader()
            writer.writerow({"id": request.json["id"],"add_id":request.json["add_id"], "line_1": request.json["line_1"],
                             "line_2": request.json["line_2"], "pincode": request.json["pincode"], "city": request.json["city"]})
            return json.dumps({"message": "address added successfully"})
