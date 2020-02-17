from flask import Blueprint
from flask import request
import json
from csv_data import write_address

book = Blueprint("book",__name__)

@book.route('/addAddress', methods = ['POST'])
def add_address():
    id = request.json['id']
    user_id = request.json['user_id']
    line_1 = request.json['line_1']
    line_2 = request.json['line_2']
    city = request.json['city']
    pincode = request.json['pincode']
    address = write_address(id,user_id,line_1,line_2,city,pincode)
    return json.dumps({"msg":"Address Added Successfully","data":{"address":address}})



@book.route("/<address_id>/<user_id>" , methods = ['PUT','DELETE'])
def edit_address(address_id,user_id):
    if request.method == "PUT":
        line_1 = request.json['line_1']
        line_2 = request.json['line_2']
        city = request.json['city']
        pincode = request.json['pincode']
        updated_address = edit_address(user_id,address_id,line_1,line_2,city,pincode,"edit")
        return json.dumps({"msg":"Address Edited Successfully","data":{"user":user_id,"update_address":updated_address}})
    elif request.method == "DELETE":
        deleted_address =edit_address(user_id,address_id,None,None,None,None,"delete")
        return json.dumps({"msg":"Address Edited Successfully","data":{"user":user_id,"deleted_address":deleted_address}})
