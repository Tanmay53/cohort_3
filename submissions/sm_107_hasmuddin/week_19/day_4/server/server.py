from flask import Flask, request
import os
import json
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '12345'
app.config['MYSQL_DB'] = 'library'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

# cur.fetchone() if limits == 1 else


def get_data(table_name, lim):
    cur = mysql.connection.cursor()
    if(table_name == "Publishers"):
        cur.execute(
            """SELECT * FROM Publishers ORDER BY id DESC LIMIT %s""", (lim,))
    elif(table_name == "Categories"):
        cur.execute(
            """SELECT * FROM Categories ORDER BY id DESC LIMIT %s""", (lim,))
    elif(table_name == "Authers"):
        cur.execute(
            """SELECT * FROM Authers ORDER BY id DESC LIMIT %s""", (lim,))
    elif(table_name == "Books"):
        cur.execute(
            """SELECT * FROM Books ORDER BY id DESC LIMIT %s""", (lim,))

    mydata = cur.fetchall()
    cur.close()
    data = []
    for dt in mydata:
        if(dt.get("reg_date")):
            dt.update({"reg_date": str(dt["reg_date"])})
        data.append(dt)
    return data


@app.route("/", methods=["POST"])
def home():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """
            select grp.category, grp.name, Publishers.publisher, img,   grp.title, grp.description from 
            (select category, newbook.book_id, publisher_id , newbook.name, newbook.title, img,  newbook.description from 
            (select book_id,  name, title , img,  publisher_id, description from Books right join 
            (select name, Authers_Books.book_id from Authers left join Authers_Books on Authers.id = Authers_Books.auther_id) as joining 
            on joining.book_id=Books.id) as newbook left join (select book_id, category from Books_Categories left join Categories
            on Categories.id=Books_Categories.category_id) as cat_data
            on cat_data.book_id=newbook.book_id) as grp left join Publishers on grp.publisher_id=Publishers.id;
            """
        )
        all_data = cursor.fetchall()
        cursor.close()
        source_data = []
        for d in all_data:
            source_data.append(d)
        return json.dumps({"error": False, "message": "Success", "data": source_data})
    except Exception as e:
        return json.dumps({"error": True, "message": e})


@app.route("/auther", methods=["POST"])
def auther_post():
    auther_cursor = mysql.connection.cursor()
    query1 = """INSERT INTO Authers (name) VALUES (%s)"""
    authers = request.json['authers']
    auther_cursor.executemany(query1, authers)
    mysql.connection.commit()
    auther_cursor.close()
    return "working"


@app.route("/publish", methods=["POST"])
def publish_book():
    try:
        # Publishers
        publisher = request.json["publisher"]
        pub = mysql.connection.cursor()
        pub.execute(
            """INSERT INTO Publishers (publisher) values(%s)""", (publisher,))
        mysql.connection.commit()
        pub.close()
        # Books
        last_publish_id = get_data("Publishers", 1)[0]["id"]
        authers = request.json['authers']
        title = request.json["title"]
        description = request.json["description"]
        publisher_id = last_publish_id

        book_cur = mysql.connection.cursor()
        book_cur.execute(""" INSERT INTO Books (title, description, publisher_id) VALUES(%s, %s, %s)""",
                         (title, description, publisher_id,))
        mysql.connection.commit()
        book_cur.close()

        # Authers
        auther_cursor = mysql.connection.cursor()
        query1 = """INSERT INTO Authers (name) VALUES (%s)"""
        auther_cursor.executemany(query1, authers)
        mysql.connection.commit()
        auther_cursor.close()

        # Authers_Books
        curr_book_id = get_data("Books", 1)[0]["id"]
        each_author = get_data("Authers", len(authers))
        auth_books = []
        auth_book_cur = mysql.connection.cursor()
        for e in each_author:
            auth_books.append((e["id"], curr_book_id))
        query2 = """INSERT INTO Authers_Books (auther_id, book_id) VALUES (%s, %s)"""
        auth_book_cur.executemany(query2, auth_books)
        mysql.connection.commit()
        auth_book_cur.close()

        # Categories
        category_cur = mysql.connection.cursor()
        categories = request.json["categories"]
        query3 = """INSERT INTO Categories (category) VALUES (%s)"""
        category_cur.executemany(query3, categories)
        mysql.connection.commit()
        category_cur.close()

        # Books_Categories
        need_category = get_data("Categories", len(categories))
        ex_book_category = []
        book_cat_cur = mysql.connection.cursor()
        for need in need_category:
            ex_book_category.append((curr_book_id, need["id"]))
        query4 = """INSERT INTO Books_Categories (book_id, category_id) VALUES (%s , %s)"""
        book_cat_cur.executemany(query4, ex_book_category)
        mysql.connection.commit()
        book_cat_cur.close()
        return json.dumps({"message": "Book Published Successfully", "error": 'False'})
    except Exception as e:
        return json.dumps({"error": "True", "message": e})


@app.route("/filter_category", methods=["POST"])
def filter_data():
    search = request.json["search_key"]
    search_key = "%"+search+"%"
    cur = mysql.connection.cursor()
    cur.execute(
        """select * from (select grp.category, grp.name, Publishers.publisher, img,   grp.title, grp.description from 
            (select category, newbook.book_id, publisher_id , newbook.name, newbook.title, img,  newbook.description from 
            (select book_id,  name, title , img,  publisher_id, description from Books right join 
            (select name, Authers_Books.book_id from Authers left join Authers_Books on Authers.id = Authers_Books.auther_id) as joining 
            on joining.book_id=Books.id) as newbook left join (select book_id, category from Books_Categories left join Categories
            on Categories.id=Books_Categories.category_id) as cat_data
            on cat_data.book_id=newbook.book_id) as grp left join Publishers on grp.publisher_id=Publishers.id) as filter_book
            where category like %s
            """,  (search_key.title(), ),

    )
    filter_data = cur.fetchall()
    cur.close()
    main_data = []
    for d in filter_data:
        main_data.append(d)
    return json.dumps({"error": False, "message": "Success", "data": main_data})


@app.route("/filter_name", methods=["POST"])
def filter_nm():
    search = request.json["search_key"]
    search_key = "%"+search+"%"
    cur = mysql.connection.cursor()
    cur.execute(
        """select * from (select grp.category, grp.name, Publishers.publisher, img,   grp.title, grp.description from 
            (select category, newbook.book_id, publisher_id , newbook.name, newbook.title, img,  newbook.description from 
            (select book_id,  name, title , img,  publisher_id, description from Books right join 
            (select name, Authers_Books.book_id from Authers left join Authers_Books on Authers.id = Authers_Books.auther_id) as joining 
            on joining.book_id=Books.id) as newbook left join (select book_id, category from Books_Categories left join Categories
            on Categories.id=Books_Categories.category_id) as cat_data
            on cat_data.book_id=newbook.book_id) as grp left join Publishers on grp.publisher_id=Publishers.id) as filter_book
            where name like %s
            """,  (search_key.title(), ),

    )
    filter_data = cur.fetchall()
    cur.close()
    main_data = []
    for d in filter_data:
        main_data.append(d)
    return json.dumps({"error": False, "message": "Success", "data": main_data})
