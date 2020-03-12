from server import mysql
from flask import jsonify


def getid(tablename, columnname, name):
    query = "SELECT id FROM {0}  WHERE {1} = '{2}'".format(
        tablename, columnname, name)
    cursor = mysql.connection.cursor()
    cursor.execute(query, [])
    outid = cursor.fetchone()
    return outid


def search(a, b):
    query = "select * from(select  books.id,books.title as title,books.publishername,group_concat(distinct authors.name) as  Authors,  group_concat(distinct categories.categorytype) as categories from books join book_author on book_author.book_id = books.id join authors on book_author.author_id = authors.id join book_category on books.id = book_category.book_id join categories on book_category.category_id = categories.id group by books.id) as newtable where "+a+" Like '%"+b+"%'"
    cursor = mysql.connection.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    if len(result) == 0 :
        return "nodata"
    return result
    # return "hello"

def deletebooksmethod(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
    """DELETE FROM book_author WHERE book_id = %s""",(id,)
    )
    cursor.connection.commit()
    cursor.execute(
    """DELETE FROM book_category WHERE book_id = %s""",(id,)
    )
    cursor.connection.commit()
    cursor.close()
    return "hello"