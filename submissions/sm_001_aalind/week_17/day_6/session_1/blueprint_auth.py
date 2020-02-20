from flask import Blueprint, request
from helpers import *
import json

auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['POST'])
def register():
  name = request.json.get('name')
  email = request.json.get('email')
  password = request.json.get('password')

  registration = user_registration(name, email, password)

  return json.dumps(registration)

@auth.route('/login', methods=['POST'])
def login():
  email = request.json.get('email')
  password = request.json.get('password')

  logging_in = user_login(email, password)

  return json.dumps(logging_in)