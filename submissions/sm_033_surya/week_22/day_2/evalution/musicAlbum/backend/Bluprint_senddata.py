from flask import Flask, request, jsonify, Blueprint, json
from server import mysql
import jwt

senddata = Blueprint('senddata', __name__)


@senddata.route('/getdata',methods=["GET","POST"])
def listofdata():
    if request.method == "GET":
        token = request.headers.get("Authorization")
        encoded_data = token.split(' ')[0]
        try:
            listdata = []
            jwt.decode(encoded_data, 'users', algorithms=['HS256'])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """select albums.id,artists.name,albums.album_name,albums.rel_year from albums left join artists on artist_id = artists.id"""
            )
            result = cursor.fetchall()
            cursor.close()
            for r in result:
                listdata.append(r)
            return jsonify(listdata)
        except:
            return json.dumps({"message": "error"})
    else:
        searchvalue = request.json['content']
        token = request.headers.get("Authorization")
        encoded_data = token.split(' ')[0]
        query =  "select albums.id,artists.name,albums.album_name,albums.rel_year from albums left join artists on artist_id = artists.id WHERE artists.name LIKE '%"+searchvalue+"%'"
        try:
            jwt.decode(encoded_data, 'users', algorithms=['HS256'])
            listdata=[]
            cursor = mysql.connection.cursor()
            cursor.execute(query)
            result = cursor.fetchall()
            cursor.close()
            for r in result:
                listdata.append(r)
            return jsonify(listdata)
        except:
            return json.dumps({"message": "errasfdor"})
        


@senddata.route('/deletealbum/<id>')
def deletealbum(id):
    token = request.headers.get("Authorization")
    encoded_data = token.split(' ')[0]
    try:
        jwt.decode(encoded_data, 'users', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM albums WHERE id = %s""", (id,)
        )
        cursor.connection.commit()
        cursor.close()
        return json.dumps({"message": "deleted"})
    except:
        return json.dumps({"message": "error"})


@senddata.route('/edit/<id>')
def editalbum(id):
    token = request.headers.get("Authorization")
    encoded_data = token.split(' ')[0]
    try:
        jwt.decode(encoded_data, 'users', algorithms=['HS256'])
        data = []
        cursor = mysql.connection.cursor()
        cursor.execute(
            """select albums.id,artists.id as artistid,artists.name,albums.album_name,albums.rel_year from albums left join artists on artist_id = artists.id where albums.id = %s""",(id,)
        )
        result = cursor.fetchall()
        cursor.close()
        for r in result:
            data.append(r)
        return jsonify(data[0])
    except:
        return json.dumps({"message": "error"})
    

@senddata.route('/albumedit/<id>',methods=['POST'])
def updatealbum(id):
    artistid = request.json["artistid"]
    albumname = request.json["albumtitle"]
    relyear= request.json["relyear"]
    
    token = request.headers.get("Authorization")
    encoded_data = token.split(' ')[0]
    try:
        jwt.decode(encoded_data, 'users', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """UPDATE albums SET album_name = %s,artist_id = %s ,rel_year=%s WHERE id = %s""", (albumname,artistid,relyear,id)
        )
        cursor.connection.commit()
        cursor.close()
        return json.dumps({"message": "updated"})
    except:
        return json.dumps({"message": "error"})
