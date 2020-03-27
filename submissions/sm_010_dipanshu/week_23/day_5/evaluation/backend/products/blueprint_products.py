from flask import Blueprint, request
import math

from products.products_helper import (fetch_user, product_exists_check_by_name, add_product, product_exists_check_by_id,
                                      delete_product, update_product, fetch_all_products, fetch_all_products_by_limit)

products = Blueprint("products", __name__)


@products.route("", methods=["GET"])
def list_products():
    current_page_no = request.args.get('pageNo', default=1, type=int)
    limit = request.args.get('resultsPerPage', default=10, type=int)
    category_id = request.args.get("categoryId", default=0, type=int)
    offset = (current_page_no - 1) * limit

    total_products = (len(fetch_all_products(category_id)))
    total_pages = int(math.ceil(float(total_products) / limit))
    products = fetch_all_products_by_limit(offset, limit, category_id)
    return {"status": 200, "message": "Products fetch successful", "products": products, "totalPages": total_pages,
            "totalProducts": total_products}


@products.route("/add", methods=["POST"])
def add():
    if not request.headers.get("Authorization"):
        return {"status": 400, "message": "Product addition failed. Authorization token missing"}

    current_user = fetch_user(request.headers.get("Authorization"))
    product_name = request.json["productName"]
    product_price = int(request.json["productPrice"])
    category_id = int(request.json["categoryId"])

    if not product_name:
        return {"status": 400, "message": "Product name missing"}
    if not product_price:
        return {"status": 400, "message": "Product price missing"}
    if not category_id:
        return {"status": 400, "message": "Category id missing"}

    if current_user["type"] == "admin":
        if product_exists_check_by_name(product_name):
            return {"status": 400, "message": "Product already exists"}
        else:
            add_product(product_name, product_price, category_id)
            return {"status": 200, "message": "Product addition successful"}
    elif current_user["type"] == "user":
        return {"status": 400, "message": "You cannot add products. Need admin privileges"}


@products.route("/delete/<id>", methods=["POST"])
def delete(id):
    if not request.headers.get("Authorization"):
        return {"status": 400, "message": "Product deletion failed. Authorization token missing"}

    current_user = fetch_user(request.headers.get("Authorization"))
    product_id = int(id)

    if current_user["type"] == "admin":
        if product_exists_check_by_id(product_id):
            delete_product(product_id)
            return {"status": 200, "message": "Product deletion successful"}
        else:
            return {"status": 400, "message": "Product does not exists"}
    elif current_user["type"] == "user":
        return {"status": 400, "message": "You cannot add products. Need admin privileges"}


@products.route("/update/<id>", methods=["PATCH"])
def update(id):
    if not request.headers.get("Authorization"):
        return {"status": 400, "message": "Product deletion failed. Authorization token missing"}

    current_user = fetch_user(request.headers.get("Authorization"))
    product_id = int(id)
    product_name = request.json["productName"]
    product_price = int(request.json["productPrice"])
    category_id = int(request.json["categoryId"])

    if not product_name:
        return {"status": 400, "message": "Product name missing"}
    if not product_price:
        return {"status": 400, "message": "Product price missing"}
    if not category_id:
        return {"status": 400, "message": "Category id missing"}

    if current_user["type"] == "admin":
        if product_exists_check_by_id(product_id):
            update_product(product_id, product_name, product_price, category_id)
            return {"status": 200, "message": "Product updation successful"}
        else:
            return {"status": 400, "message": "Product does not exists"}
    elif current_user["type"] == "user":
        return {"status": 400, "message": "You cannot update products. Need admin privileges"}
