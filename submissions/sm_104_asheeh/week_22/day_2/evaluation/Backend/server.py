from flask import Flask, request, make_response, jsonify
from flask_mysqldb import MySQL
import json
import hashlib
import os
import base64
import jwt

app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '@ps123'
app.config['MYSQL_DB'] = 'album_records'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

@app.route('/')
def home():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT artists.id, artists.name, albums.name
          as album_name, albums.year
          FROM artists JOIN albums ON artists.id = albums.artist_id;
        """
    )
    result = cursor.fetchall()
    cursor.close()
    records = list()
    for item in result:
        records.append(item)
    return {"records": records}

@app.route('/auth/signup', methods = ["POST"])
def signup():
    ask = request.json
    name = ask["name"]
    email = ask["email"]
    password = ask["password"]
    salt = generate_salt()
    salted_password = salt + password
    password_hash = hash_cycle(salted_password)

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (name, email, salt, password_hash)
         VALUES (%s, %s, %s, %s)""",
         (str(name), str(email), str(salt), str(password_hash))
    )
    mysql.connection.commit()
    cursor.close()
    return {"message": "Signup Successful"}

@app.route('/auth/login', methods = ["POST"])
def login():
    ask = request.json
    email = ask["email"]
    password = ask["password"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM users WHERE email = %s
        """, (str(email),)
    )
    result = cursor.fetchall()
    cursor.close()
    user_data = list()
    for item in result:
        user_data.append(item)
    if len(user_data) is not 0:
        for user in user_data:
            if user["password_hash"] == hash_cycle(user["salt"] + password):
                encode_data = jwt.encode({"id": user["id"]}, 'masai', algorithm='HS256')
                return json.dumps({"message": "Signin Successful!", "token": str(encode_data)})
            else:
                return {"message": "Wrong Password"}
    return {"message": "Please make sure you are a registered user."}

def generate_salt():
    salt = os.urandom(16)
    # print(salt.encode('base-64'))
    return str(base64.b64encode(salt))

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    # print(hash.hexdigest())
    return hash.hexdigest()

def hash_cycle(string):
    for i in range(5):
        string = md5_hash(string)
    return string

def token_decoder():
    auth_header = request.headers.get("Authorization")
    token_encoded = auth_header.split(" ")[1]
    decode_data = jwt.decode(token_encoded, "masai", algorithm = ["HS256"])
    return decode_data
    
