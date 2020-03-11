import hashlib
import secrets
import re
from server import mysql

EMAIL_REGEX = r"^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"


def login_user(email, password):
    if is_email_valid(email):
        user = get_user_by_email(email)
        if user and user["password"] == generate_password(password, user["salt"]):
            return {
                "error": False,
                "message": "Login Successful!",
                "payload": {
                    "user": {
                        "id": user["id"],
                        "name": user["name"],
                        "email": user["email"],
                    }
                },
            }
        else:
            return {"error": True, "message": "Wrong Credentials!"}
    else:
        return {"error": True, "message": "Wrong Credentials!"}


def register_user(name, email, password):
    user = get_user_by_email(email)

    if not user:
        salt = get_salt()
        password = generate_password(password, salt)
        try:
            cur = mysql.connection.cursor()
            cur.execute(
                """
                INSERT INTO `users` (name, email, password, salt) VALUES (%s, %s, %s, %s)
            """,
                (name, email, password, salt),
            )
            mysql.connection.commit()
            cur.close()

            return {"error": False, "message": "User Registered!"}
        except Exception as e:
            print("LIBRARY_MANAGER_ERROR -->", e)
            return {"error": True, "message": "User Registration Failed!"}

    return {"error": True, "message": "User Registration Failed!"}


def get_user_by_email(email):
    if is_email_valid(email):
        try:
            cur = mysql.connection.cursor()
            cur.execute(
                """
                SELECT * FROM `users` WHERE email=%s
            """,
                (email,),
            )
            result = cur.fetchall()
            cur.close()

            return result[0] if result else []
        except Exception as e:
            print("LIBRARY_MANAGER_ERROR -->", e)

    return []


def is_email_valid(email):
    return True if re.search(EMAIL_REGEX, email) else False


def get_hash(string):
    return hashlib.sha256(string.encode("utf-8")).hexdigest()


def get_salt():
    return secrets.token_urlsafe(16)


def generate_password(string, salt):
    return get_hash(get_hash(string) + salt)
