from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
app= Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'library'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

@app.route('/all_books')
def all_books():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("""
            SELECT books.id AS book_id,books.book_name,publishers.publisher_name AS publisher, GROUP_CONCAT(distinct categories.category_name) AS category,GROUP_CONCAT(distinct authors.author_name) AS author FROM books JOIN publishers ON books.publisher_id=publishers.id LEFT JOIN book_category ON books.id=book_category.book_id LEFT JOIN categories ON book_category.category_id=categories.id LEFT JOIN book_author ON books.id = book_author.book_id LEFT JOIN authors ON book_author.author_id=authors.id GROUP BY books.id
        """)
        results = cursor.fetchall()
    except Exception as e:
        return jsonify(e)
    finally:
        cursor.close()
    return jsonify(results)

# fetch books by publisher name
@app.route('/by_publisher',methods=['POST'])
def by_publisher():
    publisher_name=request.json['publisher_name']
    print(publisher_name)
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("""
            SELECT books.id AS book_id,books.book_name,publishers.publisher_name FROM books JOIN publishers ON publisher_id=publishers.id WHERE publishers.publisher_name=%s
        """,(publisher_name,))
        results = cursor.fetchall()
    except Exception as e:
        return jsonify(e)
    finally:
        cursor.close()
    print(len(results))
    if len(results)==0:
        return jsonify({"error":True,"message":"wrong publisher name"})
    else:
        return jsonify(results)

# fetch books by author name
@app.route('/by_author',methods=['POST'])
def by_author():
    author_name=request.json['author_name']
    print(author_name)
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("""
            SELECT authors.author_name,group_concat(distinct books.book_name) AS book FROM authors JOIN book_author ON book_author.author_id=authors.id LEFT JOIN books ON books.id = book_author.book_id WHERE authors.author_name=%s GROUP BY authors.id
        """,(author_name,))
        results = cursor.fetchall()
    except Exception as e:
        return jsonify(e)
    finally:
        cursor.close()
    print(len(results))
    if len(results)==0:
        return jsonify({"error":True,"message":"wrong author name"})
    else:
        return jsonify(results)

# fetch books by category name
@app.route('/by_category',methods=['POST'])
def by_category():
    category_name=request.json['category_name']
    print(category_name)
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("""
            SELECT * FROM book_category join books ON book_category.book_id = books.id JION categories ON category_id=categories.id WHERE categories.category_name=%s
        """,(category_name,))
        results = cursor.fetchall()
    except Exception as e:
        return jsonify(e)
    finally:
        cursor.close()
    print(len(results))
    if len(results)==0:
        return jsonify({"error":True,"message":"wrong author name"})
    else:
        return jsonify(results)