from flask import Blueprint, request
from functions import read_file, generate_salt, generate_hash, write_file
import json

auth = Blueprint("auth", __name__)

@auth.route('/signup', methods = ['POST'])
def signUp():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    users = read_file()
    userFound = False
    idx = 1
    if users:
        for user in users:
            if user['email'] == email:
                userFound = True
                break
        idx = users[-1]['id']
    if userFound:
        return json.dumps({'message': 'User already exists!!!', 'error': True})
    else:
        salt = generate_salt()
        password_hash = generate_hash(password, salt)
        users.append({'id': idx, 'name': name, 'email': email, 'salt': salt, 'password_hash': password_hash})
        write_file(users)
        return json.dumps({'message': 'User created Successfully!!!', 'error': False})

@auth.route('/login', methods = ['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    userFound = False
    users = read_file()
    idx = 0
    for i,user in enumerate(users):
        if user['email'] == email:
            userFound = True
            idx = i
            break
    if not userFound:
        return json.dumps({'message': "User does not exists!!!", 'error': True})
    else:
        salt = users[idx]['salt']
        password_hash = generate_hash(password, salt)
        if password_hash == users[idx]['password_hash']:
            return json.dumps({'message': 'User login Successful!!!', 'error': False})
        else:
            return json.dumps({'message': 'Wrong Password Entered!!!', 'error': True})

@auth.after_request
def addHeaders(response):
	response.headers['Access-Control-Allow-Origin'] = '*'
	response.headers['Access-Control-Allow-Methods'] = 'GET, POST, DELETE, PUT'
	response.headers['Access-Control-Allow-Headers'] = '*'
	return response
