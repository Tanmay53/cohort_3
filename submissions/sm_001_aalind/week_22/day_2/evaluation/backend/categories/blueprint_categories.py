import json
import jwt
import math
from flask import Blueprint, request
from categories.categories_helpers import (
    get_all_categories,
    add_category,
    update_category,
    delete_category,
)

categories = Blueprint("categories", __name__)


@categories.route("", methods=["GET", "POST"])
def category():
    http_method = request.method

    req_header = request.headers.get("Authorization").split(" ")
    if req_header[0] == "Bearer":
        token = req_header[1]
        user = jwt.decode(token, "grocery_store", algorithm=["HS256"])
    else:
        return json.dumps({"error": True, "message": "Wrong User Token!"})

    if http_method == "GET":
        categories = get_all_categories()

        return json.dumps({"error": False, "payload": {"categories": categories}})
    elif http_method == "POST" and user["type"] == "admin":
        name = request.json.get("name")

        addition = add_category(name)

        return json.dumps(addition)


@categories.route("/<int:category_id>", methods=["PATCH"])
def category_chg_del(category_id):
    http_method = request.method

    req_header = request.headers.get("Authorization")
    if not req_header or req_header.split(" ")[0] != "Bearer":
        return json.dumps({"error": True, "message": "Wrong User Token!"})

    req_header = req_header.split(" ")
    token = req_header[1]
    user = jwt.decode(token, "grocery_store", algorithm=["HS256"])

    if user["type"] == "admin":
        if http_method == "PATCH":
            name = request.json.get("name")

            modification = update_category(category_id, name)

            return json.dumps(modification)
        # Cannot Delete Category as product table has category id as foreign key
        # elif http_method == "DELETE":
        #     deletion = delete_category(category_id)

        #     return json.dumps(deletion)
    else:
        return json.dumps({"error": True, "message": "Authorization Failed!"})
