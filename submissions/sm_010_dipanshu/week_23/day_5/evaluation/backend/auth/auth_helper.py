import os
import jwt
import hashlib

from server import mysql


def generate_salt():
    salt = os.urandom(16)
    salt = salt.encode("base-64")
    return salt


def rehash_salted_password(hashed_salted_password):
    hash = hashlib.md5()

    for i in range(30):
        hash.update(hashed_salted_password.encode("utf-8"))

    return hash


def generate_hashed_password(salted_password):
    hash = hashlib.md5()
    hash.update(salted_password.encode("utf-8"))

    rehashed_salted_password = rehash_salted_password(hash.hexdigest()).hexdigest()
    return rehashed_salted_password


def signup_user(name, email, type, salt, password):
    cursor = mysql.connection.cursor()

    cursor.execute("""INSERT INTO users (name, email, type, salt, password) VALUES (%s, %s, %s, %s, %s)""",
                   (name, email, type, salt, password))

    mysql.connection.commit()
    cursor.close()


def user_exists_check_by_email(email):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT id from users WHERE email = %s""", (email,))

    results = cursor.fetchone()

    mysql.connection.commit()
    cursor.close()

    if results:
        return True
    else:
        return False


def fetch_user_details_by_email(email):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT * FROM users WHERE email = %s""", (email,))

    results = cursor.fetchone()

    mysql.connection.commit()
    cursor.close()

    return results


def fetch_user_id(auth_header):
    encoded_token = auth_header.split(" ")[1]
    decoded_data = jwt.decode(encoded_token, "masai02@", algorithm=["HS256"])
    return decoded_data["id"]


def fetch_user_details_by_id(user_id):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT * FROM users WHERE id = %s""", (user_id,))
    results = cursor.fetchone()

    mysql.connection.commit()
    cursor.close()

    return results
