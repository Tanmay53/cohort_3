from flask  import Flask
from flask_cors import CORS
from flask_mysqldb import MySQL


app = Flask(__name__)
CORS(app)
mysql = MySQL(app)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '$uryA11472'
app.config['MYSQL_DB'] = 'library'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

from Blueprint_addbook import addbook
from Blueprint_displaydata import showdata
from Bluprint_deletebook import deletebook
from Blueprint_Editbook import editbook
app.register_blueprint(addbook,url_prefix ="/add")
app.register_blueprint(showdata,url_prefix = '/getdata')
app.register_blueprint(deletebook,url_prefix = '/deletedata')
app.register_blueprint(editbook,url_prefix = '/editdata')
