from flask import Blueprint
from flask import request
import hashlib
import csv
import os
import json
auth = Blueprint("auth",__name__)

def read_csv():
    result=[]
    with open('data/db.csv') as csvfile:
        reader=csv.DictReader(csvfile)
        for row in reader:
            result.append(row)
    return result
def write_csv(row,makeHeader):
    with open('data/db.csv','a') as csvfile:
        fieldnames=['name','email','salt','password']
        writer=csv.DictWriter(csvfile,fieldnames=fieldnames)
        if makeHeader:
            writer.writeheader()
        writer.writerow(row)

def generate_salt():
    salt = os.urandom(16)
    print(salt.encode('base-64'))
    return salt.encode('base-64')

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    print(hash.hexdigest())
    return hash.hexdigest()

@auth.route("/signup",methods=['POST'])
def create():
    name = request.json["name"]
    email= request.json["email"]
    password=request.json["password"]
    data = read_csv()
    for row in data:
        if row["email"] == email:
            return json.dumps({"error": True,  "message": "Registration failed, user already exists"})
    salt=generate_salt()
    hash_password=md5_hash(salt+" "+password)
    for _ in range(50):
        hash_password=md5_hash(hash_password)
    # print(salt,hash_password)
    row={"name":name,"email":email,"salt":salt,"password":hash_password}
    if len(data)==0:
        write_csv(row,True)
    else:
        write_csv(row,False)
    return json.dumps({"error": False,  "message": "Registration successful"})

@auth.route("/login",methods=['POST'])
def auth_login():
    email=request.json["email"]
    password=request.json["password"]
    data = read_csv()
    for row in data:
        if row["email"]==email:
            salt=row["salt"]
            hash_password=md5_hash(salt+" "+password)
            for _ in range(50):
                hash_password = md5_hash(hash_password)
            if hash_password==row["password"]:
                return json.dumps({"error":False,"token":md5_hash(email)})
            else:
                return json.dumps({"error":True,"message": "Invalid login creadentials"})