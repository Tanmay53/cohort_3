from flask import Flask
from flask import Blueprint
from flask import jsonify
from flask import request
import json
import os.path
import jwt
import base64
import hashlib
from server import mysql
auth = Blueprint("auth", __name__,static_url_path='/static')


def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))


def md5_hash(string, salt):
    new_string = string+salt
    print(new_string)
    hash = hashlib.md5()
    hash.update(new_string.encode('utf-8'))
    return hash.hexdigest()

# function to check existence of Email
@auth.route('/check/<email>', methods=['GET'])
def check(email):
    res = 0
    if request.method == 'GET':
        print("here")
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM registration where email=%s""", (email,)
        )
        res = cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        if(res):
            return {"value": "0"}
        else:
            return {"value": "1"}

# function to signIn a user
@auth.route('/login', methods=['POST'])
def loggin():
    if request.method == 'POST':
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT salt FROM registration where email=%s""", (
                request.json["email"],)
        )
        salt = cursor.fetchall()
        print(salt[0]["salt"])
        cursor.connection.commit()
        cursor.close()
        verify = md5_hash(request.json["password"], salt[0]["salt"])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT password,id FROM registration where password=%s""", (
                verify,)
        )
        result = cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        if result:
            encoded_data = jwt.encode(
                {"id": result[0]["id"]}, "masai", algorithm="HS256")
            print(encoded_data)
            return {"token": str(encoded_data)}
        else:
            return({"message": "Enter Correct password"})


# function to register a user
@auth.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        salt = generate_salt()
        password = md5_hash(request.json["password"], salt)
        print(salt, password)
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO registration(id,name,email,phone,date,salt,password)values(NULL,%s,%s,%s,%s,%s,%s)""", (
                request.json["name"], request.json["email"], request.json["number"], request.json["date"], salt, password)
        )
        cursor.connection.commit()
        cursor.close()
        return "success"


# function to get logged in user
@auth.route('/loggedPerson')
def loggedPerson(token):
    token = token.split(' ')[1]
    result = jwt.decode(token, "masai", algorithms=['HS256'])
    print(result["id"], "result")
    if(result):
        return result
    else:
        return False

# function add a profile
@auth.route('/userProfile', methods=['POST'])
def userProfile():
    if request.method == 'POST':
        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        if(ans):
            cursor=mysql.connection.cursor()
            f = request.files['image']
            location = "static/" + f.filename
            print(ans["id"])
            cursor.execute(
                """UPDATE registration set image=%s where id=%s""",(f.filename,ans["id"])
            )
            cursor.connection.commit()
            cursor.close()
            f.save(location)
            print(f.filename)
            return {"path": location}





# function to get joining date
@auth.route('/joiningDate')
def joining():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if(ans):
        print("date")
        cursor=mysql.connection.cursor()
        cursor.execute(
            """SELECT date FROM registration where id=%s""",(ans["id"],)
        )
        result=cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        return jsonify(result)

# function to pass the user id value back to user
@auth.route('/getId', methods=['POST'])
def getId():
    if request.method == 'POST':
        token = request.json["token"]
        result = jwt.decode(token, "masai", algorithms=['HS256'])
        Id = result["id"]
        print(Id)
        return jsonify(Id)


# # function to get logged in person name
@auth.route('/getName')
def name():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if(ans):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT name from registration where id=%s""", (ans["id"],)
        )
        result = cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        return jsonify(result)
    else:
        return({"message": "Invalid User"})
