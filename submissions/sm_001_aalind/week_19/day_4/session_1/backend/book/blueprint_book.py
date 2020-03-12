from flask import Blueprint, request
from server import mysql
import json
from book.book_helpers import (
    add_book,
    get_all_books,
    change_book_name,
    delete_book_by_id,
)

book = Blueprint("book", __name__)


@book.route("", methods=["POST", "GET"])
def books():
    if request.method == "POST":
        name = request.json.get("name")
        publisher_id = request.json.get("publisher_id")
        author_id = request.json.get("author_id")
        category_id = request.json.get("category_id")

        addition = add_book(name, author_id, category_id, publisher_id)

        return addition
    elif request.method == "GET":
        books = get_all_books()

        return json.dumps(books)


@book.route("/<int:book_id>", methods=["PATCH", "DELETE"])
def modify_books(book_id):
    if request.method == "PATCH":
        name = request.json.get("name")

        modification = change_book_name(book_id, name)

        return json.dumps(modification)
    elif request.method == "DELETE":
        deletion = delete_book_by_id(book_id)

        return json.dumps(deletion)
