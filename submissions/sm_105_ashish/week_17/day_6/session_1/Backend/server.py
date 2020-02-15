from flask import Flask
from blueprint_signin import signin
from blueprint_signup import signup

app = Flask(__name__)

app.register_blueprint(signin,url_prefix="/auth")
app.register_blueprint(signup,url_prefix="/auth")


@app.route('/')
def home():
    return "home"

