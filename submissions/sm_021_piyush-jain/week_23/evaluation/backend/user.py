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


# function to give user filter income
@user.route("/population/<val>")
def population(val):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans and val !="All":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ select place.id,info.id as stat_id, country,city,population,income from place join info on info.place_id=place.id where population <=%s order by country asc""",(int(val),)
        )
        population = cursor.fetchall()
        cursor.close()
        return jsonify(population)

    elif ans and val =="All":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ select place.id,info.id as stat_id, country,city,population,income from place join info on info.place_id=place.id  order by country asc"""
        )
        population = cursor.fetchall()
        cursor.close()
        return jsonify(population)  
    else:
        return({"message":"No population"}) 





# function to give user filter income
@user.route("/income/<val>")
def income(val):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans and val !="All":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ select place.id,info.id as stat_id, country,city,population,income from place join info on info.place_id=place.id where income <=%s order by country asc""",(int(val),)
        )
        income = cursor.fetchall()
        cursor.close()
        return jsonify(income)

    elif ans and val =="All":
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ select place.id,info.id as stat_id, country,city,population,income from place join info on info.place_id=place.id  order by country asc"""
        )
        income = cursor.fetchall()
        cursor.close()
        return jsonify(income)  
    else:
        return({"message":"No income"})  