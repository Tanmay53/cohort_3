from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)

mysql = MySQL(app)
app.config["MYSQL_USER"] = "aalinds"
app.config["MYSQL_PASSWORD"] = "mysqlaalind"
app.config["MYSQL_DB"] = "grocery_store"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

from auth.blueprint_auth import auth
from products.blueprint_products import products
from categories.blueprint_categories import categories

app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(products, url_prefix="/products")
app.register_blueprint(categories, url_prefix="/categories")


@app.after_request
def add_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE"
    return response
