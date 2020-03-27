from flask import Flask,Blueprint
from flask_cors import CORS
from flask_mysqldb import MySQL


app = Flask(__name__)
mysql = MySQL(app)
CORS(app)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '$uryA11472'
app.config['MYSQL_DB'] = 'musicalbum'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

from Blueprint_users import users
from Blueprint_adddata import adddata
from Bluprint_senddata import senddata

app.register_blueprint(users,url_prefix='/users')
app.register_blueprint(adddata,url_prefix='/data')
app.register_blueprint(senddata,url_prefix='/datalist')
