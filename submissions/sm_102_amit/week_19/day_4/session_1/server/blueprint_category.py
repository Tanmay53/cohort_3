from flask import Blueprint
from flask import request, jsonify
from db import connection

category = Blueprint("category", __name__)


@category.route("/list", methods=["GET"])
def get_category_list():
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT `categories`.`_id`, `categories`.`category_name` AS `name` FROM `categories` WHERE `is_active` = '1' AND `is_deleted` = '0'""")
        result = cursor.fetchall()
        return jsonify({"error": False, "status": "SUCCESS!", "message": str(cursor.rowcount) + " category found ... !",  "result": result}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't get category list ... !"}), 400
    finally:
        cursor.close()


@category.route("/add", methods=["POST"])
def add_new_category():
    name = request.json["name"]
    try:
        conn, cursor = connection()
        cursor.execute("""INSERT  INTO `categories` (`category_name`) VALUES (%s)""",
                       (name,))
        conn.commit()
        return jsonify({"error": False, "status": "SUCCESS!", "message": "Category add successfully ... !"}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't add new category ... !"}), 400
    finally:
        cursor.close()


@category.route("/view/<int:id>", methods=["GET"])
def get_category(id):
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT * FROM `categories` WHERE `is_active` = '1' AND `_id` = %s""", (id,))
        result = cursor.fetchone()
        return jsonify({"error": False, "status": "SUCCESS!", "message": str(cursor.rowcount) + " category found ... !",  "result": result}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't get category list ... !"}), 400
    finally:
        cursor.close()


@category.route("/update/<int:id>", methods=["PATCH"])
def update_category(id):
    name = request.json['name']
    try:
        conn, cursor = connection()
        cursor.execute(
            """UPDATE `categories` SET `category_name` = %s WHERE _id = %s""", (name, id))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Category updated successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, category not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, category not found ... !"}), 400
    finally:
        cursor.close()


@category.route("/delete/<int:id>", methods=["PATCH"])
def delete_category(id):
    try:
        conn, cursor = connection()
        cursor.execute(
            """UPDATE `categories` SET `is_active` = '0', `is_deleted` = '1' WHERE _id = %s""", (id,))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Category deleted successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, category not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, category not found ... !"}), 400
    finally:
        cursor.close()


@category.route("/delete/<int:id>", methods=["DELETE"])
def purge_delete_category(id):
    try:
        conn, cursor = connection()
        cursor.execute(
            """DELETE FROM `categories` WHERE `_id` = %s""", (id,))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Category deleted successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, category not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, category not found ... !"}), 400
    finally:
        cursor.close()
