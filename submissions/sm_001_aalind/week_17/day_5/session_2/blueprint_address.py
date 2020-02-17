from flask import Blueprint, request
from helpers import *
import json

address = Blueprint('address', __name__)

@address.route('/<int:address_id>', methods=['PUT'])
def modify_address(address_id):
  line_1 = request.json.get('line_1')
  line_2 = request.json.get('line_2')
  city = request.json.get('city')
  pincode = request.json.get('pincode')

  modification = modifyAddress(address_id, line_1, line_2, city, pincode)

  return json.dumps(modification)

@address.route('/<int:address_id>', methods=['DELETE'])
def delete_address(address_id):
  deletion = deleteAddress(address_id)

  return json.dumps(deletion)
