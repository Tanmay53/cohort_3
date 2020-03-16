from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Python@mldl123'
app.config['MYSQL_DB'] = 'tasksql'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

from blueprint_auth import auth
from blueprint_tasklist import tasklist
from blueprint_tasks import tasks
app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(tasklist, url_prefix='/tasklist')
app.register_blueprint(tasks, url_prefix='/tasks')

@app.after_request
def addHeaders(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = '*'
    return response