from flask import Blueprint, request
import json
from server import mysql
from helpers import decode_token

tasks = Blueprint('tasks', __name__)

@tasks.route('', methods=['POST'])
def addTask():
    taskspec = request.json['taskspec']
    tasklist_id = request.json['tasklist_id']
    cursor = mysql.connection.cursor()
    cursor.execute('''insert into tasks(taskspec, tasklist_id) values(%s, %s)''', (taskspec, tasklist_id))
    mysql.connection.commit()
    cursor.close()
    return json.dumps({'message': 'Task Added Successfully', 'error': False})

@tasks.route('/<int:task_id>', methods=['PUT', 'DELETE'])
def editAndDelete(task_id):
    token = request.headers['Authorization'].split(' ')[1]
    userId = decode_token(token)['id']
    if request.method == 'PUT':
        taskspec = request.json['taskspec']
        cursor = mysql.connection.cursor()
        cursor.execute('''select tasks.id as task_id, user_id from tasks join task_list on tasklist_id=task_list.id where tasks.id=%s''', (task_id,))
        taskData = []
        for item in cursor.fetchall():
            taskData.append(item)
        taskData = taskData[0]
        if taskData['user_id'] == userId:
            cursor.execute('''update tasks set taskspec=%s where id=%s''', (taskspec, task_id,))
            mysql.connection.commit()
            cursor.close()
            return json.dumps({'message': 'Task Updated Successfully', 'error': False})
        else:
            mysql.connection.commit()
            cursor.close()
            return json.dumps({'error': True})
    elif request.method == 'DELETE':
        cursor = mysql.connection.cursor()
        cursor.execute('''select tasks.id as task_id, user_id from tasks join task_list on tasklist_id=task_list.id where tasks.id=%s''', (task_id,))
        taskData = []
        for item in cursor.fetchall():
            taskData.append(item)
        taskData = taskData[0]
        if taskData['user_id'] == userId:
            cursor.execute('''delete from tasks where id=%s''', (task_id,))
            mysql.connection.commit()
            cursor.close()
            return json.dumps({'message': 'Task Deleted Successfully', 'error': False})
        else:
            mysql.connection.commit()
            cursor.close()
            return json.dumps({'error': True})
