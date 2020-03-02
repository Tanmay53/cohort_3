from flask import Flask
from flask import request, jsonify
from flask_cors import CORS
from db import connection
from blueprint_book import book
from blueprint_author import author
from blueprint_category import category
from blueprint_publisher import publisher

app = Flask(__name__)
app.register_blueprint(book, url_prefix="/book")
app.register_blueprint(author, url_prefix="/author")
app.register_blueprint(category, url_prefix="/category")
app.register_blueprint(publisher, url_prefix="/publisher")
CORS(app)


@app.route("/search", methods=["POST"])
def get_book_list():
    id = request.json["id"]
    search_type = request.json["type"]
    if search_type == "author":
        query = "SELECT `books`.`_id`, `books`.`book_name`, `books`.`code`, `books`.`price`, `books`.`published_year`, `publishers`.`publisher_name`, GROUP_CONCAT(`categories`.`category_name`) AS `category_name`, `authors`.`author_name` FROM `books` JOIN `publishers` ON `publishers`.`_id` = `books`.`publisher_id` JOIN `book_author` ON `books`.`_id` = `book_author`.`book_id` JOIN `book_category` ON `books`.`_id` = `book_category`.`book_id` JOIN `authors` ON `authors`.`_id` = `book_author`.`author_id` JOIN `categories` ON `categories`.`_id` = `book_category`.`category_id` WHERE `authors`.`_id` = %s GROUP BY (`books`.`_id`)"
    elif search_type == "category":
        query = "SELECT `books`.`_id`, `books`.`book_name`, `books`.`code`, `books`.`price`, `books`.`published_year`, `publishers`.`publisher_name`, `categories`.`category_name`, GROUP_CONCAT(`authors`.`author_name`) AS `author_name` FROM `books` JOIN `publishers` ON `publishers`.`_id` = `books`.`publisher_id` JOIN `book_author` ON `books`.`_id` = `book_author`.`book_id` JOIN `book_category` ON `books`.`_id` = `book_category`.`book_id` JOIN `authors` ON `authors`.`_id` = `book_author`.`author_id` JOIN `categories` ON `categories`.`_id` = `book_category`.`category_id` WHERE `categories`.`_id` = %s GROUP BY (`books`.`_id`)"

    data = (id,)
    try:
        _, cursor = connection()
        cursor.execute(query, data)
        result = cursor.fetchall()
        return jsonify({"error": False, "status": "SUCCESS!", "message": str(cursor.rowcount) + " book found ... !",  "result": result}), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": True, "status": "FAILURE", "message": "Error, Can't get book list ... !"}), 400
    finally:
        cursor.close()


# run server
if __name__ == "__main__":
    app.run(debug=1)
