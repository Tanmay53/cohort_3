from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import MySQLdb as err
import json

app = Flask(__name__)

#configuring sql db with auth
app.config['MYSQL_USER'] = 'sagar'
app.config['MYSQL_PASSWORD'] = 'anku123'
app.config['MYSQL_DB'] = 'Library'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


#function for specific book details using bookid
def fetchSpecificDetails(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT books.id,bookname,GROUP_CONCAT(DISTINCT(authors.author)) as authors, GROUP_CONCAT(DISTINCT(categories.category_name)) as category FROM books 
        JOIN authors ON authors.book_id = books.id JOIN categories ON categories.book_id = books.id WHERE books.id = %s GROUP BY(books.id) """,(id,)
    )
    details = cursor.fetchone()
    cursor.close()
    return details


#function to fetch all book details
def fetchAllDetails():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT books.id,bookname,GROUP_CONCAT(DISTINCT(authors.author)) as authors, GROUP_CONCAT(DISTINCT(categories.category_name)) as category FROM books 
        JOIN authors ON authors.book_id = books.id JOIN categories ON categories.book_id = books.id GROUP BY(books.id)"""
    )
    details = cursor.fetchall()
    cursor.close()
    books = []
    for book in details:
        books.append(book)
    print(books)
    return books


@app.route('/book',methods=['POST'])
def addNewBook():
    bookname = request.json['bookname']
    print('reached in book')
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO books (bookname)
            VALUES (%s) """, (bookname,) 
        )
        mysql.connection.commit()
        cursor.close()

        #fetch book id 
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT id,bookname FROM books WHERE bookname=%s""",(bookname,)
        )
        result = cursor.fetchone()
        cursor.close()
        print('book id is ',result['id'])
        return {"message":"Book added","bookid":result['id'],"status":True}
    except err.IntegrityError:
        return {"message":"Book is already present","status":False}




@app.route('/book',methods=['DELETE'])
def deleteBook():
    bookid = request.json['bookid']
    
    #first, delete all category dependency on bookid
    cursor = mysql.connection.cursor()
    cursor.execute(
        """DELETE FROM categories WHERE book_id = %s""",(bookid,)
    )
    mysql.connection.commit()
    cursor.close()

    #second, delete all author dependency on bookid
    cursor = mysql.connection.cursor()
    cursor.execute(
        """DELETE FROM authors WHERE book_id = %s""",(bookid,)
    )
    mysql.connection.commit()
    cursor.close()

    #finally, delete book_id
    cursor = mysql.connection.cursor()
    cursor.execute(
        """DELETE FROM books WHERE id = %s""",(bookid,)
    )
    mysql.connection.commit()
    cursor.close()
    return {"message":"Book Deleted"}


@app.route('/book')
def allBookDetails():
    totalDetails = fetchAllDetails()
    return {"total-details":totalDetails}



@app.route('/publisher',methods=['PUT'])
def addPublisher():
    publisher = request.json['publisher']
    bookid = request.json['bookid']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """UPDATE books SET publisher = %s WHERE id = %s """, (publisher,bookid) 
    )
    mysql.connection.commit()
    cursor.close()

    #fetch book id 
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM books WHERE id = %s""",(bookid,)
    )
    cursor.close()
    return {"message":"Publisher Added","bookid":bookid}



@app.route('/author',methods =['POST'])
def addAuthor():
    bookid = request.json['bookid']
    author = request.json['author']
    print('reached author',author)

    for i in range(len(author)):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO authors (author,book_id) VALUES(%s,%s)""",(author[i],bookid) 
        )
        mysql.connection.commit()
        cursor.close()

    #fetch book details
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM authors WHERE book_id = %s""",(bookid,)
    )
    authors = cursor.fetchall()
    cursor.close()
    return {"message":"author list sent","authors":authors,"bookid":bookid}


@app.route('/categories',methods = ['POST'])
def addCategory():
    bookid = request.json['bookid']
    category = request.json['category']
    print('reached category',category)

    for i in range(len(category)):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO categories(category_name,book_id) VALUES(%s,%s)""",(category[i],bookid)
        )
        mysql.connection.commit()
        cursor.close()

    #fetch category details
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM categories WHERE book_id = %s""",(bookid,)
    )
    categories = cursor.fetchall()
    cursor.close()
    return {"message":"Book Successfully Added","bookid":bookid}



#==============================================================================================
#search books --------->
@app.route('/search/book/<book>')
def searchBook(book):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT books.id,bookname,GROUP_CONCAT(DISTINCT(authors.author)) as authors, GROUP_CONCAT(DISTINCT(categories.category_name)) as category FROM books 
        JOIN authors ON authors.book_id = books.id JOIN categories ON categories.book_id = books.id WHERE bookname = %s GROUP BY(books.id)""",(bookname,)
    )
    result = cursor.fetchall()
    cursor.close()
    return {"message":"details sent","result":result}


#search by author
@app.route('/search/author/<author>')
def searchAuthor(author):
    # author = request.json['author']
    print('author receiveed',author)
    cursor = mysql.connection.cursor()  
    cursor.execute(
        """SELECT books.id,bookname,GROUP_CONCAT(DISTINCT(authors.author)) as authors, GROUP_CONCAT(DISTINCT(categories.category_name)) as category FROM books 
        JOIN authors ON authors.book_id = books.id JOIN categories ON categories.book_id = books.id WHERE authors.author = %s GROUP BY(books.id)""",(author,)
    )
    result = cursor.fetchall()
    cursor.close()
    return {"message":"details sent","result":result}


#search by publisher
@app.route('/search/publisher/<publisher>')
def searchPublisher(publisher):
    # publisher = request.json('publisher')
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT books.id,bookname,GROUP_CONCAT(DISTINCT(authors.author)) as authors, GROUP_CONCAT(DISTINCT(categories.category_name)) as category FROM books 
        JOIN authors ON authors.book_id = books.id JOIN categories ON categories.book_id = books.id WHERE books.publisher = %s GROUP BY(books.id)""",(publisher,)
    )
    result = cursor.fetchall()
    cursor.close()
    return {"message":"details sent","result":result}


#search by category
@app.route('/search/category/<category>')
def searchCategory():
    category = request.json('category')
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT books.id,bookname,GROUP_CONCAT(DISTINCT(authors.author)) as authors, GROUP_CONCAT(DISTINCT(categories.category_name)) as category FROM books 
        JOIN authors ON authors.book_id = books.id JOIN categories ON categories.book_id = books.id WHERE categories.category_name = %s GROUP BY(books.id)""",(category,)
    )
    result = cursor.fetchall()
    cursor.close()
    return {"message":"details sent","result":result}




