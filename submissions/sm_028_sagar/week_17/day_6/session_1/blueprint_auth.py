from flask import Blueprint
from flask import request
import hashlib
import os
import json
import csv

auth = Blueprint("auth", __name__)

def generate_salt():
    salt = os.urandom(16)
    print(salt.encode('base-64'))
    return salt.encode('base-64')

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    # print(hash.hexdigest())
    return hash.hexdigest()

def multiple_hashing(string,salt):
    string = string + salt
    hashed_string = md5_hash(string)
    for i in range(50):
        hashed_string = md5_hash(hashed_string)

    return hashed_string

@auth.route('/signup',methods=['POST'])
def signup():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']

    #collecting in sample arr
    isEmailPresent = False
    id = 0
    with open('data/users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            id = row['id']
            print(row['email'])
            if row['email'] == email:
                isEmailPresent = True
        
        newId = int(id)+1

    #generating new salt and password_hash
    salt = generate_salt()
    password_hash = multiple_hashing(password,salt)
    
    if isEmailPresent: return json.dumps('Email is already registered')
    else:
        with open('data/users.csv','a') as csvfile:
            fieldnames = ['id','name','email','salt','password_hash']
            writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
            writer.writerow({'id':newId,'name':name,'email':email,'salt':salt,'password_hash':password_hash})
        return json.dumps('User Successfully Registered')



#function to check password:
def isPasswordAvailable(password,email):

    salt = ''
    #read file and check for salt
    isPresent = False
    saved_hashed_password = ''
    with open ('data/users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['email'] == email:
                isPresent = True
                salt = row['salt']
                saved_hashed_password = row['password_hash']
                break
        
    if not isPresent:
            return 'Email is Not Present'
    else:
        hashed_password = multiple_hashing(password,salt)

        if hashed_password == saved_hashed_password:
            return {'message':'Login Successfull','status':True}
        else: return {'message':'Invalid Password','status':False}



@auth.route('/login',methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    output_message = ''

    output_message = isPasswordAvailable(password,email)

    return json.dumps(output_message)
    
            
        