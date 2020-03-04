from flask import Blueprint
from flask import request, jsonify
from db import connection

publisher = Blueprint("publisher", __name__)


@publisher.route("/list", methods=["GET"])
def get_publisher_list():
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT * FROM `publishers` WHERE `is_active` = '1' AND `is_deleted` = '0'""")
        result = cursor.fetchall()
        return jsonify({"error": False, "status": "SUCCESS!", "message": str(cursor.rowcount) + " publisher found ... !",  "result": result}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't get publisher list ... !"}), 400
    finally:
        cursor.close()


@publisher.route("/add", methods=["POST"])
def add_new_publisher():
    name = request.json["name"]
    try:
        conn, cursor = connection()
        cursor.execute("""INSERT  INTO `publishers` (`publisher_name`) VALUES (%s)""",
                       (name))
        conn.commit()
        return jsonify({"error": False, "status": "SUCCESS!", "message": "publisher add successfully ... !"}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't add new publisher ... !"}), 400
    finally:
        cursor.close()


@publisher.route("/view/<int:id>", methods=["GET"])
def get_publisher(id):
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT * FROM `publishers` WHERE `is_active` = '1' AND `_id` = %s""", (id,))
        result = cursor.fetchone()
        return jsonify({"error": False, "status": "SUCCESS!", "message": str(cursor.rowcount) + " publisher found ... !",  "result": result}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't get publisher list ... !"}), 400
    finally:
        cursor.close()


@publisher.route("/update/<int:id>", methods=["PATCH"])
def update_publisher(id):
    name = request.json['name']
    try:
        conn, cursor = connection()
        cursor.execute(
            """UPDATE `publishers` SET `publisher_name` = %s WHERE _id = %s""", (name, id))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Publisher updated successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, publisher not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, publisher not found ... !"}), 400
    finally:
        cursor.close()


@publisher.route("/delete/<int:id>", methods=["PATCH"])
def delete_publisher(id):
    try:
        conn, cursor = connection()
        cursor.execute(
            """UPDATE `publishers` SET `is_active` = '0', `is_deleted` = '1' WHERE _id = %s""", (id,))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Publisher deleted successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, publisher not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, publisher not found ... !"}), 400
    finally:
        cursor.close()


@publisher.route("/delete/<int:id>", methods=["DELETE"])
def purge_delete_publisher(id):
    try:
        conn, cursor = connection()
        cursor.execute(
            """DELETE FROM `publishers` WHERE _id` = %s""", (id,))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Publisher deleted successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, publisher not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, publisher not found ... !"}), 400
    finally:
        cursor.close()
