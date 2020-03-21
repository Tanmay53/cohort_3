from flask import Blueprint
from flask import request, jsonify
from db import connection

category = Blueprint("category", __name__)


@category.route("/list", methods=["GET"])
def getCategoryList():
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT * FROM categories""")
        result = cursor.fetchall()
        return jsonify({"error": False, "message": "SUCCESS", "result": result}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "message": "Error " + str(e)}), 400
    finally:
        cursor.close()


@category.route("/add", methods=["POST"])
def addCategory():
    category = request.json["name"]
    try:
        conn, cursor = connection()
        cursor.execute(
            """INSERT INTO categories (category_name) VALUES (%s)""", (category,))
        conn.commit()
        return jsonify({"error": False, "message": "Category added successfully ..."}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "message": "Error " + str(e)}), 400
    finally:
        cursor.close()
