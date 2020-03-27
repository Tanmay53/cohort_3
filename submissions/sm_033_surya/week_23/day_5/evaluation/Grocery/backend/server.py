from flask import Flask,Blueprint
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
mysql= MySQL(app)
CORS(app)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '$uryA11472'
app.config['MYSQL_DB'] = 'grocery'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'


from Blueprint_auth import usersdata
from Blueprint_data import productdata

app.register_blueprint(usersdata,url_prefix="/auth")
app.register_blueprint(productdata,url_prefix="/data")