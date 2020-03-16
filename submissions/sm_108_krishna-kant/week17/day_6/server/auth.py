from flask import Blueprint
from flask import request, make_response, jsonify
import jwt
import uuid
import hashlib
import os
import csv
import json
auth = Blueprint('auth',__name__)

USER_CSV_PATH="/home/coder-hex/Desktop/OpenSource/cohort_3/submissions/sm_108_krishna-kant/week17/day_6/server/data/users.csv"

@auth.route("/login",methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    response = auth_middleware(email,password)

    return json.dumps(response)
    
@auth.route('/signup',methods=['POST'])
def signup():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    user_data = write_user(name,email,password)
    return json.dumps(user_data)

@auth.route('/details')
def details():
    token = request.headers.get('Authorization')
    try:
        token = token.split(' ')[1]
        decode_data = jwt.decode(token,'secret',algorithm=['HS256'])
        user = read_user(decode_data['email'])
        user.pop("password")
        user.pop('salt')
        return json.dumps(user)
    except:
        return json.dumps({"msg":"Invalid Token Login Again..!!"})

@auth.route('/picture', methods = ['POST'])
def upload_file():
   if request.method == 'POST':
       f = request.files['picture']
       print(f)
       location = "static/img/" + f.filename
       f.save(location)
       return {"path": location}

def write_user(name,email,password):
    id = uuid.uuid1()
    salt = generate_salt()
    print(salt)
    password = password + salt
    password = md5_hash(password)
    payload = read_user(email)
    if payload is not None:
        return {"msg":"User already Registered"}
    user_data = {"id":str(id),"name":name,"email":email,"password":password,"salt":salt}
    with open(USER_CSV_PATH,'a') as usercsv:
        fieldsname = ['id','name','email','password','salt']
        writer = csv.DictWriter(usercsv,fieldnames=fieldsname)
        writer.writerow(user_data)
    user_data.pop('password',None)
    user_data.pop('salt',None)
    return {"msg":"User Signup Successfully","data":user_data}

def read_user(email):
    user_data = None
    with open(USER_CSV_PATH) as usercsv:
        reader = csv.DictReader(usercsv)
        for row in reader:
            if row['email'] == email:
                user_data = row
                break
    return user_data

def auth_middleware(email,password):
    user = read_user(email)
    if user is None:
        return {"msg":"User Not Found Please Register"}
    password = password + user['salt']
    password = md5_hash(password)
    if password == user['password']:
        token = jwt.encode({"id":user['id'],"email":user['email']},"secret",algorithm='HS256')
        print(token)
        return {"msg":"Login Successful","token":token}
    else:
        return {"msg":"Invalid Password"} 

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    print(hash.hexdigest())
    return hash.hexdigest()

def generate_salt():
    salt = uuid.uuid1()
    return str(salt)
