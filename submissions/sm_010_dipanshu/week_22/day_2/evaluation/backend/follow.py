from flask import Blueprint, request
from server import mysql
import jwt

follow = Blueprint("follow", __name__)


def fetch_user_id(auth_header):
    encoded_token = auth_header.split(" ")[1]
    decoded_data = jwt.decode(encoded_token, "masai02@", algorithm=["HS256"])
    return decoded_data["id"]


def user_exists_check(email):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT id from users WHERE email = %s""", (email,))

    results = cursor.fetchall()
    items = []

    for item in results:
        items.append(item)

    mysql.connection.commit()
    cursor.close()

    if len(items) > 0:
        return True
    else:
        return False


def fetch_follows_user_id(email):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT id from users WHERE email = %s""", (email,))

    results = cursor.fetchall()
    user_id = ""

    for item in results:
        user_id = item["id"]

    mysql.connection.commit()
    cursor.close()

    return user_id


def user_already_followed(follows_user_id):
    print(follows_user_id)
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT user_id from following WHERE follows_user_id = %s""", (follows_user_id,))

    results = cursor.fetchall()
    items = []

    for item in results:
        items.append(item)
    print(items)

    mysql.connection.commit()
    cursor.close()

    if len(items) > 0:
        return True
    else:
        return False


@follow.route("", methods=["POST"])
def follow_user():
    follows_user_email = request.json["email"]

    if user_exists_check(follows_user_email):
        follows_user_id = fetch_follows_user_id(follows_user_email)

        if (user_already_followed(follows_user_id)):
            return {"status": 400, "message": "User already followed"}
        else:
            current_user_id = fetch_user_id(request.headers.get("Authorization"))

            cursor = mysql.connection.cursor()

            cursor.execute(
                """INSERT INTO following (user_id, follows_user_id) VALUES (%s, %s)""",
                (current_user_id, follows_user_id))

            mysql.connection.commit()
            cursor.close()

            return {"status": 200, "message": "User following successful"}

    else:
        return {"status": 400, "message": "User does not exist"}
