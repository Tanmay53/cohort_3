from blueprint_user import user
from blueprint_task import task
from flask import Flask, request
import json

app = Flask(__name__)
app.register_blueprint(user, url_prefix='/user')
app.register_blueprint(task, url_prefix='/task')


# write routes here
@app.route('/')
def home():
    return 'Task Manager App'


@app.after_request
def add_header(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')

    return response 