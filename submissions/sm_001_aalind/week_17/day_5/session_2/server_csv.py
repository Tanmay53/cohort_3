from flask import Flask, request
from blueprint_user import user
from blueprint_address import address
from helpers import *
import json

app = Flask(__name__)
app.register_blueprint(user, url_prefix='/users')
app.register_blueprint(address, url_prefix='/addresses')

@app.route('/users')
def users():
  users = getUsers()
  
  return json.dumps(users)

@app.route('/users', methods=['POST'])
def create_user():
  name = request.json.get('name')
  email = request.json.get('email')
  mobile = request.json.get('mobile')

  creation = add_user(name, email, mobile)

  return json.dumps(creation)
