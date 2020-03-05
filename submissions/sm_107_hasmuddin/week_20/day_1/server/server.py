from flask import Flask, request
import os
import json
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '12345'
app.config['MYSQL_DB'] = 'Files'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

# cur.fetchone() if limits == 1 else
@app.route("/")
def home():
    return "home page"


@app.route("/folder", methods=["POST"])
def folder_route():
    cur_fol_path = request.json["cur_fol_path"]
    if request.method == "POST":
        folder_name = request.json["folder_name"]
        try:
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO Folders (path, folder_name) VALUES(%s, %s)",
                        (cur_fol_path, folder_name))
            mysql.connection.commit()
            cur.close()
            return json.dumps({"error": "False", "message": "Added Successfully"})
        except Exception as e:
            return json.dumps({"error": "True", "message": e})


@app.route("/get_folder", methods=["POST"])
def get_folders():
    try:
        cur_fol_path = request.json["cur_fol_path"]
        cursor = mysql.connection.cursor()
        cursor.execute(
            "SELECT * FROM Folders WHERE path LIKE %s", (cur_fol_path,))
        folders = cursor.fetchall()
        cursor.close()
        all_folders = []
        for folder in folders:
            folder.update({"created_at": str(folder["created_at"])})
            all_folders.append(folder)
        return json.dumps({"error": "False", "data": all_folders, "message": "Folders fetched"})
    except Exception as e:
        return json.dumps({"error": "True", "message": e})
