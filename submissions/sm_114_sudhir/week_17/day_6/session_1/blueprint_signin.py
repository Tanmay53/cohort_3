from flask import Blueprint


signin = Blueprint("signin", __name__)

@signin.route("/signin")
def user_login():
    return "sign in"