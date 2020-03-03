import csv
from flask import Blueprint
import hashlib
from flask import request
import json


signin = Blueprint("signin", __name__)

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    print(hash.hexdigest())
    return hash.hexdigest()

@signin.route("/signin", methods = ["POST"])
def user_login():
    email = request.json['email']
    password = request.json['password']
    login = get_login(email, password)
    return json.dumps(login)



def read_user():
    users = list()
    with open('data/users.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for user in reader:
            users.append(user)
    return users

def get_login(email, password):
    users = read_user()
    user_ind = list()
    user_salt = ""
    for line in users:
        if line['email'] == email:
            user_salt += line['salt']

    # user_salt = user_ind[0]['salt']
    password_hash = user_salt + password
    new_pswrd = ""
    for i in range(10):
        new_pswrd = md5_hash(str(password_hash))
        password_hash = new_pswrd
    for line in users:
        if line['email'] == email and line['password_hash'] == password_hash:
            return {
                'error': False,
                'message': 'Login Successfully'
            }

    return {
        'error': True,
        'mesage': 'Invalid login creadentials'
    }


# print(get_login('lion.sud.k@gmail.com', 'nipsud'))

