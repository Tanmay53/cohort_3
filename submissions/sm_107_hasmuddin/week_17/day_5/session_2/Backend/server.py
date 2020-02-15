from flask import Flask
from blueprint_user import userdata
from blueprint_address import useradd
import csv

app = Flask(__name__)
app.register_blueprint(userdata, url_prefix="/user")
app.register_blueprint(useradd, url_prefix="/address")


@app.route("/")
def myHome():
    return "Home Page"
