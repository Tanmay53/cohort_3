import json
import jwt
from flask import Blueprint, request
from products.products_helpers import (
    get_all_products,
    add_product,
    get_product_by_id,
    update_product,
    delete_product,
)

products = Blueprint("products", __name__)


@products.route("", methods=["GET", "POST"])
def product():
    http_method = request.method

    req_header = request.headers.get("Authorization").split(" ")
    if req_header[0] == "Bearer":
        token = req_header[1]
        user = jwt.decode(token, "grocery_store", algorithm=["HS256"])
    else:
        return json.dumps({"error": True, "message": "Wrong User Token!"})

    if http_method == "GET":
        products = get_all_products()

        return json.dumps(products)
    elif http_method == "POST" and user["email"] == "admin@gmail.com":
        name = request.json.get("name")
        price = request.json.get("price")
        category_id = request.json.get("category_id")

        addition = add_product(name, price, category_id)

        return json.dumps(addition)

    return json.dumps({"error": True, "message": "Authorization Failed!"})


@products.route("/<int:product_id>", methods=["PATCH", "DELETE"])
def product_chg_del(product_id):
    http_method = request.method

    req_header = request.headers.get("Authorization").split(" ")
    if req_header[0] == "Bearer":
        token = req_header[1]
        user = jwt.decode(token, "grocery_store", algorithm=["HS256"])
    else:
        return json.dumps({"error": True, "message": "Wrong User Token!"})

    if user["email"] == "admin@gmail.com":
        if http_method == "PATCH" and user["email"] == "admin@gmail.com":
            name = request.json.get("name")
            price = request.json.get("price")
            category_id = request.json.get("category_id")

            modification = update_product(product_id, name, price, category_id)

            return json.dumps(modification)
        elif http_method == "DELETE" and user["email"] == "admin@gmail.com":
            deletion = delete_product(product_id)

            return json.dumps(deletion)
    else:
        return json.dumps({"error": True, "message": "Authorization Failed!"})

