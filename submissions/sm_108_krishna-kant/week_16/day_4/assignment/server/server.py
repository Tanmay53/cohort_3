from flask import Flask
from blueprint_user import user
from blueprint_book import book

import csv;
import json

app = Flask(__name__)
app.register_blueprint(user,url_prefix="/user")
app.register_blueprint(book,url_prefix='/book')


@app.route('/')
def initial_route():
    return "Server Running"

app.run(debug=True)