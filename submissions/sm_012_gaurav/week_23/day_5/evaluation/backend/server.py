from flask import Flask, request
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'evalsql'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

from blueprint_auth import auth
from blueprint_company import company
from blueprint_jobs import jobs
app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(company, url_prefix = '/company')
app.register_blueprint(jobs, url_prefix='/jobs')

@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH'
    return response
