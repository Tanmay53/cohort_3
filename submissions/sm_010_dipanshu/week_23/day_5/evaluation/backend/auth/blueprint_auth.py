from flask import Blueprint, request
import jwt
from auth_helper import (user_exists_check_by_email, generate_hashed_password, fetch_user_details_by_email, generate_salt,
                         fetch_user_id,
                         signup_user, fetch_user_details_by_id)

auth = Blueprint("auth", __name__)


@auth.route("/login", methods=["POST"])
def login():
    email = request.json["email"].lower()
    password = request.json["password"]

    if user_exists_check_by_email(email):
        details = fetch_user_details_by_email(email)

        salt = details["salt"]
        hashed_password_from_database = details["password"]

        hashed_password = generate_hashed_password(salt + password)

        if hashed_password == hashed_password_from_database:
            token = jwt.encode(
                {"id": details["id"], "name": details["name"], "email": details["email"], "type": details["type"]},
                "masai02@", algorithm="HS256")
            return {"status": 200, "message": "Login successful", "token": token}
        else:
            return {"status": 400, "message": "Login failed. Passwords do not match"}
    else:
        return {"status": 400, "message": "User does not exist"}


@auth.route("/signup", methods=["POST"])
def signup():
    name = request.json["name"].lower()
    email = request.json["email"].lower()
    type = request.json["type"].lower()
    password = request.json["password"]

    if user_exists_check_by_email(email):
        return {"status": 400, "message": "Signup failed. User already exists"}
    else:
        salt = generate_salt()
        hashed_password = generate_hashed_password(salt + password)

        signup_user(name, email, type, salt, hashed_password)

        return {"status": 200, "message": "Signup successful"}


@auth.route("/user-details", methods=["GET"])
def fetch_user():
    if not request.headers.get("Authorization"):
        return {"status": 400, "message": "Details fetch failed. Authorization token missing"}

    current_user_id = fetch_user_id(request.headers.get("Authorization"))

    details = fetch_user_details_by_id((current_user_id))

    return {"status": 200, "message": "User details fetching successful",
            "user": {"id": details["id"], "name": details["name"], "email": details["email"], "type": details["type"]}}
