from flask import Blueprint
from flask import request
from flask import json
import hashlib
import os
import csv

auth = Blueprint("auth",__name__)

@auth.route('/signup',methods=["POST"])
def signup():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    salt = generate_salt()
    new_password = md5_hash(password+str(salt))
    print(new_password)
    password_hash = new_password
    isExists = os.path.isfile('data/userauth.csv')
    with open ('data/userauth.csv',"a") as csvfile:
        fieldnames = ["id","name","email","salt","password_hash"]
        writer = csv.DictWriter(csvfile,fieldnames= fieldnames)
        if not isExists:
            writer.writeheader()
            id = 1
        else:
            list = []
            with open('data/userauth.csv')as csvfile:
                reader = csv.DictReader(csvfile)
                for r in reader:
                    list.append(r)
                id = int(list[len(list)-1]["id"])+1
        writer.writerow({"id":id,"name":name,"email":email,"salt":salt,"password_hash":password_hash})
        return json.dumps({"message":"success"})

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    # print(hash.hexdigest())
    return hash.hexdigest()
def generate_salt():
    salt = os.urandom(16)
    print(salt)
    return salt

@auth.route("/login",methods=["POST"])
def login():
    email= request.json["email"]
    password = request.json["password"]
    with open ('data/userauth.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for r in reader:
            if r["email"] == email:
                salt = r["salt"]
                reg_password = r["password_hash"]
    new_password = md5_hash(password + str(salt))
    if new_password == reg_password:
        return json.dumps({"message":"true"})
    else:
        return json.dumps({"message":"false"})
    