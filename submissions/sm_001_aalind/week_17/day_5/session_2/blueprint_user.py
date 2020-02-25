from flask import Blueprint, request
from helpers import *
import json

user = Blueprint('user', __name__)

@user.route('/<int:user_id>')
def get_user(user_id):
  user = getUser(user_id)
  user_addresses = getUserAddresses(user_id)

  return json.dumps({'user': user, 'addresses': user_addresses})

@user.route('/<int:user_id>', methods=['PUT'])
def modify_user(user_id):
  name = request.json.get('name')
  email = request.json.get('email')
  mobile = request.json.get('mobile')

  modification = modifyUser(user_id, name, email, mobile)

  return json.dumps(modification)

@user.route('/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
  deletion = deleteUser(user_id)

  return json.dumps(deletion)

@user.route('/<int:user_id>/addresses', methods=['POST'])
def add_address(user_id):
  line_1 = request.json.get('line_1')
  line_2 = request.json.get('line_2')
  city = request.json.get('city')
  pincode = request.json.get('pincode')

  addition = addAddress(user_id, line_1, line_2, city, pincode)
  
  return json.dumps(addition)