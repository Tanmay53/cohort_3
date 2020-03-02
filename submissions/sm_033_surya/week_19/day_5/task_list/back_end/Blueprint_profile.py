from flask import Blueprint
from flask import request, json, jsonify
import jwt
from server import mysql

profile = Blueprint("profile", __name__, static_url_path="/static")


@profile.route("/user")
def profilemethod():
    token = request.headers.get("Authorization")
    encoded_Data = token.split(" ")[0]
    try:
        decode_data = jwt.decode(encoded_Data, 'users', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """select * from users where id = %s""", (decode_data['id'],)
        )
        results = cursor.fetchall()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return jsonify(items)
    except:
        return "error"
