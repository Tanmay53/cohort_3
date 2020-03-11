from flask import Blueprint
from flask import request, jsonify
import json
from server import mysql
from helper import search

showdata = Blueprint("showdata", __name__)


@showdata.route('/dashboard')
def senddata():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select  books.id,books.title,books.publishername,group_concat(distinct authors.name) as Authors, group_concat(distinct categories.categorytype) as categories from books left join book_author on book_author.book_id = books.id left join authors on book_author.author_id = authors.id left join book_category on books.id = book_category.book_id left join categories on book_category.category_id = categories.id group by books.id"""
    )
    result = cursor.fetchall()
    cursor.close()
    temp = []
    for r in result:
        temp.append(r)
    print(temp)
    return jsonify(temp)

@showdata.route('/search', methods=['POST'])
def searchdata():
    text = request.json['text']
    bytitle = search("title", text)
    if bytitle == 'nodata':
        byauthor = search('authors', text)
        if byauthor == 'nodata':
            bycategory = search('category', text)
            if bycategory == 'nodata':
                return "none"
            else:
                return jsonify(bycategory)
        else:
            return jsonify(byauthor)
    else:
        return jsonify(bytitle)
