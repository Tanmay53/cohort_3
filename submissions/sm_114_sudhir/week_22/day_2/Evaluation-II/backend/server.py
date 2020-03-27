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
    # pagination
    curr_page = request.args.get('page', default = 1, type = int)
    per_page = request.args.get('per_page', default = 5, type = int)
    prev_page_end = (curr_page -1) * per_page
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT buses.id, bus, schedule, t1.cities AS source, t2.cities AS destination FROM buses JOIN cities AS t1 ON t1.id = buses.source JOIN cities AS t2 on t2.id = buses.destination LIMIT %s, %s""", (prev_page_end, per_page)
    )
    results = cursor.fetchall()
    cursor.execute(
        """SELECT COUNT(buses.id) AS totalData FROM buses JOIN cities AS t1 ON t1.id = buses.source JOIN cities AS t2 on t2.id = buses.destination"""
    )
    result_data = cursor.fetchall()
    cursor.close()
    buses = []
    for bus in results:
        buses.append(bus)
    total_rows = []
    for row in result_data:
        total_rows.append(row)
    return {"buses": buses, "totalRows": total_rows}

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

@app.route('/delete/<int:id>', methods=['POST'])
def delete(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """DELETE FROM buses WHERE id = (%s)""", [str(id)]
    )
    mysql.connection.commit()
    cursor.close()
    return {"id": id, "message": "Deleted Successfully"}

@app.route('/bus/edit/<int:id>', methods=["POST"])
def edit_bus(id):
    if request.method == 'POST':
        body = request.json
        source = body['source']
        destination = body['destination']
        bus = body['bus']
        cursor = mysql.connection.cursor()
        cursor.execute(
            """UPDATE buses SET source = (%s), destination = (%s), bus = (%s) WHERE id = (%s)""", (source, destination, str(bus), id)
        )
        mysql.connection.commit()
        cursor.close()
        return { "message": "Bus Added Successfully"}

@app.route('/bus/filter')
def filter_bus():
    source = request.args.get('source')
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select *  from  (SELECT buses.id, bus, schedule, t1.cities AS source, t2.cities AS destination FROM buses JOIN cities AS t1 ON t1.id = buses.source JOIN cities AS t2 on t2.id = buses.destination) as filter where filter.source  = %s""", [str(source)]
    )
    results = cursor.fetchall()
    cursor.close()
    filtered_bus = list()
    for bus in results:
        filtered_bus.append(bus)
    return {'filteredBus': filtered_bus}

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