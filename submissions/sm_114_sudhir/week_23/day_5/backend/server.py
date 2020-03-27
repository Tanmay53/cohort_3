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
app.config['MYSQL_DB'] = 'eval2'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


@app.route('/')
def home():
    curr_page = request.args.get('page', default = 1, type = int)
    per_page = request.args.get('per_page', default = 10, type = int)
    prev_page_end = (curr_page -1) * per_page
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT product.id, product, price, categories.category FROM product JOIN categories ON product.category_id = categories.id LIMIT %s, %s""", (prev_page_end, per_page)
    )
    results = cursor.fetchall()
    cursor.execute(
        """SELECT COUNT(product.id) as count FROM product JOIN categories ON product.category_id = categories.id"""
    )
    total_products = cursor.fetchall()
    cursor.close()
    products = []
    for product in results:
        products.append(product)
    total_rows = []
    for row in total_products:
        total_rows.append(row)
    return {"products": products, "totalRows": total_rows}

@app.route('/register', methods=['POST'])
def admin_register():
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
        return {"error":False, "message":"user registered successfully"}

@app.route('/login', methods=['POST'])
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

@app.route('/add/product', methods=['POST'])
def add_product():
    if request.method == 'POST':
        body = request.json
        product = body['product']
        price = body['price']
        category_id = body['category_id']
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO product (product, price, category_id)
            VALUES (%s, %s, %s)""", (str(product), price, category_id)
        )
        mysql.connection.commit()
        cursor.close()
        return { "message": "Product Added Successfully"}

@app.route('/add/categories', methods=['POST'])
def add_categories():
    if request.method == 'POST':
        body = request.json
        category = body['category']
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO categories (category)
            VALUES (%s)""", [(str(category))]
        )
        mysql.connection.commit()
        cursor.close()
        return {"message":"Category Added Successfully"}

@app.route('/get/categories')
def get_categories():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM categories"""
    )
    results = cursor.fetchall()
    cursor.close()
    categories = []
    for category in results:
        categories.append(category)
    return {"categories": categories}

@app.route('/product/filter')
def filter_bus():
    category = request.args.get('category')
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM (SELECT product.id, product, price, categories.category FROM product JOIN categories ON product.category_id = categories.id) as filter_product WHERE filter_product.category = %s""", [str(category)]
    )
    results = cursor.fetchall()
    cursor.close()
    products_filtered = list()
    for product in results:
        products_filtered.append(product)
    return {'productFiltered': products_filtered}

@app.route('/product_price')
def product():
    sort = request.args.get('sort')
    cursor = mysql.connection.cursor()
    if sort == "asc":
        cursor.execute(
            """SELECT product.id, product, price, categories.category FROM product JOIN categories ON product.category_id = categories.id ORDER BY price asc"""
        )
        results = cursor.fetchall()
    else:
        cursor.execute(
            """SELECT product.id, product, price, categories.category FROM product JOIN categories ON product.category_id = categories.id ORDER BY price desc"""
        )
        results = cursor.fetchall()
    cursor.close()
    sorted_product = []
    for product in results:
        sorted_product.append(product)
    return {"sortedProduct": sorted_product}

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