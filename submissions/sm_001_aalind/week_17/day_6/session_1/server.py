from flask import Flask, request
from blueprint_auth import auth

app = Flask(__name__)
app.register_blueprint(auth, url_prefix='/auth')

