from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
mysql = MySQL(app)

app.config["MYSQL_USER"] = "aalinds"
app.config["MYSQL_PASSWORD"] = "mysqlaalind"
app.config["MYSQL_DB"] = "library_manager"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

from auth.blueprint_auth import auth
from user.blueprint_user import user
from book.blueprint_book import book

app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(user, url_prefix="/users")
app.register_blueprint(book, url_prefix="/books")
