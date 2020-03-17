from flask import Flask
from flask import Blueprint
from flask import jsonify
from flask import request
import json
import os.path
import jwt
import base64
import hashlib
from server import mysql
user = Blueprint("user", __name__,static_url_path='/static')
from registration import loggedPerson

# function to give user Sources
@user.route("/getSource")
def getSource():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT distinct(source) from terminal """
        )
        source = cursor.fetchall()
        print(source)
        cursor.close()
        return jsonify(source)
    else:
        return({"message":"No Sources"})   


# function to give user Destination
@user.route("/getDestination")
def getDestination():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT distinct(destination) from terminal """
        )
        destination = cursor.fetchall()
        print(destination)
        cursor.close()
        return jsonify(destination)
    else:
        return({"message":"No Sources"}) 

# function to give user Sources
@user.route("/Sources/<source>")
def Sources(source):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)

    if ans and source!="sources":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ select terminal.id,bus.id as bus_id, source,destination,bus_no,schedule from terminal join bus on bus.terminal_id=terminal.id where source=%s order by destination desc""",(source,)
        )
        source = cursor.fetchall()
        print(source)
        cursor.close()
        return jsonify(source)

    elif ans and source =="sources":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ select terminal.id,bus.id as bus_id, source,destination,bus_no,schedule from terminal join bus on bus.terminal_id=terminal.id order by destination desc"""
        )
        sources = cursor.fetchall()
        print(sources)
        cursor.close()
        return jsonify(sources) 

    else:
        return({"message":"No Sources"})   

# function to give user Sources
@user.route("/Destination/<destination>")
def Destination(destination):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans and destination !="destinations":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ select terminal.id,bus.id as bus_id, source,destination,bus_no,schedule from terminal join bus on bus.terminal_id=terminal.id where destination=%s order by destination desc""",(destination,)
        )
        destination = cursor.fetchall()
        print(destination)
        cursor.close()
        return jsonify(destination)

    elif ans and destination =="destinations":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ select terminal.id,bus.id as bus_id, source,destination,bus_no,schedule from terminal join bus on bus.terminal_id=terminal.id order by destination desc"""
        )
        destination = cursor.fetchall()
        print(destination)
        cursor.close()
        return jsonify(destination)  

    else:
        return({"message":"No destination"})  