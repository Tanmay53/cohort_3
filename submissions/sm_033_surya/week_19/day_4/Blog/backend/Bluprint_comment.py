from flask import Blueprint
from flask import Flask
from flask import request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from server import mysql
from server import md5_hash
from server import generate_salt
import base64
import jwt
import hashlib
import os
import json

comment = Blueprint("comment",__name__)

@comment.route('/comments/<id>', methods=["GET", "POST"])
def getcomments(id):
    if request.method == "GET":
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        try:
            jwt.decode(token_encoded, 'user', algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """select * from comment_table where blog_id = %s""", (id,)
            )
            results = cursor.fetchall()
            cursor.close()
            items = []
            for item in results:
                cursor = mysql.connection.cursor()
                cursor.execute(
                    """select name from users where id = %s""", (
                        item["user_id"],)
                )
                name = cursor.fetchall()
                cursor.close()
                print(name[0])
                item.update(name[0])
                items.append(item)
            return jsonify(items)
        except:
            return json.dumps({"message": "some error appears"})
        
# Delete Comment ##############

@comment.route('/deletecomment/<id>', methods=["GET", "POST"])
def deletecomments(id):
    if request.method == "GET":
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        try:
            jwt.decode(token_encoded, 'user', algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """delete  from comment_table where id = %s""", (id,)
            )
            mysql.connection.commit()
            cursor.close()
            return json.dumps({"message": "success"})
        except:
            return json.dumps({"message": "some error appears"})

@comment.route('/addcomment/<id>', methods=["POST"])
def createcomment(id):
    blog_id = id
    content = request.json["content"]
    category_id = request.json["category_id"]
    token = request.headers.get("Authorization")
    token_encoded = token.split(' ')[1]
    try:
        decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
        date = "2020-02-26"
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO comment_table (user_id,category_id,blog_id,content,date) VALUES(%s,%s,%s,%s,%s)""", (
                decode_data["id"], category_id, blog_id, content, date)
        )
        cursor.connection.commit()
        cursor.close()
        return json.dumps({"message": "successfully added"})
    except:
        return json.dumps({"message": "some error appears"})

# Commnet Update ################

@comment.route('/singlecomment/<id>', methods=["GET", "POST"])
def singlecomment(id):
    if request.method == "GET":
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        try:
            jwt.decode(token_encoded, 'user', algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """select * from comment_table where id = %s""", (id,)
            )
            results = cursor.fetchall()
            cursor.close()
            items = []
            for item in results:
                items.append(item)
            return jsonify(items)
        except:
            return json.dumps({"message": "some error appears"})
    else:
        content = request.json["content"]
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        try:
            jwt.decode(token_encoded, 'user', algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """UPDATE comment_table SET content = %s WHERE id = %s""", (
                    content, id)
            )
            cursor.connection.commit()
            cursor.close()
            return json.dumps({"message": "updted"})
        except:
            return json.dumps({"message": "some error appears"})
