from flask import Blueprint
from flask import request, jsonify
import json
from helper import getid
from server import mysql

addbook = Blueprint('addbook', __name__)


@addbook.route('/send')
def sendcategoriess():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from categories"""
    )
    results = cursor.fetchall()
    cursor.close()
    temp = []
    for r in results:
        temp.append(r["categorytype"])
    return jsonify(temp)


        
        
        
        
def updateauthcategory(titleid,authorlist,categorylist):
    print(titleid,authorlist,categorylist)   
    for i in authorlist:
        authorid = getid("authors", "name", i['data'])
        if authorid == None:
            cursor = mysql.connection.cursor()
            cursor.execute(
                """INSERT INTO authors (name) values(%s)""", (i['data'],)
            )
            cursor.connection.commit()
            cursor.close()
            authorid = getid("authors", "name", i['data'])
        
        cursor = mysql.connection.cursor()
        cursor.execute(
            """select * from book_author where book_id = %s and author_id=%s""",(titleid['id'],authorid['id'])
        )
        out = cursor.fetchone()
        if out == None:
            cursor.execute(
            """INSERT INTO book_author (book_id,author_id) values(%s,%s)""", (
            titleid['id'], authorid['id'])
            )
            cursor.connection.commit()
            cursor.close()
            # print(titleid, authorid)
    for r in categorylist:
        categoryid = getid("categories", "categorytype", r['data'])
        
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM book_category WHERE book_id = %s AND category_id = %s""",(titleid['id'],categoryid['id'])
        )
        result = cursor.fetchone()
        if result == None:
            cursor.execute(
                """INSERT INTO book_category (book_id,category_id) values(%s,%s)""", (
                    titleid['id'], categoryid['id'])
            )
            cursor.connection.commit()
            cursor.close()
    return json.dumps({"message": "updated"})


@addbook.route('/addbook', methods=['POST'])
def addingbook():
    title = request.json['title']
    authorlist = request.json['author']
    publisher = request.json['publisher']
    categorylist = request.json['category']
    titleid = getid("books", "title", title)
    if titleid == None:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO books (title,publishername) values(%s,%s)""", (title, publisher)
        )
        cursor.connection.commit()
        cursor.close()
        titleid = getid("books", "title", title)
    updateauthcategory( titleid,authorlist,categorylist)
    return  json.dumps({"message": "updated"})
