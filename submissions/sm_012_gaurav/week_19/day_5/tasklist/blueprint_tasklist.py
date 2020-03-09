from flask import Blueprint, request
from helpers import decode_token
from server import mysql
import json

tasklist = Blueprint('tasklist', __name__)

@tasklist.route('', methods=['GET', 'POST'])
def manipulateList():
    token = request.headers.get('Authorization').split(' ')[1]
    userId = decode_token(token)['id']
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute('''select task_list.id as tasklistId, tlname, count(tasks.id) as task_cnt from task_list left join tasks on tasklist_id = task_list.id where user_id=%s group by tasklistId;''', (userId,))
        lists = []
        for l in cursor.fetchall():
            lists.append(l)
        mysql.connection.commit()
        cursor.close()
        return json.dumps({'data': lists, 'error': False})
    elif request.method == 'POST':
        cursor = mysql.connection.cursor()
        tlname = request.json['tlname']
        cursor.execute('''insert into task_list(tlname, user_id) values(%s, %s)''', (tlname, userId,))
        mysql.connection.commit()
        cursor.close()
        return json.dumps({'message': 'List Added Successfully', 'error': False})

@tasklist.route('/<int:tasklist_id>', methods=['GET', 'DELETE'])
def manipulateIndList(tasklist_id):
    token = request.headers.get('Authorization').split(' ')[1]
    userId = decode_token(token)['id']
    if request.method == 'GET':
        cursor = mysql.connection.cursor()
        cursor.execute('''select tasks.id as task_id, taskspec from tasks join task_list on tasklist_id = task_list.id where tasklist_id = %s and user_id=%s''', (tasklist_id, userId,))
        tasks = []
        for task in cursor.fetchall():
            tasks.append(task)
        mysql.connection.commit()
        cursor.close()
        return json.dumps({'data': tasks, 'error': False})
    elif request.method == 'DELETE':
        cursor = mysql.connection.cursor()
        cursor.execute('''delete from tasks where tasklist_id=%s''', (tasklist_id,))
        cursor.execute('''delete from task_list where id=%s and user_id=%s''', (tasklist_id, userId,))
        mysql.connection.commit()
        cursor.close()
        return json.dumps({'message': 'TaskList Deleted Successfully', 'error': False})
