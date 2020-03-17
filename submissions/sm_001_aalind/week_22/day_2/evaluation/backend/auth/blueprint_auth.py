from flask import Blueprint, request
import jwt
import json
from auth.auth_helpers import register_user, login_user, get_user_by_email

auth = Blueprint("auth", __name__)


@auth.route("/login", methods=["POST"])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    logging = login_user(email, password)

    if not logging["error"]:
        user = get_user_by_email(email)
        encoded_data = jwt.encode(
            {"id": user["id"], "name": user["name"], "email": user["email"]},
            "grocery_store",
            algorithm="HS256",
        )
        logging["token"] = encoded_data.decode()

        return json.dumps(logging)

    return logging


@auth.route("/register", methods=["POST"])
def reigister():
    name = request.json.get("name")
    email = request.json.get("email")
    password = request.json.get("password")

    registration = register_user(name, email, password)

    return json.dumps(registration)
