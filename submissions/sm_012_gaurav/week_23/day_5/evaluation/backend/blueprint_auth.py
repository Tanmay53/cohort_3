from flask import Blueprint, request
from helpers_auth import *
from server import mysql
import json

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['POST'])
def signUp():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    cursor = mysql.connection.cursor()
    try:
        if userExists(cursor, email):
            return json.dumps({'message': 'User Already Exists', 'error': True})
        else:
            addUser(cursor, name, email, password)
            return json.dumps({'message': 'User Signed Up Successfully', 'error': False})
    except:
        return json.dumps({'message': 'Some Error Occurred', 'error': True})
    finally:
        mysql.connection.commit()
        cursor.close()

@auth.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    cursor = mysql.connection.cursor()
    try:
        if not userExists(cursor, email):
            return json.dumps({'message': 'User Does Not Exist. Please Sign Up', 'error': False})
        else:
            token = checkCredentials(cursor, email, password)
            if not token:
                return json.dumps({'message': 'Invalid Password', 'error': True})
            else:
                return json.dumps({'token': token, 'error': False})
    except:
        return json.dumps({'message': 'Some Error Occured', 'error': True})
    finally:
        mysql.connection.commit()
        cursor.close()
    