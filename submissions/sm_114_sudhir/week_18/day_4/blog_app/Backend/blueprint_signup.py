from flask import Blueprint
import csv
import hashlib
import os
import base64
from flask import request
import csv
import json
signup  = Blueprint("signup",__name__)

def readcsv():
    with open('users.csv','r') as csvfile:
        reader = csv.DictReader(csvfile)
        arr = list()
        for data in reader:
            arr.append(data)
    return arr

def writefile(name,email,salt,password_hash):
    mydata = readcsv()
    for data in mydata:
        if data["email"] == email:
            return False
        else:
            continue
    else:
        with open('users.csv',"a") as csvfile:
            fieldnames = ["id","name","email","salt","password_hash","imageurl"]
            writer = csv.DictWriter(csvfile,fieldnames=fieldnames)
            if len(mydata) is 0:
                writer.writeheader()
            writer.writerow({"id":len(mydata)+1,"name":name,"email":email,"salt":salt,"password_hash":password_hash,"imageurl":''})
            
        return True

@signup.route('/register',methods=["POST"])
def register():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    salt = generate_salt()
    password_hash = salt + password
    new_password = ""
    for i in range(10):
        new_password = md5_hash(password_hash)
        password_hash =  new_password
    status = writefile(name,email,salt,new_password)
    if status:
        return json.dumps({"error":email,"message":"user registered successfully"})
    else:
        return json.dumps({"error":email +' already exists',"message":"registraion failed"})
def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()
def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))


