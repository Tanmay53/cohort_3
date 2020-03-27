from blueprint_user import user
from blueprint_classes import classes
from blueprint_section import section
from blueprint_subject import subject
from blueprint_teacher import teacher
from flask import Flask, request
import json

app = Flask(__name__)
app.register_blueprint(user, url_prefix='/user')
app.register_blueprint(classes, url_prefix='/classes')
app.register_blueprint(section, url_prefix='/section')
app.register_blueprint(subject, url_prefix='/subject')
app.register_blueprint(teacher, url_prefix='/teacher')


@app.after_request
def add_header(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')

    return response 