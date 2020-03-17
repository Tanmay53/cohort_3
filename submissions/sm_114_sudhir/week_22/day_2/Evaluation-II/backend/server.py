from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import hashlib
import base64
import json
import os
import jwt

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'nipLOVESsud@94'
app.config['MYSQL_DB'] = 'bus_routes'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


@app.route('/')
def home():
    cursor = mysql.connection.cursor()
    # source
    cursor.execute(
        # """SELECT * FROM buses"""
        """select cities.cities as source, buses.bus, buses.schedule from cities join buses on cities.id = buses.source"""
    )
    result1 = cursor.fetchall()
    # destination
    cursor.execute(
        """select cities.cities as destination from cities join buses on cities.id = buses.destination"""
    )
    result2 = cursor.fetchall()
    cursor.close()
    buses = []
    for bus in result1:
        buses.append(bus)
    for bus in result2:
        buses.append(bus)
    return {"buses": buses}


@app.route('/auth/register', methods=['POST'])
def user_register():
    if request.method == 'POST':
        body = request.json
        name = body['name']
        email = body['email']
        password = body['password']
        salt = generate_salt()
        salt_password = salt + password
        password_hash = hash_cycle(salt_password)
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO users (name, email, salt, password_hash)
            VALUES (%s, %s, %s, %s)""", (str(name), str(email), str(salt), str(password_hash))
        )
        mysql.connection.commit()
        cursor.close()
        return {"error":email, "message":"user registered successfully"}

@app.route('/auth/login', methods=['POST'])
def login():
    if request.method == 'POST':
        body = request.json
        email = body['email']
        password = body['password']
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM users WHERE email = %s""", [(str(email))]
        )
        results = cursor.fetchall()
        cursor.close()
        users = []
        for user in results:
            users.append(user)
        
        if len(users) != 0:
            for user in users:
                if user['password_hash'] == hash_cycle(user['salt'] + password):
                    encode_data = jwt.encode({"id": user["id"]}, 'sudhir', algorithm='HS256')
                    return {"message": "Sign successfully", "token": str(encode_data), "error": False}
                else:
                    return {'message': "Wrong Password", "error": True}
        return {'message': 'Please Signup first', "error": True}

@app.route('/add_cities', methods=['POST'])
def add_cities():
    if request.method == 'POST':
        body = request.json
        city = body['city']
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO cities (cities)
            VALUES (%s)""", [(str(city))]
        )
        mysql.connection.commit()
        cursor.close()
        return {"message":"City Added Successfully"}

@app.route('/get_cities')
def get_cities():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM cities"""
    )
    results = cursor.fetchall()
    cursor.close()
    cities = []
    for city in results:
        cities.append(city)
    return {"cities": cities}

@app.route('/add_bus', methods=["POST"])
def add_bus():
    if request.method == 'POST':
        body = request.json
        source = body['source']
        destination = body['destination']
        bus = body['bus']
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO buses (source, destination, bus)
            VALUES (%s, %s, %s)""", (source, destination, str(bus))
        )
        mysql.connection.commit()
        cursor.close()
        return { "message": "Bus Added Successfully"}

@app.route('/delete', methods=['POST'])
def delete():
    return 'Delete'

def hash_cycle(usr_str):
    for i in range(10):
        usr_str = md5_hash(usr_str)
        return usr_str

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))

def token_decoder():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'sudhir', algorithms=['HS256'])
    return decode_data