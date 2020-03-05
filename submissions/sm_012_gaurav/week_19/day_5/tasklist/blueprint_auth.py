from flask import Blueprint, request
from helpers import generate_salt, generate_hash, generate_token, decode_token
from server import mysql
import json

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['POST'])
def signup():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    salt = generate_salt()
    password_hash = generate_hash(password, salt)
    cursor = mysql.connection.cursor()
    cursor.execute('''select email from users''')
    userFound = False
    for user in cursor.fetchall():
        if user['email'] == email:
            userFound = True
            break
    if userFound:
        mysql.connect.commit()
        cursor.close()
        return json.dumps({'message':'User Already Exists'})
    else:
        cursor.execute('''insert into users(name, email, salt, password) values(%s, %s, %s, %s)''', (name, email, salt, password_hash))
        mysql.connection.commit()
        cursor.close()
        return json.dumps({'message': 'User Signed Up successfully'})

@auth.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    cursor = mysql.connection.cursor()
    cursor.execute('''select id, email, salt, password from users''')
    idx = -1
    users = []
    for user in cursor.fetchall():
        users.append(user)
    mysql.connection.commit()
    cursor.close()
    for i, user in enumerate(users):
        if user['email'] == email:
            idx = i
            break
    if idx == -1:
        return json.dumps({'message': 'User Does not Exist', 'error': True})
    else:
        salt = users[idx]['salt']
        newHash = generate_hash(password, salt)
        if (newHash == users[idx]['password']):
            token = generate_token({'id': users[idx]['id']})
            return json.dumps({'token': token, 'error': False})
        else:
            return json.dumps({'message': 'Invalid Credentials', 'error': True})

@auth.route('/details')
def fetchDetails():
    token = request.headers['Authorization'].split(' ')[1]
    userId = decode_token(token)['id']
    cursor = mysql.connection.cursor()
    cursor.execute('''select name, email from users where id=%s''', (userId,))
    user = []
    for a in cursor.fetchall():
        user.append(a)
    user = user[0]
    mysql.connection.commit()
    cursor.close()
    return json.dumps({'data': user, 'error': False})