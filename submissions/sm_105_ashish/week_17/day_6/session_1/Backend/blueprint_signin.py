from flask import Flask
from flask import Blueprint
import json
import csv
import hashlib
import jwt
app = Flask(__name__, static_url_path='/static')
from flask import request

signin  = Blueprint("signin",__name__)

def read_file():
    arr = list()
    with open('users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            arr.append(row)
    return arr
def check_auth(email,password):
    mylist = read_file()
    found = False
    salt = ""
    password_hash = ""
    for data in mylist:
        if data["email"] == email:
            salt = data["salt"]
            password_hash = data["password_hash"]
            found = True
            user = data
            break
    if found:
        input_password = salt + password
        new_password = ""
        for i in range(10):
            new_password = md5_hash(input_password)
            input_password =  new_password
        if new_password == password_hash:
            return ({"message":"login successfull","error":False,"user":data})
        else:
            return ({"message":"Incorrect email/password","error":True})
    else:
        return ({"message":"user Not found","error":True})

@signin.route('/login',methods=['POST'])
def login():
    email = request.json["email"]
    password = request.json["password"]
    response = check_auth(email,password)
    user = response["user"]
    encode_data = jwt.encode({"id": user["id"]}, 'secret', algorithm='HS256')
    return json.dumps({"message":response["message"],"token":str(encode_data),"error":False,"user":user["id"]})

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()