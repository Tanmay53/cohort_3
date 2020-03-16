from flask import Blueprint, request
import jwt
import json
from auth.auth_helpers import register_user, login_user

auth = Blueprint("auth", __name__)


@auth.route("/login", methods=["POST"])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    logging = login_user(email, password)

    if not logging["error"]:
        encoded_data = jwt.encode(
            logging["payload"]["user"], "LIBRARY_MANAGER", algorithm="HS256"
        ).decode()
        return json.dumps(
            {
                "error": False,
                "message": logging["message"],
                "payload": {"token": encoded_data},
            }
        )

    return json.dumps(logging)


@auth.route("/register", methods=["POST"])
def register():
    name = request.json.get("name")
    email = request.json.get("email")
    password = request.json.get("password")

    registration = register_user(name, email, password)

    return registration

