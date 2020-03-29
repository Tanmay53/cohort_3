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
app.config['MYSQL_DB'] = 'region'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)
           


# function to get all distinct countries
@app.route("/getCountries")
def getCountries():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT distinct(name) from countries """
        )
        countries = cursor.fetchall()
        print(countries)
        cursor.close()
        return jsonify(countries)
    else:
        return ({"message": "No Country"})


# function to delete a country
@app.route("/deleteCountry/<int:idx>/<int:stat_id>")
def deleteCountry(idx, stat_id):
    print("here")
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM info where id=%s""", (stat_id,)
        )
        cursor.connection.commit()
        cursor.close()
        print("query exceuted")
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM place where id=%s""", (idx,)
        )
        cursor.connection.commit()
        cursor.close()
        return ({"message": "Deleted"})
    else:
        return ({"message": "Not authorized"})



# function to get city details
@app.route("/getStatDetails/<int:idx>/<int:stat_id>")
def getStatDetails(idx, stat_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT * from info where id=%s and place_id=%s""", (
                stat_id, idx)
        )
        detail = cursor.fetchall()
        print(detail)
        cursor.connection.commit()
        cursor.close()
        return jsonify(detail)
    else:
        return ({"message": "Bus not available"})





# function to update/edit city details
@app.route("/updateStatDetails/<int:idx>/<int:stat_id>", methods=["POST"])
def updateCityDetails(idx, stat_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if request.method == "POST":
        if ans:
            cursor = mysql.connection.cursor()
            print(request.json["population"], request.json["income"])
            cursor.execute(
                """ Update info set population=%s, income=%s where id=%s and place_id=%s""", (
                    request.json["population"], request.json["income"], stat_id, idx)
            )
            cursor.connection.commit()
            cursor.close()
            return ({"message": "Updated Successfully"})
        else:
            return ({"message": "No Cities"})






# function to add a  country
@app.route("/addCountry", methods=["POST"])
def addCountry():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if request.method == "POST":
        if ans:
            print(request.json["country"])
            cursor = mysql.connection.cursor()
            cursor.execute(
                """INSERT INTO countries(id,name)values(NULL,%s)""", (
                    request.json["country"],)
            )
            cursor.connection.commit()
            cursor.close()
            return {"message": "Added country"}
        else:
            return ({"message": "No Country"})









# function to check for availability of the city and aadding based on result
@app.route("/addCity", methods=["POST"])
def addCity():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if request.method == "POST":
        if ans:
            cursor = mysql.connection.cursor()
            print(request.json["country"], request.json["city"])
            cursor.execute(
                """SELECT * from place where country=%s and city=%s""", (
                    request.json["country"], request.json["city"])
            )
            available = cursor.fetchall()
            cursor.connection.commit()
            cursor.close()
            print(available)
            if(not available):
                cursor = mysql.connection.cursor()
                cursor.execute(
                    """INSERT INTO place(id,country,city) values(NULL,%s,%s)""", (
                        request.json["country"], request.json["city"])
                )
                cursor.connection.commit()
                cursor.close()

                cursor = mysql.connection.cursor()
                cursor.execute(
                    """SELECT id from place where country=%s and city=%s""", (
                        request.json["country"], request.json["city"])
                )
                idx = cursor.fetchall()
                cursor.connection.commit()
                cursor.close()
                print(idx[0]["id"])

                cursor = mysql.connection.cursor()
                cursor.execute(
                    """INSERT INTO info(id,place_id,population,income)values(NULL,%s,%s,%s)""", (int(
                        idx[0]["id"]), request.json["population"], request.json["income"])
                )
                cursor.connection.commit()
                cursor.close()

            else:
                cursor = mysql.connection.cursor()
                cursor.execute(
                    """SELECT id from place where country=%s and city=%s""", (
                        request.json["place"], request.json["city"])
                )
                idx = cursor.fetchall()
                cursor.connection.commit()
                cursor.close()
                print(idx)

                cursor = mysql.connection.cursor()
                cursor.execute(
                    """INSERT INTO info(id,place_id,population,income)values(NULL,%s,%s,%s)""", (int(
                        idx[0]["id"]), request.json["population"], request.json["income"])
                )
                cursor.connection.commit()
                cursor.close()
            return({"message": "checked"})



# function to check pagination
@app.route("/pagination",methods=["POST"])
def pagination():
    print("coming")
    if request.method=="POST":

        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        if ans:
            total_items = []
            cursor = mysql.connection.cursor()
            cursor.execute(
            # """ select terminal.id,bus.id as bus_id, source,destination,bus_no,schedule from terminal join bus on bus.terminal_id=terminal.id  order by destination desc"""
            """ select place.id,info.id as stat_id, country,city,population,income from place join info on info.place_id=place.id  order by country asc"""
            )

            total_items = cursor.fetchall()
            # count_pages=math.floor(total_items/request.json["dataPerPage"])
            cursor.connection.commit()
            cursor.close()   
        
            total_pages = math.ceil(len(total_items)/request.json["dataPerPage"])
            prev_page_end = (request.json["activePage"]-1) * request.json["dataPerPage"]
            curr_page_end =request.json["activePage"] *request.json["dataPerPage"]
            curr_page_items = total_items[prev_page_end:curr_page_end]
            print(curr_page_items)
            return {"total_pages":total_pages,"curr_page_items":curr_page_items}
        else:
            return({"message":"trying pagination"})
       


from user import user
from registration import auth
from registration import loggedPerson
app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(user, url_prefix="/user")
