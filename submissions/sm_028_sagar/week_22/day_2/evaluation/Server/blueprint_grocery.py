from flask import Blueprint
from flask import request, make_response, jsonify
import json
import csv
from helper_auth_grocery import *
from flask_mysqldb import MySQL
import MySQLdb as err
from server import mysql
import math

grocery = Blueprint("grocery",__name__)


#get all categories
@grocery.route('/categories')
def categories():
    cursor = mysql.connection.cursor()
    cursor.execute(
    """SELECT * FROM categories"""
    )
    result = cursor.fetchall()
    cursor.close()
    return {"categories": result}


#check authenticity of admin
def isAdminValid(id):
    print('isUserValid',id)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM users WHERE id = %s""",(id,)
    )
    user = cursor.fetchone()
    cursor.close()
    if user:return True
    else: return False


#add product
@grocery.route('/add',methods = ['POST'])
def add_product():
    productName = request.json['productName']
    price = request.json['price']
    category_id = int(request.json['category_id'])

    auth_header = request.headers.get('Authorization')
    admin_id = Decode(auth_header)
    admin_id = int(admin_id['id'])
    if isAdminValid(admin_id):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO products(name,price,category_id,admin_id) VALUES(%s, %s, %s, %s)""",(productName,price,category_id,admin_id)
        )
        mysql.connection.commit()
        cursor.close()

        return {'message':'Product successfully added'}
    else:
        return {'message':'Admin is not registered in record'}


#get all products for admin
@grocery.route('/admin/products')
def get_product():
    auth_header = request.headers.get('Authorization')
    admin_id = Decode(auth_header)
    admin_id = int(admin_id['id'])

    if isAdminValid(admin_id):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT products.id, products.name,categories.name as category_name,price FROM products JOIN categories ON categories.id = products.category_id WHERE admin_id = %s;""",(admin_id,)
        )
        result = cursor.fetchall()
        cursor.close()
        products = []
        for i in result:
            products.append(i)

        return {'message':'admin product data sent','products':products}
    else:
        return {'message':'Admin is not registered in record'}




#get All Product Data added by all admins
@grocery.route('/allProducts')
def get_all_products():

    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT products.id, products.name,categories.name as category_name,price FROM products JOIN categories ON categories.id = products.category_id LIMIT 10;"""
    )
    result = cursor.fetchall()
    cursor.close()

    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT COUNT(id) as count FROM products"""
    )
    count = cursor.fetchone()
    cursor.close()
    print(count)
    pageCount = int(math.ceil(float(count['count'])/10))
    print(pageCount)

    products = []
    for i in result:
        products.append(i)

    return {'message':'all product data sent','products':products,'pageCount':pageCount}



#data based on button click
@grocery.route('/<page_no>')
def pageItem(page_no):
    offset = int(page_no)*10
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT products.id, products.name,categories.name as category_name,price FROM products JOIN categories ON categories.id = products.category_id LIMIT %s,10;""",(offset,)
    )
    result = cursor.fetchall()
    cursor.close()

    products = []
    for i in result:
        products.append(i)

    return {'message':'all product data sent','products':products}


#get all categorywise data
@grocery.route('category/<cat_id>')
def category_wise(cat_id):
    cat_id = int(cat_id)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT products.id, products.name,categories.name as category_name,price FROM products JOIN categories ON categories.id = products.category_id WHERE category_id = %s""",(cat_id,)
    )
    result = cursor.fetchall()
    cursor.close()

    products = []
    for i in result:
        products.append(i)

    return {'message':'category-wise data sent','productData':products}

        