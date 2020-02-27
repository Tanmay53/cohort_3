from flask import Flask
from flask import request, make_response, jsonify
from blueprint_signup import signup
from blueprint_signin import signin
import json
import jwt
import csv
import json

app = Flask(__name__)
app.register_blueprint(signup, url_prefix = "/auth")
app.register_blueprint(signin, url_prefix = "/auth")

paths = "/home/apoorva/coding/week_18/day_3/backend/data/users.csv"

def read_csv():
    li = []
    with open (paths,'r') as csvfile:
        reader  = csv.DictReader(csvfile)
        for row in reader:
            li.append(dict(row))
        return li

@app.route('/auth/details',methods = ['POST'])
def home():
    auth_header = request.headers.get('Authorization')
    # print(auth_header)
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secure', algorithms=['HS256'])
    val = str(decode_data['id'])
    li = read_csv()
    # print(li)
    # print(val)
    for i in range(len(li)):
        if li[i]['id'] == val:
            return json.dumps({"name":li[i]['name'],"email":li[i]['email']})
    
    