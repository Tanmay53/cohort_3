from flask import Blueprint, request, jsonify
from db_helper import connect, insert, select_one, select_all, delete_helper, edit_helper
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
def book_create():
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
