from flask import Flask
from blueprint_auth import auth
from flask import request, make_response, jsonify
import jwt
import hashlib
import os
import json
import csv

app = Flask(__name__)
app.register_blueprint(auth, url_prefix='/auth')

@app.route('/')
def home():
    return json.dumps('Server is up and running')


@app.route('/uploader', methods = ['POST'])
def upload_file():
    print(request)
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    print(decode_data) 

    if request.method == 'POST':
        f = request.files['picture']
        location = "user_signup/public/img/" + f.filename
        f.save(location)
        return {"path": 'img/'+f.filename}