from flask import Flask
from flask import request
from flask import json
from blueprint_address import address
from blueprint_user import user

import os.path
import csv
from flask import request
from flask_cors import CORS
app = Flask(__name__)
app.register_blueprint(address ,url_prefix="/address")
app.register_blueprint(user ,url_prefix="/user")

CORS(app)



# Writing to CSV files

def write_user(list):
    print(list)
    with open ('data/user.csv',"w") as csvfile:
        fieldnames = ["id","name","mobile","email","isaddress"]
        writer = csv.DictWriter(csvfile,fieldnames = fieldnames)
        writer.writeheader()
        for r in list:
            # print(r)
            writer.writerow({"id":r["id"],"name":r["name"],"mobile":r["mobile"],"email":r["email"],"isaddress":r["isaddress"]})
            
def write_address(list):
    with open ('data/address.csv',"w") as csvfile:
        fieldnames = ["id","user_id","address1","address2","pincode"]
        writer = csv.DictWriter(csvfile,fieldnames = fieldnames)
        writer.writeheader()
        for k in list:
            writer.writerow({"id":k["id"],"user_id":k["user_id"],"address1":k["address1"],"address2":k["address2"],"pincode":k["pincode"]})


# ------------------------------------

# Send Data 

@app.route('/listing')
def get_data():
    user_list = []
    with open ('data/user.csv')as csvfile:
        reader = csv.DictReader(csvfile)
        for r in reader:
            user_list.append(r)
            with open ('data/address.csv')as csvfile:
                reader2 = csv.DictReader(csvfile)
                for k in reader2:
                    if r["id"] == k["user_id"]:
                        r.update({"addressid":k["id"],"address1":k["address1"],"address2":k["address2"],"pincode":k["pincode"]})
    return json.dumps(user_list)
                
# ---------------------------------------------------
                
# Adding User
               
@app.route('/create',methods=["POST"])
def create_data():
    name = request.json["name"]
    mobile = request.json["mobile"]
    email= request.json["email"]
    isFile1 = os.path.isfile('data/user.csv')
    user_list = []
    with open('data/user.csv',"a")as csvfile:
        fieldnames1 = ["id","name","mobile","email","isaddress"]
        writer = csv.DictWriter(csvfile,fieldnames = fieldnames1)
        if not isFile1:
            writer.writeheader()
            user_id = 1
        else:
            with open('data/user.csv') as csvfile:  
                reader = csv.DictReader(csvfile)
                for r in reader:
                    user_list.append(r)
                user_id = int(user_list[len(user_list)-1]["id"])+1
        writer.writerow({"id":user_id,"name":name,"mobile":mobile,"email":email ,"isaddress":"No"})
    return json.dumps({"id":user_id,"name":name,"mobile":mobile,"email":email})

# ------------------------------------------------------------------------------------

# Adding Address
    
@app.route('/addaddress',methods=['POST'])
def addaddress():
    user_id= request.json["id"]
    address1 = request.json["address1"]
    address2 = request.json["address2"]
    pincode = request.json["pincode"]
    adder_list = []
    with open ('data/address.csv',"a") as csvfile:
        fieldnames = ["id","user_id","address1","address2","pincode"]
        writer = csv.DictWriter(csvfile,fieldnames)
        with open ('data/address.csv','r') as csvfile:
            reader = csv.DictReader(csvfile)  
            for r in reader:
                adder_list.append(r)
            if len(adder_list) == 0 :
                id = 1
            else:
                id = int(adder_list[len(adder_list)-1]["id"])+1
        writer.writerow({"id":id,"user_id":user_id,"address1":address1,"address2":address2,"pincode":pincode})
    temp = []
    with open ('data/user.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for k in reader:
            if k["id"] == user_id:
                k["isaddress"] = "Yes"
            temp.append(k)
    with open ('data/user.csv',"w") as csvfile:
        fieldnames1 = ["id","name","mobile","email","isaddress"]
        writer = csv.DictWriter(csvfile,fieldnames = fieldnames1)
        writer.writeheader()
        for r in temp:
            writer.writerow({"id":r["id"],"name":r["name"],"mobile":r["mobile"],"email":r["email"] ,"isaddress":r["isaddress"]})
    return json.dumps(temp)

# ----------------------------------------------------------

# Deleting User

@app.route("/deleteuser/<id>")
def deleteuser(id):
    user_list = []
    address_list = []
    with open("data/user.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for r in reader:
            if r["id"] == id:
                continue
            user_list.append(r)
    with open("data/address.csv") as csvfile:
        reader2 = csv.DictReader(csvfile)
        for k in reader2:
            if k["user_id"] == id:
                continue
            address_list.append(k)
    # print(user_list)
    write_user(user_list)
    write_address(address_list)
    data = get_data()
    print(data)
    return data

# -------------------------------------------------------------------------

# Delete Addresss

@app.route("/deleteaddress/<id>")
def deleteaddress(id):
    user_list = []
    address_list = []
    with open("data/address.csv") as csvfile:
        reader2 = csv.DictReader(csvfile)
        for k in reader2:
            if k["id"] == id:
                user_id = k["user_id"]
                continue
            address_list.append(k)
    with open("data/user.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for r in reader:
            if r["id"] == user_id:
                r["isaddress"] = "No"
            user_list.append(r)
    # print(user_list)
    write_user(user_list)
    write_address(address_list)
    data = get_data()
    print(data)
    return data