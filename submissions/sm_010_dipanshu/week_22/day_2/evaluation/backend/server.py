from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
mysql = MySQL(app)

app.config["MYSQL_USER"] = "dipanshu"
app.config["MYSQL_PASSWORD"] = "MasaiSchool02@"
app.config["MYSQL_DB"] = "twitter"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

from auth import auth
from profile import profile
from tweet import tweet
from follow import follow

app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(profile, url_prefix="/profile")
app.register_blueprint(tweet, url_prefix="/tweet")
app.register_blueprint(follow, url_prefix="/follow")


@app.after_request
def add_header(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization ')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE')

    return response
