from flask import Flask,request,flash,redirect, url_for, session
from werkzeug.utils import secure_filename
from blueprint_signin import signin
from blueprint_signup import signup
import jwt
import csv
import json


app = Flask(__name__)

app.register_blueprint(signin,url_prefix="/auth")
app.register_blueprint(signup,url_prefix="/auth")



def read_file(myid):
    arr = list()
    with open('users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row["id"] == myid:
                return row


@app.route('/')
def home():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
    obj = read_file(decode_data["id"])
    return json.dumps({"user":obj})

@app.route('/uploader', methods = ['POST'])
def upload_file():
   if request.method == 'POST':
       f = request.files['picture']
       location = "static/img/" + f.filename
       f.save(location)
       return {"path": location}

