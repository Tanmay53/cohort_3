from flask import Flask, request, jsonify, Blueprint, json
from server import mysql
import jwt

adddata = Blueprint('adddata', __name__)


@adddata.route("/artist", methods=["POST"])
def addartist():
    artistname = request.json["artist"]
    token = request.headers.get("Authorization")
    encoded_data = token.split(' ')[0]
    try:
        jwt.decode(encoded_data, 'users', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO artists (name) values(%s)""", (artistname,)
        )
        cursor.connection.commit()
        cursor.close()
        return json.dumps({"message": "updated"})
    except:
        return json.dumps({"message": "error"})


@adddata.route("/albums", methods=["POST"])
def addalbum():
    artistid = request.json["artistid"]
    albumname = request.json["albumtitle"]
    relyear = request.json["relyear"]

    token = request.headers.get("Authorization")
    encoded_data = token.split(' ')[0]
    try:
        jwt.decode(encoded_data, 'users', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO albums (album_name,artist_id,rel_year) values(%s,%s,%s)""", (
                albumname, artistid, relyear)
        )
        cursor.connection.commit()
        cursor.close()
        return json.dumps({"message": "updated"})
    except:
        return json.dumps({"message": "error"})


@adddata.route("/artistlist", methods=["GET"])
def addartistlist():
    token = request.headers.get("Authorization")
    encoded_data = token.split(' ')[0]
    try:
        listdata = []
        jwt.decode(encoded_data, 'users', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM artists"""
        )
        result = cursor.fetchall()
        cursor.close()
        for r in result:
            listdata.append(r)
        # print(listdata)
        return jsonify(listdata)
    except:
        return json.dumps({"message": "error"})
