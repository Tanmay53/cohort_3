from flask import Blueprint, jsonify
from flask import request
import os
import json
import base64
import jwt
import hashlib
import math
from server import mysql

productdata = Blueprint('productdata', __name__)


@productdata.route("/category", methods=["GET"])
def categoryList():
    token = request.headers.get("Authorization")
    encoded_data = token.split(' ')[0]
    try:
        listdata = []
        jwt.decode(encoded_data, 'users', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM Category"""
        )
        result = cursor.fetchall()
        cursor.close()
        for r in result:
            listdata.append(r)
        print(listdata)
        return jsonify(listdata)
    except:
        return json.dumps({"message": "error"})


@productdata.route("/productdata", methods=["GET", "POST"])
def sendproductdata():
    if request.method == "POST":
        productname = request.json["productname"]
        categoryid = request.json["categoryid"]
        price = request.json["price"]
        token = request.headers.get("Authorization")
        encoded_data = token.split(' ')[0]
        try:
            jwt.decode(encoded_data, 'users', algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """INSERT INTO Products (name,category_id,price) values(%s,%s,%s)""", (
                    productname, categoryid,price) )
            cursor.connection.commit()
            cursor.execute(
                """select type from Category where id = %s""",(categoryid,)
            )
            categorytype = cursor.fetchone()
            
            print("hi")
            cursor.execute(
                """select id from Products where name = %s""",(productname,)
            )
            productid = cursor.fetchone()
            cursor.close()
            print(categorytype,productid)
            return json.dumps({"category":categorytype['type'],"id":productid["id"]})
            
        except:
            return json.dumps({"message": "error"})
    else:
        token = request.headers.get("Authorization")
        encoded_data = token.split(' ')[0]
        try:
            listdata = []
            count = request.args.get("count",type=int)
            offset = request.args.get("offset",type=int)
            jwt.decode(encoded_data, 'users', algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
               """select Products.id,name,Category.type as category,price from Products left join Category on Products.category_id = Category.id"""
            )
            result = cursor.fetchall()
            cursor.close()
            for r in result:
                listdata.append(r)
            totalpages = math.ceil (float(len(listdata) / float(count)))
            endpoint = offset+count
            print("hello")
            return jsonify({"totalpages": int(totalpages),"listofdata":listdata[offset:endpoint]})
        except:
            return json.dumps({"message": "error occurs"})