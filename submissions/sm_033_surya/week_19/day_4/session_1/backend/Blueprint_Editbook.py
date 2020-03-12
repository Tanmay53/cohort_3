from flask import Blueprint
from server import mysql
from flask import json,jsonify,request
from helper import deletebooksmethod,getid
from Blueprint_addbook import updateauthcategory

editbook = Blueprint('editbook',__name__)

@editbook.route('/editbook/<id>')
def sendcategoriess(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from categories"""
    )
    results = cursor.fetchall()
    cursor.close()
    temp = []
    for r in results:
        temp.append(r["categorytype"])
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select  books.id,books.title,books.publishername,group_concat(distinct authors.name) as Authors, group_concat(distinct categories.categorytype) as categories from books left join book_author on book_author.book_id = books.id left join authors on book_author.author_id = authors.id left join book_category on books.id = book_category.book_id left join categories on book_category.category_id = categories.id where books.id = %s group by books.id""",(id,)
    )
    result = cursor.fetchone()
    cursor.close()
    print(result)
    return jsonify({"category":temp,"data":result})

@editbook.route('/update/<id>',methods=['POST'])
def updatedata(id):
    title = request.json['title']
    authorlist = request.json['author']
    publisher = request.json['publisher']
    categorylist = request.json['category']
    cursor = mysql.connection.cursor()
    cursor.execute(
    """UPDATE books  SET title = %s ,publishername = %s WHERE id = %s""", (title, publisher,id)
    )
    cursor.connection.commit()
    cursor.close()
    deletebooksmethod(id)
    titleid = getid("books", "title", title)
    updateauthcategory(titleid,authorlist,categorylist)
    return json.dumps({"massage":"updated"})
    