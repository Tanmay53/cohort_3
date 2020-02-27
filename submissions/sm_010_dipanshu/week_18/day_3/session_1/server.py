from flask import Flask
from blueprint_auth import auth
from blueprint_details import details

app = Flask(__name__)
app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(details, url_prefix="/details")

@app.after_request
def add_header(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization ')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE')

    return response