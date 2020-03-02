from flask import Flask
from flask_cors import CORS
import json
from flask_mysqldb import MySQL


app = Flask(__name__,static_url_path="/static")
mysql = MySQL(app)
CORS(app)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '$uryA11472'
app.config['MYSQL_DB'] = 'tasklist_db'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'



from Blueprint_auth import auth
from Blueprint_Tlist import tlist
from Blueprint_task import task
from Blueprint_profile import profile
app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(tlist,url_prefix="/tlist")
app.register_blueprint(task,url_prefix="/task")
app.register_blueprint(profile,url_prefix="/profile")

