from flask import Blueprint
from flask import request, jsonify
from db import connection

book = Blueprint("book", __name__)


@book.route("/list", methods=["GET"])
def get_book_list():
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT * FROM `books` WHERE `is_active` = '1' AND `is_deleted` = '0'""")
        result = cursor.fetchall()
        return jsonify({"error": False, "status": "SUCCESS!", "message": str(cursor.rowcount) + " book found ... !",  "result": result}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't get book list ... !"}), 400
    finally:
        cursor.close()


@book.route("/add", methods=["POST"])
def add_new_book():
    name = request.json["name"]
    code = request.json["code"]
    price = request.json["price"]
    year = request.json["year"]
    publisher = request.json["publisher"]
    categories = request.json["categories"]
    authors = request.json["authors"]
    try:
        conn, cursor = connection()
        cursor.execute("""INSERT  INTO `books` (`book_name`, `code`, `price`, `published_year`, `publisher_id`) VALUES (%s, %s, %s, %s, %s)""",
                       (name, code, price, year, publisher))
        book_id = cursor.lastrowid
        for val in categories:
            cursor.execute("""INSERT  INTO `book_category` (`book_id`, `category_id`) VALUES (%s, %s)""",
                           (book_id, val))
        for val in authors:
            cursor.execute("""INSERT  INTO `book_author` (`book_id`, `author_id`) VALUES (%s, %s)""",
                           (book_id, val))
        conn.commit()
        return jsonify({"error": False, "status": "SUCCESS!", "message": "Book add successfully ... !"}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't add new book ... !"}), 400
    finally:
        cursor.close()


@book.route("/view/<int:id>", methods=["GET"])
def get_book(id):
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT * FROM `books` WHERE `is_active` = '1' AND `_id` = %s""", (id,))
        result = cursor.fetchone()
        return jsonify({"error": False, "status": "SUCCESS!", "message": str(cursor.rowcount) + " book found ... !",  "result": result}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't get book list ... !"}), 400
    finally:
        cursor.close()


@book.route("/update/<int:id>", methods=["PATCH"])
def update_book(id):
    name = request.json['name']
    try:
        conn, cursor = connection()
        cursor.execute(
            """UPDATE `books` SET `book_name` = %s WHERE _id = %s""", (name, id))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Book updated successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, book not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, book not found ... !"}), 400
    finally:
        cursor.close()


@book.route("/delete/<int:id>", methods=["PATCH"])
def delete_book(id):
    try:
        conn, cursor = connection()
        cursor.execute(
            """UPDATE `books` SET `is_active` = '0', `is_deleted` = '1' WHERE _id = %s""", (id,))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Book deleted successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, book not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, book not found ... !"}), 400
    finally:
        cursor.close()


@book.route("/delete/<int:id>", methods=["DELETE"])
def purge_delete_book(id):
    try:
        conn, cursor = connection()
        cursor.execute(
            """DELETE FROM `books` WHERE `books`.`_id` = %s""", (id,))
        conn.commit()
        if cursor.rowcount:
            return jsonify({"error": False, "status": "SUCCESS!", "message": "Book deleted successfully ... !"}), 200
        else:
            return jsonify({"error": True, "status": "FAILURE!", "message": "Error, book not found ... !"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE!", "message": "Error, book not found ... !"}), 400
    finally:
        cursor.close()
