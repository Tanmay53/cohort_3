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
        tasklists_id = request.json['tasklist_id']

        query = '''UPDATE `tasklists` SET `desc` = %s WHERE `tasklist_id` = %s'''
        result = edit_helper(query, [desc, tasklists_id])
        return jsonify(result)
    except Exception:
            return jsonify({'result':'failure' })


@task.route('/create/task', methods=['POST'])
def create_task():
    try:
        name = request.json['name']
        uuid = request.json['uuid']
        tasklists_id = request.json['tasklist_id']

        query = '''INSERT INTO `task` (`tasklist_id`, `name`, `uuid`) VALUES (%s, %s, %s)'''
        result = insert(query, [tasklists_id, name, uuid])
        return jsonify(result)
    except Exception:
            return jsonify({'result':'failure' })   

@task.route('/delete/task', methods=['DELETE'])
def delete_task():
    try:
        uuid    = request.json['uuid']

        query = '''DELETE FROM `task` WHERE `uuid` = %s'''
        result = delete_helper(query, [uuid])

        return jsonify(result)
    except Exception:
            return jsonify({'result':'failure' })                        

@task.route('/select/tasklist', methods=['POST'])
def select_tasklist():
    try:
        user_id = request.json['user_id']
        query = '''select tl.tasklist_id, tl.uuid as tl_uuid, tl.name as tl_name, tl.desc, 
                   group_concat(t.name separator ';;;') as t_name, group_concat(t.uuid separator ';;;') as uuid from tasklists 
                   tl left join task t on  tl.tasklist_id = t.tasklist_id 
                   where tl.user_id = %s group by tl.tasklist_id;'''
        
        arguments = [user_id]
        result = select_all(query, arguments) 
        return jsonify(result)
    except Exception:
            return jsonify({'result':'failure' })   


@task.route('/delete/tasklist', methods=['DELETE'])
def delete_tasklist():
    try:
        tasklist_id    = request.json['tasklist_id']
        """ 
        decoded = jwt.decode(token, 'secret', algorithms=['HS256'])
        user_id = decoded['user_id']
        """        
        delete_helper('''DELETE FROM `task` WHERE `tasklist_id` = %s''', [tasklist_id])
        result = delete_helper('''DELETE FROM `tasklists` WHERE `tasklist_id` = %s''', [tasklist_id])
        return jsonify(result)  
        # return jsonify({'result':'success' })  
    except Exception:
        return jsonify({'result': 'failure'})

@task.route('/summary', methods=['POST'])
def summary():
    try:
        user_id = request.json['user_id']
        query = '''select tl.tasklist_id, tl.name, count(t.task_id) as count     from tasklists tl 
                   left join task t on tl.tasklist_id = t.tasklist_id 
                   where tl.user_id = %s group by tl.tasklist_id, tl.name
                '''
        arguments = [user_id]
        result = select_all(query, arguments)
        return jsonify(result)
    except Exception:
        return jsonify({'result': 'failure'})