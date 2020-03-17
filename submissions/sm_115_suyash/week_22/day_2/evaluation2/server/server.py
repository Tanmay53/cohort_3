from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import json
import jwt
import hashlib
import base64
import os


app = Flask(__name__)

app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "87654321"
app.config["MYSQL_DB"] = "artist"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"
mysql = MySQL(app)


# function for generating salt
def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))

# function for hashing password
def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

# function for get salt from database
def get_salt(email):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT salt,email FROM users WHERE email = %s """,(email,)
        )
        res = cursor.fetchone()
        return res["salt"] if res["email"] == email else False
    except Exception as e:
        print(str(e))
        return False
    finally:
        cursor.close()

# function for check user allready exist ?
def check_email(email):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(""" SELECT COUNT(id) AS count FROM users where email = %s """, (email,))
        res = cursor.fetchone()
        if res["count"] == 0:
            return True
        else:
            return False
    except Exception as e:
        print(str(e))
    finally:
        cursor.close()

# Route for user signup
@app.route("/signup", methods=["POST"])
def signup():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    if(check_email(email)):
        salt = generate_salt()
        password = md5_hash(password + salt)
        try:
            cursor = mysql.connection.cursor()
            cursor.execute(
                """ INSERT INTO users(name,email,password,salt) VALUES (%s,%s,%s,%s) """, (name,email,password,salt)
            )
            cursor.connection.commit()
            return jsonify({"message":"User added successfully...", "error":False}),200
        except Exception as err:
            return jsonify({"message":str(err), "error":True}),400
        finally:
            cursor.close()
    else:
        return jsonify({"message":email + " user allready exist ...", "error":True}),400

# Route for user login
@app.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    salt = get_salt(email)
    if salt:
        password = md5_hash(password + salt)
        try:
            cursor = mysql.connection.cursor()
            cursor.execute(
                """ SELECT * FROM users WHERE password = %s """, (password,)
            )
            res = cursor.fetchone()
            token = jwt.encode({"id":res["id"], "email":res["email"]}, "nS/Z9k", algorithm="HS256")
            return jsonify({"message": "Login successfully", "error": False, "token":token, "user":res}),200
        except Exception as err:
            return jsonify({"message": str(err), "error": True}),400
        finally:
            cursor.close()
    else:
        return jsonify({"message": "Wrong Password", "error": True}),400

# Route for adding new artist
@app.route("/create/artist", methods=["POST"])
def create_artist():
    name = request.json["name"]
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ INSERT INTO artists(name) VALUES(%s) """, (name,)
        )
        cursor.connection.commit()
        return jsonify({"message": "Artist added successfully.","error":False}),200
    except Exception as e:
        return jsonify({"message": str(e),"error":True}),400
    finally:
        cursor.close()

@app.route("/show/artist", methods=["GET"])
def show_artist():
    data = []
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT * FROM artists """
        )
        data = cursor.fetchall()
        return jsonify({"message": "Successfully","error":False, "data": data}),200
    except Exception as e:
        return jsonify({"message": str(e), "error":True}),400
    finally:
        cursor.close()

# Route for add year and album in artist
@app.route("/create/albums", methods=["POST"])
def create_artist_info():
    album = request.json["album"]
    year = int(request.json["year"])
    artist_id = int(request.json["artist_id"])
    print(album, year, artist_id)
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ INSERT INTO artist_info(album, year, artist_id) VALUES(%s,%s,%s) """, (album, year, artist_id)
        )
        cursor.connection.commit()
        return jsonify({"message": "Album added successfully.","error":False}),200
    except Exception as e:
        print(str(e))
        return jsonify({"message": str(e),"error":True}),400
    finally:
        cursor.close()


# Route for Show all artist data
@app.route("/show/data", methods=["GET"])
def show_data():
    data = []
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT artist_info.album, artist_info.year,artist_info.id, artists.name FROM  artist_info LEFT JOIN artists ON artist_info.artist_id = artists.id """
        )
        data = cursor.fetchall()
        return jsonify({"message": "Successfully","error":False, "data": data}),200
    except Exception as e:
        return jsonify({"message": str(e), "error":True}),400
    finally:
        cursor.close()


@app.route("/update/album", methods=["POST"])
def update_album():
    album = request.json["album"]
    year = request.json["year"]
    id = request.json["id"]
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ UPDATE artist_info SET album = %s, year = %s WHERE artist_id = %s """, (album,year,id)
        )
        data = cursor.fetchall()
        return jsonify({"message": "Update Successfully","error":False}),200
    except Exception as e:
        return jsonify({"message": str(e), "error":True}),400
    finally:
        cursor.close()

@app.route("/delete/album", methods=["POST"])
def delete_album():
    id = request.json["id"]
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ DELETE FROM artist_info WHERE id = %s """,(id,)
        )
        data = cursor.connection.commit()
        return jsonify({"message": "Delete Successfully","error":False}),200
    except Exception as e:
        return jsonify({"message": str(e), "error":True}),400
    finally:
        cursor.close()

@app.route("/sort/data", methods=["GET"])
def sort_data():
    data = []
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT artist_info.album, artist_info.year, artists.name FROM  artist_info LEFT JOIN artists ON artist_info.artist_id = artists.id ORDER BY year ASC """
        )
        data = cursor.fetchall()
        return jsonify({"message": "Successfully","error":False, "data": data}),200
    except Exception as e:
        return jsonify({"message": str(e), "error":True}),400
    finally:
        cursor.close()

@app.route("/filter/data", methods=["GET"])
def filter_data():
    artist_id = request.json["artist_id"]
    data = []
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT artist_info.album, artist_info.year, artist_info.artist_id, artists.name FROM  artist_info LEFT JOIN artists ON artist_info.artist_id = artists.id WHERE artist_id = %s """,(artist_id,)
        )
        data = cursor.fetchall()
        return jsonify({"message": "Successfully","error":False, "data": data}),200
    except Exception as e:
        return jsonify({"message": str(e), "error":True}),400
    finally:
        cursor.close()



if __name__ == "__main__":
    app.run(debug=True)