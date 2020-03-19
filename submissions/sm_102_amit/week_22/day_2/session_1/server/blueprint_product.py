from flask import Blueprint
from flask import request, jsonify
from db import connection

product = Blueprint("product", __name__)


def totalProduct():
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT COUNT(_id) AS total FROM products""")
        result = cursor.fetchone()
        return result
    except Exception as e:
        print(str(e))
    finally:
        cursor.close()


@product.route("/list", methods=["GET"])
def getProductList():
    res = totalProduct()
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT products.*, categories.category_name FROM products JOIN categories ON products.category_id = categories._id""")
        result = cursor.fetchall()
        return jsonify({"error": False, "message": "SUCCESS", "result": result, "total": res}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "message": "Error " + str(e)}), 400
    finally:
        cursor.close()


@product.route("/add", methods=["POST"])
def addProduct():
    name = request.json["name"]
    price = request.json["price"]
    category = request.json["category"]
    try:
        conn, cursor = connection()
        cursor.execute(
            """INSERT INTO products (product_name, price, category_id ) VALUES (%s, %s, %s)""", (name, price, category))
        conn.commit()
        return jsonify({"error": False, "message": "Product added successfully ..."}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "message": "Error " + str(e)}), 400
    finally:
        cursor.close()


@product.route("/filter/<int:id>", methods=["GET"])
def filterProductList(id):
    res = totalProduct()
    try:
        _, cursor = connection()
        cursor.execute(
            """SELECT products.*, categories.category_name FROM products JOIN categories ON products.category_id = categories._id WHERE category_id =  %s""", (id,))
        result = cursor.fetchall()
        return jsonify({"error": False, "message": "SUCCESS", "result": result, "total": res}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "message": "Error " + str(e)}), 400
    finally:
        cursor.close()
