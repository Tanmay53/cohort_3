from flask import Flask
from flask import request , make_response, jsonify
from flask_mysqldb import MySQL

import os
import hashlib
import datetime

app = Flask(__name__)

app.config['MYSQL_HOST'] = "localhost"
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Krishna@7860'
app.config['MYSQL_DB'] = 'library'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

#base route
@app.route('/')
def home():
    try:
        conn = mysql.connection.cursor()
        conn.execute(""" SELECT * FROM publisher """)
        rows = conn.fetchall()
        return jsonify({"data" : rows}) , 200
    except Exception as e:
        print(e)
    finally:
        conn.close()
        


@app.route('/books',methods=['POST'])
def books_data():
        title = request.json['title']
        ISBN = int(request.json['ISBN'])
        publisher_id = int(request.json['publisher'])
        version = int(request.json['version'])
        category = int(request.json['catagory'])
        authors = list(request.json['authors'])
       
        response = create_book(title,ISBN,publisher_id,version,category,authors)
        return jsonify(request.json),200



def create_book(title,ISBN,publisher_id,version,category,authors):
    
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """ START TRANSACTION; 
                INSERT INTO books (title,ISBN,publisher_id,version) VALUES (%s,%s,%s,%s);
                SELECT @book_id:= _id from books where title = %s;
                INSERT INTO book_cat (book_id,category_id) VALUES (@book_id,%s);
                COMMIT;""" , (title,ISBN,publisher_id,version,title,category)
        )
        mysql.connection.commit()

        return jsonify({"message":"Book Added Successfully","success":True}),201
    except Exception as e:
        error = str(e)
        return jsonify({"error": error,"success": False}),500
    finally:
        conn.close()


@app.route('/authors')
def authors_data():
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """ SELECT * from authors """
        )
        rows = conn.fetchall()
        return jsonify({"data" : rows}) , 200
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)})
    finally:
        conn.close()

@app.route('/publishers')
def publisher_data():
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """ SELECT * from publisher """
        )
        rows = conn.fetchall()
        return jsonify({"data" : rows}) , 200
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)})
    finally:
        conn.close()

@app.route('/categories')
def categories_data():
    try:
        conn = mysql.connection.cursor()
        conn.execute(""" SELECT * FROM categories """)
        rows = conn.fetchall()
        return jsonify({"data":rows}),200
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)})
    finally:
        conn.close()





app.run(debug=True)