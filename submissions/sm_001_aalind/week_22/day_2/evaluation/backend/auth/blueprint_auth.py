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
            {
                "id": user["id"],
                "name": user["name"],
                "email": user["email"],
                "type": user["type"],
            },
            "grocery_store",
            algorithm="HS256",
        )
        logging["token"] = encoded_data.decode()

        return json.dumps(logging)

    return logging


@auth.route("/register", methods=["POST"])
def register():
    name = request.json.get("name")
    email = request.json.get("email")
    user_type = request.json.get("user_type")
    password = request.json.get("password")

    registration = register_user(name, email, user_type, password)

    return json.dumps(registration)


@auth.route("/details")
def details():
    req_header = request.headers.get("Authorization").split(" ")
    if req_header[0] == "Bearer":
        token = req_header[1]
        user = jwt.decode(token, "grocery_store", algorithm=["HS256"])
    else:
        return json.dumps({"error": True, "message": "Wrong User Token!"})

    decoded_data = jwt.decode(token, "grocery_store", algorithm=["HS256"])
    user = get_user_by_email(decoded_data["email"])

    if user:
        return json.dumps(
            {
                "error": False,
                "message": "User Found",
                "user": {
                    "user_id": user["id"],
                    "email": user["email"],
                    "name": user["name"],
                    "type": user["type"],
                },
            }
        )
    else:
        return json.dumps({"error": True, "message": "No User Found",})
