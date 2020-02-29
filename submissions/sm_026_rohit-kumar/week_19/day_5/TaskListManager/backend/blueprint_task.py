from flask import Blueprint, request, jsonify
from db_helper import connect, insert, select_one, select_all, delete_helper, edit_helper, insert_then_select
import jwt


task = Blueprint('task', __name__)

# write routes here
@task.route('/create', methods=['POST'])
def create():
    try:
        user_id = request.json['user_id']
        uuid    = request.json['uuid']
        name    = request.json['name']
        desc    = request.json['desc']
        
        """ 
        decoded = jwt.decode(token, 'secret', algorithms=['HS256'])
        user_id = decoded['user_id']
        """
        query_arr = []
        query_arr.append(['''INSERT INTO `tasklists` (`user_id`, `uuid`, `name`, `desc`)
                            VALUES (%s, %s, %s, %s)''', [user_id, uuid, name, desc]])

        query_arr.append(['''SELECT LAST_INSERT_ID() AS last_id''', []])
        result = insert_then_select(query_arr)

        return jsonify(result)
    except Exception:
        return jsonify({'result': 'failure'})

@task.route('/update/name', methods=['PUT'])
def update_name():
    try:
        name = request.json['name'] 
        tasklist_id = request.json['tasklist_id']   

        query = '''UPDATE `tasklists` SET `name` = %s WHERE `tasklist_id` = %s'''
        result = edit_helper(query, [name, tasklist_id])
        return jsonify(result)
    except Exception:
            return jsonify({'result':'failure' })


@task.route('/update/desc', methods=['PUT'])
def update_desc():
    try:
        desc = request.json['desc']
        tasklists_id = request.json['tasklists_id']

        query = '''UPDATE `tasklists` SET `desc` = %s WHERE `tasklists_id` = %s'''
        result = edit_helper(query, [desc, tasklists_id])
        return jsonify(result)
    except Exception:
            return jsonify({'result':'failure' })