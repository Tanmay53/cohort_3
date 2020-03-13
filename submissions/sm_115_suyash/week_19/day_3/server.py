from flask import Flask
from flask import request, make_response, jsonify
import json
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "87654321"
app.config["MYSQL_DB"] = "blog"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"
mysql = MySQL(app)

@app.route("/create", methods=["POST"])
def create_folder():
    current_path = request.json["current_pathh"]
