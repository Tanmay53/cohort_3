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

post = Blueprint("post",__name__)


@post.route('/singlepost/<id>', methods=["GET", "POST"])
def getsinglepost(id):
    if request.method == "GET":
        print(id)
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        try:
            decode_data = jwt.decode(
                token_encoded, 'user', algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """select * from blog_table where id = %s """, (id,)
            )
            results = cursor.fetchall()
            cursor.close()
            items = []
            for item in results:
                items.append(item)
            print(items)
            cursor = mysql.connection.cursor()
            cursor.execute(
                """select name from users where id = %s """, (
                    items[0]["user_id"],)
            )
            names = cursor.fetchall()
            cursor.close()
            name = names[0]
            # print(name)
            return jsonify({"data": items, "userid": decode_data["id"], "user_name": name["name"]})
        except:
            return json.dumps({"message": "some error happens"})
    else:
        blog_id = id,
        print("heloooo")
        title = request.json["title"]
        content = request.json["content"]
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        try:
            decode_data = jwt.decode(
                token_encoded, 'user', algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """UPDATE blog_table SET title = %s,content = %s WHERE id = %s""", (
                    title, content, blog_id)
            )
            mysql.connection.commit()
            cursor.close()
            return json.dumps({"message": "updated"})
        except:
            return json.dumps({"message": "some error appears"})
        

@post.route('/deletepost/<id>', methods=["GET", "POST"])
def deletepost(id):
    if request.method == "GET":
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        try:
            jwt.decode(token_encoded, 'user', algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """delete  from comment_table where blog_id = %s""", (id,)
            )
            mysql.connection.commit()
            cursor.close()
            cursor = mysql.connection.cursor()
            cursor.execute(
                """delete  from blog_table where id = %s""", (id,)
            )
            mysql.connection.commit()
            cursor.close()
            return json.dumps({"message": "success"})
        except:
            return json.dumps({"message": "some error appears"})
        

@post.route('/createpost', methods=["POST"])
def createpost():
    title = request.json["title"]
    content = request.json["content"]
    # category = request.json["Category"]
    token = request.headers.get("Authorization")
    token_encoded = token.split(' ')[1]
    try:
        decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
        date = "2020-02-26"
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO blog_table (user_id,category_id,title,content,date) VALUES(%s,%s,%s,%s,%s)""", (
                decode_data["id"], 2, title, content, date)
        )
        cursor.connection.commit()
        cursor.close()
        return json.dumps({"message": "successfully added"})
    except:
        return json.dumps({"message": "some error appears"})