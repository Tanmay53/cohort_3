from flask import Flask
from blueprint_auth import auth
import json

app = Flask(__name__)
app.register_blueprint(auth, url_prefix='/auth')

@app.route('/')
def home():
    return json.dumps('Server is up and running')