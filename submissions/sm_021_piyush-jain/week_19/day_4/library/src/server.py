from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import jwt
app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Stupid@55655'
app.config['MYSQL_DB'] = 'library'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


# function to show books
@app.route('/allBooks')
def allBooks():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT book.id,book.name,book.publisher, GROUP_CONCAT(auth_name) as authors from author right join book on book_id=book.id group by book.id;"""
    )
    result = cursor.fetchall()
    cursor.connection.commit()
    cursor.close()
    items = []
    for item in result:
        items.append(item)
    print(items)
    if items:
        return jsonify(items)
    else:
        return({"message": "Library has no Books"})


# function to show category
@app.route('/allCategory')
def allCategory():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT * from category"""
    )
    result = cursor.fetchall()
    cursor.connection.commit()
    cursor.close()
    items = []
    for item in result:
        items.append(item)
    print(items)
    if items:
        return jsonify(items)
    else:
        return({"message": "No category"})


# function to show authors
@app.route('/allAuthors')
def allAuthors():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT DISTINCT(auth_name)as auth_name from author"""
    )
    result = cursor.fetchall()
    cursor.connection.commit()
    cursor.close()
    items = []
    for item in result:
        items.append(item)
    if items:
        return jsonify(items)
    else:
        return({"message": "No authors"})


# function to see if publisher is there
@app.route('/searchPub/<publisher>')
def searchPub(publisher):
    print("here")
    cursor = mysql.connection.cursor()
    print(publisher)
    cursor.execute(
        """ SELECT * from book where publisher=%s""", (publisher,)
    )
    result = cursor.fetchall()
    print(result)
    cursor.connection.commit()
    cursor.close()
    if result:
        print(result[0]["publisher"], "value")
        return ({"message": result[0]["publisher"]})
    else:
        return({"message": "Search again/Enter a new Publisher"})

#function to add a author
@app.route('/addAuthor/<int:idx>/<auth_name>') 
def addAuthor(idx,auth_name):
    print("addAuthor")
    cursor=mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO author(id,book_id,auth_name)values(NULL,%s,%s)""",(idx,auth_name)
    )
    print("query executed")
    cursor.connection.commit()
    cursor.close()
    return({"message":"added"})  






# function to add books
@app.route('/addBook', methods=['POST'])
def addBook():
    if request.method == 'POST':
        print("add")
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ INSERT into book(id,name,publisher,category_id)values(NULL,%s,%s,%s)""", (
                request.json["book"], request.json["publisher"], request.json["category"])
        )
        result = cursor.fetchall()
        print(result)
        cursor.connection.commit()
        cursor.close()
        if result:
            return({"message": "added"})
        else:
            return({"message": "Not added"})


# function to delete books
@app.route('/deleteBook/<int:idx>')
def deleteBook(idx):
    print("delete")
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ DELETE  FROM author where book_id=%s""", (idx,)
    )
    cursor.connection.commit()
    cursor.close()
    cursor=mysql.connection.cursor()
    cursor.execute(
        """ DELETE  FROM book where id=%s""", (idx,)
    )
    result = cursor.fetchall()
    print(result)
    cursor.connection.commit()
    cursor.close()
    return ({"message":"Deleted"})

# function to delete books
@app.route('/updateBook/<int:idx>',methods=['POST'])
def updateBook(idx):
    if request.method=='POST':
        print("update")
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ UPDATE book SET name=%s,publisher=%s where id=%s""", (request.json["updateBook"],request.json["updatePub"],idx)
        )
        cursor.connection.commit()
        cursor.close()
        return ({"message":"Deleted"})


# function to show books
@app.route('/sortCategory/<int:idx>')
def sortCategory(idx):
    cursor = mysql.connection.cursor()
    if idx == 0:
        cursor.execute(
            """ select book.id, book.name,book.publisher,book.category_id, GROUP_CONCAT(auth_name)as authors from author right join book on book_id=book.id  group by book.id; """
        )
        result = cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        items = []
        for item in result:
            items.append(item)
        print(items, "sorted one")
        if items:
            return jsonify(items)
        else:
            return jsonify(items)
    else:
        cursor.execute(
            """ select book.id, book.name,book.publisher,book.category_id, GROUP_CONCAT(auth_name)as authors from author right join book on book_id=book.id where category_id=%s group by book.id; """, (
                idx,)
        )
        result = cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        items = []
        for item in result:
            items.append(item)
        print(items)
        if items:
            return jsonify(items)
        else:
            return({"message": "No category"})



# function to search by book
@app.route('/searchBook/<book>')
def searchBook(book):
    cursor=mysql.connection.cursor()
    cursor.execute(
        """SELECT book.id,book.name,book.category_id,book.publisher, GROUP_CONCAT(auth_name) as authors from author right join book on book.id=author.book_id where book.name=%s group by book.id;""",(book,)
    )
    result=cursor.fetchall()
    cursor.connection.commit()
    cursor.close()
    return jsonify(result)

# function to search by book
@app.route('/searchPublisher/<pub>')
def searchPublisher(pub):
    cursor=mysql.connection.cursor()
    cursor.execute(
        """SELECT book.id,book.name,book.category_id,book.publisher, GROUP_CONCAT(auth_name) as authors from author right join book on book.id=author.book_id where book.publisher=%s group by book.id;""",(pub,)
    )
    result=cursor.fetchall()
    cursor.connection.commit()
    cursor.close()
    items = []
    for item in result:
        items.append(item)
    print(items)
    if items:
        return jsonify(items)
    else:
        return({"message": "No such publisher"})    

# function to search by book
@app.route('/searchAuthor/<author>')
def searchAuthor(author):
    cursor=mysql.connection.cursor()
    cursor.execute(
        """SELECT book.id,book.name,book.category_id,book.publisher, GROUP_CONCAT(auth_name) as authors from author right join book on book.id=author.book_id where auth_name=%s group by book.id;""",(author,)
    )
    result=cursor.fetchall()
    cursor.connection.commit()
    cursor.close()
    items = []
    for item in result:
        items.append(item)
    print(items)
    if items:
        return jsonify(items)
    else:
        return({"message": "No such author"})        