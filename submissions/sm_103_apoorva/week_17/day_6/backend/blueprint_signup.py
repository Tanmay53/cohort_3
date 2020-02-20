from flask import Blueprint
from flask import request
import base64
import csv
import json
import hashlib
import os

signup = Blueprint("signup", __name__)

paths = "/home/apoorva/coding/week_17/day_6/backend/data/users.csv"

def read_csv():
    li = []
    with open (paths,'r') as csvfile:
        reader  = csv.DictReader(csvfile)
        for row in reader:
            li.append(dict(row))
        return li

def write_csv(name, email,salt, password_hash):
    li = read_csv()
    if len(li) is 0:
        with open(paths,'w') as csvfile:
            fieldnames = ['id','name','email','salt','password_hash']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow({'id' : 0, 'name' : name, 'email' : email, 'salt' : salt, 'password_hash' : password_hash})
    else:
        new_id = int(li[len(li)-1]["id"])+1
        with open(paths,'a') as csvfile:
            fieldnames = ['id','name','email','salt','password_hash']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow({'id' : new_id, 'name' : name, 'email' : email, 'salt' : salt, 'password_hash' : password_hash})

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    # print(hash.hexdigest())
    return hash.hexdigest()

def generate_salt():
    salt = os.urandom(16)
    # print("salt",base64.b64encode(salt))
    return base64.b64encode(salt)

# salt = generate_salt()
# # print(salt)
# md5 = md5_hash(str(salt)+"ghgfgjjf")
# print(md5)

@signup.route('/signup', methods = ['POST'])
def create():
    li = read_csv()
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']

    if len(li) is 0:
        salt = str(generate_salt())
        # print("salt",salt,password)
        pass_string = salt+password
        print(pass_string)
        new_pass = ""
        for i in range(15):
            new_pass = md5_hash(pass_string)
            pass_string = new_pass        

        write_csv(name,email,salt,new_pass)
        return "User Registered"
    else:
        for i in li:
            if i['email'] == email:
                return "Email Already exist"
            else:
                salt = str(generate_salt())
                # print("salt",salt,password)
                pass_string = salt+password
                print(pass_string)
                new_pass = ""
                for i in range(15):
                    new_pass = md5_hash(pass_string)
                    pass_string = new_pass        

                write_csv(name,email,salt,new_pass)
                return "User Registered"

    