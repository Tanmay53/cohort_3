from flask import Blueprint
from flask import request, make_response, jsonify
import json
import csv
from helper_auth_grocery import *
from flask_mysqldb import MySQL
import MySQLdb as err
from server import mysql

auth = Blueprint("auth",__name__)


#New User Registration
@auth.route('/signup',methods=['POST'])
def signup():
    username = request.json['username']
    Type = request.json['type']
    password = request.json['password']
    #generating new salt and password_hash
    salt = generate_salt()
    password_hash = multiple_hashing(password,salt)

    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
        """INSERT INTO users(username,type,salt,password) VALUES(%s,%s,%s,%s)""", (username,Type,salt,password_hash) 
        )
        mysql.connection.commit()
        cursor.close()
        message = {"message": "Registration Completed"}
        return message
    except err.IntegrityError: #if email already present it will show integrity error
        message = {"message":"Username is already present"}
        return message


#Login
@auth.route('/login', methods = ['POST'])
def login():
    username = request.json['username']
    password = request.json['password']

    #if username is present
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT id,username,type,salt,password FROM users WHERE username = %s""",(username,))
    user = cursor.fetchone()
    cursor.close()
    if user: #if user is present
        if multiple_hashing(password,user['salt']) == user['password']: #if password is correct
            #returning token
            token = Encode(user['id'])
            return {"message":"Login Success",
                "token":token,"userType":user['type'],"status":True}
        else:
            return {"message":"Password is incorrect","status":False}
    else:
        return {"message":"Username is not present in record","status":False}


    


