from flask import Blueprint
import json
import csv 
user = Blueprint("user",__name__)

@user.route('/create' ,methods = ['POST'])
def create_user():
    id = request.json['user_id']
    name = request.json['name']
    email = request.json['email']
    mobile = request.json['mobile']
    user_data = write_user(id,name,mobile,email)
    return json.dumps({"msg":'User Added Successfully',"data":{ "user": user_data}})

@user.route('/listUser')
def get_users():
    user_data = read_user()
    return json.dumps({"msg":"Fetched Users List","data" :{"users_list" : user_data}})

@user.route("/<user_id>", methods = ['PUT','GET','DELETE'])
def users(user_id):
    if request.method == 'GET':
        user_details = get_user(user_id)
        return json.dumps({"msg":"Fetched details" , "data" : {"user":user_details}})
    elif request.method == "PUT":
        name = request.json['name']
        email = request.json['email']
        mobile = request.json['mobile']
        updated_user = edit_user(user_id,name,email,mobile,"edit")
        return json.dumps({"msg":"User Updated Successfully","data" : {"updated_user": updated_user}})
    elif request.method == "DELETE":
        deleted_user = edit_user(user_id,None,None,None,"delete")
        return json.dumps({"msg":"User Deleted Successfully","data" : {"deleted_user":deleted_user}})

