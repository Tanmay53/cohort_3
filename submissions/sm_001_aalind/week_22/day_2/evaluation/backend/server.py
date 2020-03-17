from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)

mysql = MySQL(app)
app.config["MYSQL_USER"] = "aalinds"
app.config["MYSQL_PASSWORD"] = "mysqlaalind"
app.config["MYSQL_DB"] = "grocery_store"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

from auth.blueprint_auth import auth

app.register_blueprint(auth, url_prefix="/auth")

