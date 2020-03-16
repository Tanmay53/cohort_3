from flask import Flask
from flask import Blueprint
from flask import jsonify
from flask import request
import json
import os.path
import csv
from registration import loggedPerson
from server import mysql
task = Blueprint("task", __name__)


# function to add task
@task.route('/addTask/<int:idx>', methods=['POST'])
def addTask(idx):
    if request.method == 'POST':
        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        if ans:
            name = request.json["add"]
            date = request.json["date"]
            cursor = mysql.connection.cursor()
            cursor.execute(
                """INSERT INTO tasks(id,task_id,user_id,name,date)values(NULL,%s,%s,%s,%s)""", (
                    idx, ans["id"], name, date)
            )
            cursor.connection.commit()
            cursor.close()
            return({"message": "deleted"})


# function to delete task
@task.route('/deleteTask/<int:idx>', methods=['GET'])
def deleteTask(idx):
    if request.method == 'GET':
        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        if ans:
            cursor = mysql.connection.cursor()
            cursor.execute(
                """DELETE FROM tasks where id=%s and user_id=%s""", (
                    idx, ans["id"])
            )
            cursor.connection.commit()
            cursor.close()
            return({"message": "deleted"})

# function to edit task
@task.route('/editTask/<int:idx>', methods=['POST'])
def editTask(idx):
    if request.method == 'POST':
        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        if ans:
            comment = request.json["comment"]
            cursor = mysql.connection.cursor()
            cursor.execute(
                """UPDATE tasks SET name=%s where id=%s and user_id=%s""", (
                    comment, idx, ans["id"])
            )
            cursor.connection.commit()
            cursor.close()
            return({"message": "success"})

# function to display all tasklists
@task.route('/oneTasklist/<int:idx>')
def oneTasklist(idx):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM tasklist where id=%s and user_id=%s""", (idx,ans["id"])
        )
        results = cursor.fetchall()
        print(results, "results")
        if results:
            items = []
            for item in results:
                items.append(item)
            return{"items": items}
        else:
            return{"message": "No Data Available"}
    else:
        return{"message": "Invalid User"}

# function to get a tasklists all the tasks
@task.route('/allTasks/<int:idx>')
def allTask(idx):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans["id"], "alltasks")
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM tasks where task_id=%s and user_id=%s""", (
                idx, ans["id"])
        )
        results = cursor.fetchall()
        print(results, "results")
        if results:
            items = []
            for item in results:
                items.append(item)
            return{"items": items}
        else:
            return{"message": "No Data Available"}
    else:
        return{"message": "Invalid User"}
