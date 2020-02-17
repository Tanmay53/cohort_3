from flask import Blueprint
from flask import request
import csv
import json
import hashlib
import os
import base64

signup = Blueprint("signup", __name__)

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    print(hash.hexdigest())
    return hash.hexdigest()

def generate_salt():
    salt = os.urandom(16)
    # print(salt.encode('base-64'))
    return str(base64.b64encode(salt))


def register_user(name, email, salt, password):
    users = read_users()
    for line in users:
        if(line['email'] == email or line['name'] == name):
            return {'error': True, 'message': 'Registration failed, USER already exists'}
    if len(users) == 0:
        with open("data/users.csv", "w") as csvfile:
            fieldnames = ["id", "name", "email", "salt", "password_hash"]
            writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
            writer.writeheader()
            writer.writerow({'id': 0,
                            'name': name,
                            'email': email,
                            'salt': salt,
                            'password_hash': password
                            })
    else:
        with open("data/users.csv", "a") as csvfile:
            fieldnames = ["id", "name", "email", "salt", "password_hash"]
            writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
            writer.writerow({'id': len(users),
                            'name': name,
                            'email': email,
                            'salt': salt,
                            'password_hash': password
                            })
    return  {'error': False, 'message': 'Registration Successful'}

def read_users():
    users = list()
    with open("data/users.csv", "r") as csvfile:
        reader = csv.DictReader(csvfile)
        for line in reader:
            users.append(line)
    return users

# register_user(2, 'singh', 'sljf', 'hflskjd', 'dlhakj')
# print(read_users())

@signup.route("/signup", methods = ["POST"])
def user_signup():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']

    salt = generate_salt()
    password_hash = salt + password
    new_pswrd = ""
    for i in range(10):
        new_pswrd = md5_hash(str(password_hash))
        password_hash = new_pswrd

    user_reg = register_user(name, email, salt, new_pswrd)
    return json.dumps(user_reg)

    