from flask import Blueprint, request, jsonify
from db_helper import connect, insert, select_one, select_all, delete_helper, edit_helper
import jwt


dir = Blueprint('dir', __name__)

# write routes here
@dir.route('/create', methods=['POST'])
def dir_create():
    try:
        parent_id = request.json['parent_id']
        name       = request.json['name']
        dir_id     = request.json['dir_id']

        query = '''INSERT INTO `dir` (name, dir_id, parent_id) VALUES (%s, %s, %s)'''
        arguments = [name, dir_id, parent_id]
        insert(query, arguments)
        return jsonify({'result': 'success'})
    except Exception as ex:
        print(ex)
        return jsonify({'result', 'failure'})

@dir.route('/list/<string:uuid>')
def dir_list(uuid):
    try:
        if uuid == "all":
            query = "SELECT * FROM `dir` WHERE `parent_id` is NULL"
        else:
            query = "SELECT * FROM `dir` WHERE `parent_id` = '{0}'".format(uuid)
        
        result = select_all(query, [])
        return jsonify(result)
    except Exception as ex:
        print(ex)
        return jsonify({'result':'failure'})
    
    