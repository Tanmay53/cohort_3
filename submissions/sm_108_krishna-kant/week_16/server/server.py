from flask import Flask
from flask import request
import math
import csv 
import json
app = Flask(__name__)

def read_csv():
    user_data = dict()
    user_data['items'] = list()
    with open('/home/coder-hex/Desktop/OpenSource/cohort_3/submissions/sm_108_krishna-kant/week_16/server/users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            user_data['items'].append(row)
    return user_data

def write_csv(name,email,mobile,age):
    data = read_csv()
    id = (len(data["items"]) + 1)
    with open('/home/coder-hex/Desktop/OpenSource/cohort_3/submissions/sm_108_krishna-kant/week_16/server/users.csv', 'a') as csvfile:
        fieldnames = ['id','name','email', 'mobile','age']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow({'id':id,"name":name,"email":email,"mobile":mobile,"age":age})

@app.route('/')
def home():
    return "Api Running..."

@app.route('/users/listing', methods = ['GET'])
def get_users():
    page = request.args.get('page', default = 1, type = int)
    per_page = request.args.get('per_page', default = 25, type = int)
    data = read_csv()
    total_pages = math.ceil(len(data["items"])/per_page)
    prev_page_end = (page - 1) * per_page
    curr_page_end = page * per_page
    item_to_send = data['items'][prev_page_end:curr_page_end]
    return json.dumps({"items": item_to_send,"pages":total_pages})
app.run(debug=True)


