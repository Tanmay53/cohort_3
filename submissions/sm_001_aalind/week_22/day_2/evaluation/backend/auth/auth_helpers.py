from server import mysql
import hashlib
import secrets


def login_user(email, password):
    user = get_user_by_email(email)

    if user:
        if generate_password(password, user["salt"]) == user["password_hash"]:
            return {"error": False, "message": "Login Successful"}
        else:
            return {"error": True, "message": "Login Failed!"}
    else:
        return {"error": True, "message": "No User Found!"}


def register_user(name, email, password):
    user_exists = get_user_by_email(email)

    if user_exists:
        return {"error": True, "message": "User Already Exists!"}
    else:
        salt = get_salt()
        password = generate_password(password, salt)

        cur = mysql.connection.cursor()
        cur.execute(
            """
            INSERT INTO `users` (name, email, password_hash, salt) VALUES (%s, %s, %s, %s)
        """,
            (name, email, password, salt),
        )
        mysql.connection.commit()
        cur.close()

        return {"error": False, "message": "Registration Successful!"}


def get_user_by_email(email):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `users` WHERE email=%s
    """,
        (email,),
    )
    result = cur.fetchone()
    cur.close()

    return result


def get_hash(string):
    return hashlib.sha256(string.encode("utf-8")).hexdigest()


def get_salt():
    return secrets.token_urlsafe(16)


def generate_password(string, salt):
    return get_hash(get_hash(string) + salt)
