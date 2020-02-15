from flask import Blueprint
from flask import request
import csv
import json
import hashlib

signin = Blueprint("signin", __name__)

paths = "/home/apoorva/coding/week_17/day_6/backend/data/users.csv"

def read_csv():
    li = []
    with open (paths,'r') as csvfile:
        reader  = csv.DictReader(csvfile)
        for row in reader:
            li.append(dict(row))
        return li

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    # print(hash.hexdigest())
    return hash.hexdigest()

def change_to_hash(string):
    new_pass = ""
    for j in range(15):
        new_pass = md5_hash(string)
        string = new_pass
    return new_pass

@signin.route('/signin', methods = ['POST'])
def login():
    li = read_csv()
    email = request.json['email']
    password = request.json['password']
    print(email,password)
    val = 0

    pass_string = li[val]['salt']+ password
    print(pass_string)
    password_hash = change_to_hash(pass_string)

    for i in range(len(li)):
        if li[i]['email'] == email:
            val = i
            if password_hash == li[val]['password_hash']:
                return "Login Successful"
            else:
                return "Wrong Credential"
        else:
            return "Email Doesn't Exist"

    

    

    
            
           
            

