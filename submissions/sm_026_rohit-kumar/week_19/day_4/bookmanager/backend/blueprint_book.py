from flask import Blueprint, request, jsonify
from db_helper import connect, insert, select_one, select_all, delete_helper, edit_helper, insert_then_select_id
import jwt


book = Blueprint('book', __name__)

@book.route('/author/select')
def author_select():
    try:
        query = '''SELECT * FROM `authors`'''
        result = select_all(query, [])
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})

@book.route('/author/create', methods=['POST'])
def author_create():
    try:
        name = request.json['name']
        uuid = request.json['uuid']

        query = '''INSERT INTO `authors` (`name`, `uuid`) VALUES (%s, %s)'''
        arguments = [name, uuid]
        result = insert(query, arguments)
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})

@book.route('/author/delete', methods=['DELETE'])
def author_delete():
    uuid = request.json['uuid']

    query_arr = []
    query_arr.append(['''DELETE FROM `authors` WHERE `uuid` = %s''', [uuid]])
    result = delete_helper(query_arr)
    return jsonify(result)

@book.route('/author/update', methods=['PUT'])
def author_update():
    try:
        name = request.json['name']
        uuid = request.json['uuid']

        query = '''UPDATE `authors` SET `name` = %s WHERE `uuid` = %s'''
        arguments = [name, uuid]
        result = edit_helper(query, arguments)
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})


@book.route('/publisher/select')
def publisher_select():
    try:
        query = '''SELECT * FROM `publishers`'''
        result = select_all(query, [])
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})


@book.route('/publisher/create', methods=['POST'])
def publisher_create():
    try:
        name = request.json['name']
        uuid = request.json['uuid']

        query = '''INSERT INTO `publishers` (`name`, `uuid`) VALUES (%s, %s)'''
        arguments = [name, uuid]
        result = insert(query, arguments)
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})

@book.route('/publisher/delete', methods=['DELETE'])
def publisher_delete():
    uuid = request.json['uuid']

    query_arr = []
    query_arr.append(['''DELETE FROM `publishers` WHERE `uuid` = %s''', [uuid]])
    result = delete_helper(query_arr)
    return jsonify(result)

@book.route('/publisher/update', methods=['PUT'])
def publisher_update():
    try:
        name = request.json['name']
        uuid = request.json['uuid']

        query = '''UPDATE `publishers` SET `name` = %s WHERE `uuid` = %s'''
        arguments = [name, uuid]
        result = edit_helper(query, arguments)
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})

@book.route('/category/select')
def category_select():
    try:
        query = '''SELECT * FROM `category`'''
        result = select_all(query, [])
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})

@book.route('/category/create', methods=['POST'])
def category_create():
    try:
        name = request.json['name']
        uuid = request.json['uuid']

        query = '''INSERT INTO `category` (`name`, `uuid`) VALUES (%s, %s)'''
        arguments = [name, uuid]
        result = insert(query, arguments)
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})

@book.route('/category/delete', methods=['DELETE'])
def book_delete():
    uuid = request.json['uuid']

    query_arr = []
    query_arr.append(['''DELETE FROM `category` WHERE `uuid` = %s''', [uuid]])
    result = delete_helper(query_arr)
    return jsonify(result)

@book.route('/category/update', methods=['PUT'])
def book_update():
    try:
        name = request.json['name']
        uuid = request.json['uuid']

        query = '''UPDATE `category` SET `name` = %s WHERE `uuid` = %s'''
        arguments = [name, uuid]
        result = edit_helper(query, arguments)
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})

@book.route('/book/fetch/all')
def book_fetchall():
    try:
        query = '''
                SELECT b.book_id, b.book_title,p.name as publisher, 
                GROUP_CONCAT(DISTINCT a.name) AS authors, 
                GROUP_CONCAT(DISTINCT c.name) AS categories 
                FROM ((SELECT ba.book_id, ba.author_id, bc.category_id 
                FROM book_author ba LEFT JOIN book_category bc ON ba.book_id = bc.book_id)  as bac  
                RIGHT JOIN books b ON b.book_id = bac.book_id LEFT JOIN authors a on a.id = bac.author_id 
                LEFT JOIN category c on c.id = bac.category_id
                LEFT JOIN publishers p ON p.id = b.publisher_id) GROUP BY b.book_id;
            '''  
        result = select_all(query, [])
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})

@book.route('/book/fetch/searched', methods=['POST'])
def book_fetch_searched():
    try:
        searchParam = request.json['searchParam']
        query = '''
                SELECT * FROM (SELECT b.book_id, b.book_title,p.name as publisher,  
                GROUP_CONCAT(DISTINCT a.name) AS authors,  
                GROUP_CONCAT(DISTINCT c.name) AS categories  
                FROM ((SELECT ba.book_id, ba.author_id, bc.category_id  FROM book_author ba 
                LEFT JOIN book_category bc ON ba.book_id = bc.book_id)  as bac   
                RIGHT JOIN books b ON b.book_id = bac.book_id 
                LEFT JOIN authors a on a.id = bac.author_id  
                LEFT JOIN category c on c.id = bac.category_id 
                LEFT JOIN publishers p ON p.id = b.publisher_id) 
                GROUP BY b.book_id) AS temp 
                WHERE book_title LIKE '%{0}%' 
                OR authors LIKE '%{0}%' 
                OR categories LIKE '%{0}%'
                OR publisher LIKE '%{0}%'
            '''.format(searchParam)

        result = select_all(query)
        return jsonify(result)
    except Exception as ex:
        print(ex)
        return jsonify({'result':'failure'})




@book.route('/book/delete/<int:book_id>', methods=['DELETE'])
def book_delete2(book_id):
    try:
        query_arr = []
        query_arr.append(['''DELETE FROM `book_author` WHERE `book_id` = %s''', [book_id]])
        query_arr.append(['''DELETE FROM `book_category` WHERE `book_id` = %s''', [book_id]])
        query_arr.append(['''DELETE FROM `books` WHERE `book_id` = %s''', [book_id]])
        result = delete_helper(query_arr)
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})




@book.route('/book/create', methods=['POST'])
def book_create():
    try:
        #content = request.get_json(force=True)
        book_title      = request.json['book_title']
        uuid            = request.json['uuid']
        publisher_id    = request.json['publisher_id']
        author_ids      = request.json['author_ids'] 
        category_ids    = request.json['category_ids']
        
        query = '''INSERT INTO `books` (`book_title`, `uuid`, `publisher_id`)
                   VALUES (%s, %s, %s) 
                '''
        arguments = [book_title, uuid, publisher_id]
        book_id = insert_then_select_id(query, arguments)['result']['ID']

        # insert authors
        for ids in author_ids:
            query = '''INSERT INTO `book_author` (`book_id`, `author_id`) VALUES (%s, %s)'''
            arguments = [book_id, ids]
            insert(query, arguments)
        
        # insert category
        for ids in category_ids:
            query = '''INSERT INTO `book_category` (`book_id`, `category_id`) VALUES (%s, %s)'''
            arguments = [book_id, ids]
            insert(query, arguments)

        return jsonify({'result':'success'})
    except Exception as ex: 
        print({'result': ex})
        return jsonify({'result':'failure'})
