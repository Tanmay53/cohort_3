from flask import Blueprint, request
from categories.categories_helper import (fetch_all_categories, fetch_user, category_exists_check_by_name, add_category)

categories = Blueprint("categories", __name__)


@categories.route("", methods=["GET"])
def category():
    fetched_categories = fetch_all_categories()

    return {"status": 200, "message": "Categories fetch successful", "categories": fetched_categories}


@categories.route("/add", methods=["POST"])
def add():
    if not request.headers.get("Authorization"):
        return {"status": 400, "message": "Categories fetch failed. Authorization token missing"}

    category_name = request.json["categoryName"]
    current_user = fetch_user(request.headers.get("Authorization"))

    if current_user["type"] == "admin":
        if category_exists_check_by_name(category_name):
            return {"status": 400, "message": "Category already exists"}
        else:
            add_category(category_name)
            return {"status": 200, "message": "Category addition successful"}
    elif current_user["type"] == "user":
        return {"status": 400, "message": "You cannot add categories. Need admin privileges"}
