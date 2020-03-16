from flask import Flask, request
from blueprint_user import user
from blueprint_address import address
import os, csv, json

app = Flask(__name__)
app.register_blueprint(user, url_prefix = '/user')
app.register_blueprint(address, url_prefix = '/address')