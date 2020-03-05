from flask import Flask
from flask_cors import CORS
import hashlib
import os
import base64
from flask import request
import json
from flask_mysqldb import MySQL
import jwt

app = Flask(__name__)
CORS(app)


app.config["MYSQL_HOST"] = "localhost"
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '999Plus1@'
app.config['MYSQL_DB'] = 'folder'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


@app.route("/")
def home():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from folders """,)
    res = cursor.fetchall()
    cursor.close()
    data = []
    for i in res:
        data.append(i)
    return json.dumps(data)


@app.route("/add_folder", methods=["POST"])
def add_new():
    path = request.json["path"]
    folder_name = request.json["folder_name"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """insert into folders (path,name) values (%s,%s)""", (path, folder_name))
    mysql.connection.commit()
    cursor.close()
    return "folder added"


@app.route("/get_folder", methods=["POST"])
def get_folders():
    level = str(request.json["path_level"])
    print("my level is ", level)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from folders where path like %s """, (level,))
    res = cursor.fetchall()
    cursor.close()
    folders = []
    for i in res:
        folders.append(i)
    return json.dumps(folders)


@app.route("/search", methods=["POST"])
def seach_folder():
    query = request.json["search"]
    cursor = mysql.connection.cursor()
    cursor.execute("""select * from folders where name like "%s" """, (query,))
    res = cursor.fetchall()
    cursor.close()
    data = []
    for i in res:
        data.append(i)
    return json.dumps(data)


if __name__ == "__main__":
    app.run(debug=True)

#  select * from orders_table join users_table on user_id = users_table.id join product_table on product_id = product_table.id limit 10 ;
