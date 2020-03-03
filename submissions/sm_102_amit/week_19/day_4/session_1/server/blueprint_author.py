from flask import Blueprint
from flask import request, jsonify
from db import connection

author = Blueprint("author", __name__)


@author.route("/list", methods=["GET"])
def get_author_list():
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT `authors`.`_id`, `authors`.`author_name` AS `name` FROM `authors` WHERE `is_active` = '1' AND `is_deleted` = '0'""")
        result = cursor.fetchall()
        return jsonify({"error": False, "status": "SUCCESS!", "message": str(cursor.rowcount) + " author found ... !",  "result": result}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't get author list ... !"}), 400
    finally:
        cursor.close()


@author.route("/add", methods=["POST"])
def add_new_author():
    name = request.json["name"]
    email = request.json["email"]
    try:
        conn, cursor = connection()
        cursor.execute("""INSERT  INTO `authors` (`author_name`, `email`) VALUES (%s, %s)""",
                       (name, email))
        conn.commit()
        return jsonify({"error": False, "status": "SUCCESS!", "message": "Author add successfully ... !"}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't add new author ... !"}), 400
    finally:
        cursor.close()


@author.route("/view/<int:id>", methods=["GET"])
def get_author(id):
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT * FROM `authors` WHERE `is_active` = '1' AND `_id` = %s""", (id,))
        result = cursor.fetchone()
        return jsonify({"error": False, "status": "SUCCESS!", "message": str(cursor.rowcount) + " author found ... !",  "result": result}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't get author list ... !"}), 400
    finally:
        cursor.close()


@author.route("/update/<int:id>", methods=["PATCH"])
def update_author(id):
    name = request.json['name']
    email = request.json['email']
    try:
        conn, cursor = connection()
        cursor.execute(
            """UPDATE `authors` SET `author_name` = %s, `email` = %s WHERE _id = %s""", (name, email, id))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Author updated successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, author not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, author not found ... !"}), 400
    finally:
        cursor.close()


@author.route("/delete/<int:id>", methods=["PATCH"])
def delete_author(id):
    try:
        conn, cursor = connection()
        cursor.execute(
            """UPDATE `authors` SET `is_active` = '0', `is_deleted` = '1' WHERE _id = %s""", (id,))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Author deleted successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, author not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, author not found ... !"}), 400
    finally:
        cursor.close()


@author.route("/delete/<int:id>", methods=["DELETE"])
def purge_delete_author(id):
    try:
        conn, cursor = connection()
        cursor.execute(
            """DELETE FROM `authors` WHERE `_id` = %s""", (id,))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Author deleted successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, author not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, author not found ... !"}), 400
    finally:
        cursor.close()
