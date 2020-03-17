import json
import os.path
import csv
import jwt
import base64
import math
import hashlib
from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import jwt
app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Stupid@55655'
app.config['MYSQL_DB'] = 'evaluation'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)
           


# function to get all distinct cities
@app.route("/getCities")
def getCities():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT distinct(name) from city """
        )
        cities = cursor.fetchall()
        print(cities)
        cursor.close()
        return jsonify(cities)
    else:
        return ({"message": "No Cities"})


# function to delete a bus
@app.route("/deleteBus/<int:idx>/<int:bus_no>")
def deleteBus(idx, bus_no):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM bus where id=%s""", (bus_no,)
        )
        cursor.connection.commit()
        cursor.close()

        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM terminal where id=%s""", (idx,)
        )
        cursor.connection.commit()
        cursor.close()
        return ({"message": "Deleted"})
    else:
        return ({"message": "Not authorized"})


# function to get all distinct cities
@app.route("/getTable")
def getTable():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ select terminal.id,bus.id as bus_id, source,destination,bus_no,schedule from terminal join bus on bus.terminal_id=terminal.id  order by destination desc"""
        )
        table = cursor.fetchall()
        print(table)
        cursor.close()
        return jsonify(table)
    else:
        return ({"message": "No Cities"})


# function to get bus details
@app.route("/getBusDetails/<int:idx>/<int:bus_id>")
def getBusDetails(idx, bus_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT * from bus where id=%s and terminal_id=%s""", (
                bus_id, idx)
        )
        detail = cursor.fetchall()
        print(detail)
        cursor.connection.commit()
        cursor.close()
        return jsonify(detail)
    else:
        return ({"message": "Bus not available"})

# function to update/edit bus details
@app.route("/updateBusDetails/<int:idx>/<int:bus_id>", methods=["POST"])
def updateBusDetails(idx, bus_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if request.method == "POST":
        if ans:
            cursor = mysql.connection.cursor()
            print(request.json["bus_no"], request.json["schedule"])
            cursor.execute(
                """ Update bus set bus_no=%s, schedule=%s where id=%s and terminal_id=%s""", (
                    request.json["bus_no"], request.json["schedule"], bus_id, idx)
            )
            cursor.connection.commit()
            cursor.close()
            return ({"message": "Updated Successfully"})
        else:
            return ({"message": "No Cities"})


# function to add a  city
@app.route("/addCity", methods=["POST"])
def addCity():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if request.method == "POST":
        if ans:
            print(request.json["city"])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """INSERT INTO city(id,name)values(NULL,%s)""", (
                    request.json["city"],)
            )
            cursor.connection.commit()
            cursor.close()
            return {"message": "Added city"}
        else:
            return ({"message": "No Cities"})

# function to check for availability of the route
@app.route("/addBus", methods=["POST"])
def addBus():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if request.method == "POST":
        if ans:
            cursor = mysql.connection.cursor()
            print(request.json["source"], request.json["destination"])
            cursor.execute(
                """SELECT * from terminal where source=%s and destination=%s""", (
                    request.json["source"], request.json["destination"])
            )
            available = cursor.fetchall()
            cursor.connection.commit()
            cursor.close()
            print(available)
            if(not available):
                cursor = mysql.connection.cursor()
                cursor.execute(
                    """INSERT INTO terminal(id,source,destination) values(NULL,%s,%s)""", (
                        request.json["source"], request.json["destination"])
                )
                cursor.connection.commit()
                cursor.close()

                cursor = mysql.connection.cursor()
                cursor.execute(
                    """SELECT id from terminal where source=%s and destination=%s""", (
                        request.json["source"], request.json["destination"])
                )
                idx = cursor.fetchall()
                cursor.connection.commit()
                cursor.close()
                print(idx[0]["id"])

                cursor = mysql.connection.cursor()
                cursor.execute(
                    """INSERT INTO bus(id,terminal_id,bus_no,schedule)values(NULL,%s,%s,%s)""", (int(
                        idx[0]["id"]), request.json["number"], request.json["schedule"])
                )
                cursor.connection.commit()
                cursor.close()

            else:
                cursor = mysql.connection.cursor()
                cursor.execute(
                    """SELECT id from terminal where source=%s and destination=%s""", (
                        request.json["source"], request.json["destination"])
                )
                idx = cursor.fetchall()
                cursor.connection.commit()
                cursor.close()
                print(idx)

                cursor = mysql.connection.cursor()
                cursor.execute(
                    """INSERT INTO bus(id,terminal_id,bus_no,schedule)values(NULL,%s,%s,%s)""", (int(
                        idx[0]["id"]), request.json["number"], request.json["schedule"])
                )
                cursor.connection.commit()
                cursor.close()
            return({"message": "checked"})


# function to check pagination
@app.route("/pagination/<int:data>")
def pagination(data):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        total_items = []
        cursor = mysql.connection.cursor()
        cursor.execute(
        """ select terminal.id,bus.id as bus_id, source,destination,bus_no,schedule from terminal join bus on bus.terminal_id=terminal.id  order by destination desc"""
        )
        total_items = cursor.fetchall()
        cursor.connection.commit()
        cursor.close()    
        curr_page = data
        per_page = 5
        total_pages = math.ceil(len(total_items)/per_page)
        prev_page_end = (curr_page-1) * per_page
        curr_page_end = curr_page * per_page
        curr_page_items = total_items[prev_page_end:curr_page_end]
        print(curr_page_items)
        return jsonify(curr_page_items)
    else:
        return({"message":"trying pagination"})


# function to get page count
@app.route("/getPageCount")
def getPageCount():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        total_items = []
        cursor = mysql.connection.cursor()
        cursor.execute(
        """ select terminal.id,bus.id as bus_id, source,destination,bus_no,schedule from terminal join bus on bus.terminal_id=terminal.id  order by destination desc"""
        )
        total_items = cursor.fetchall()
        cursor.connection.commit()
        cursor.close()    
        curr_page = 1
        per_page = 5
        print(len(total_items),"page count")
        total_pages = math.ceil(len(total_items)/per_page)
        return jsonify(total_pages)
    else:
        return({"message":"trying pagination"})        

    





from registration import auth
from user import user
from registration import loggedPerson
app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(user, url_prefix="/user")
