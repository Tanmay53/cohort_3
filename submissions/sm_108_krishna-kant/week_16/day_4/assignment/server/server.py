from flask import Flask
from flask import request
import csv;
import json

app = Flask(__name__)

USER_CSV_PATH = '/home/coder-hex/Desktop/OpenSource/cohort_3/submissions/sm_108_krishna-kant/week_16/day_5/server/database/users.csv'
ADDRESS_CSV_PATH = '/home/coder-hex/Desktop/OpenSource/cohort_3/submissions/sm_108_krishna-kant/week_16/day_5/server/database/address.csv'



@app.route('/')
def initial_route():
    return "Server Running"

# User Create Route
@app.route('/v1/user/create' ,methods = ['POST'])
def create_user():
    id = request.json['user_id']
    name = request.json['name']
    email = request.json['email']
    mobile = request.json['mobile']
    user_data = write_user(id,name,mobile,email)
    return json.dumps({"msg":'User Added Successfully',"data":{ "user": user_data}})

@app.route('/v1/user/listUser')
def get_users():
    user_data = read_user()
    return json.dumps({"msg":"Fetched Users List","data" :{"users_list" : user_data}})

@app.route('v1/address/addAddress')

def write_user(id,name,mobile,email):
    user_data = {"id":id,"name":name,"mobile":mobile,"email":email}
    with open(USER_CSV_PATH,'a') as usercsv:
        fieldnames = ['id','name','mobile','email']
        writer = csv.DictWriter(usercsv,fieldnames=fieldnames)
        writer.writerow(user_data)
    return user_data

def write_address(id,user_id,line_1,line_2,city,pincode):
    address_data = {"id":id,"user_id":user_id,"line_1":line_1,"line_2":line_2,"city":city,"pincode":pincode}
    with open(ADDRESS_CSV_PATH , 'a') as addresscsv:
        fieldsname = ['id','user_id','line_1','line_2','city','pincode']
        writer = csv.DictWriter(addresscsv,fieldnames=fieldsname)
        writer.writerow(address_data)
    return address_data

def read_user():
    user_data = []
    with open(USER_CSV_PATH) as usercsv:
        reader = csv.DictReader(usercsv)
        for row in reader:
            user_data.append(row)
    return user_data


app.run(debug=True)