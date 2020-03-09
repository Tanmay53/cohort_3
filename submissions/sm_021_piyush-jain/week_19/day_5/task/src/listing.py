from flask import Flask
from flask import Blueprint
from flask import jsonify
from flask import request
import json
import os.path
import csv
from registration import loggedPerson
from server import mysql
listing = Blueprint("listing", __name__)


# function to add tasklist
@listing.route('/addTaskList', methods=['POST'])
def addTaskList():
    if request.method == 'POST':
        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        if ans:
            name = request.json["add"]
            date = request.json["date"]
            cursor = mysql.connection.cursor()
            cursor.execute(
                """INSERT INTO tasklist(id,name,user_id,date)values(NULL,%s,%s,%s)""", (
                    name, ans["id"], date)
            )
            cursor.connection.commit()
            cursor.close()
            return({"message": "added"})


# function to delete Tasklist
@listing.route('/deleteTasklists/<int:idx>')
def deleteTasklists(idx):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        print(idx,ans["id"])
        cursor=mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM tasks where task_id=%s  """,(idx,)
        )
        cursor.connection.commit()
        cursor.close()
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM tasklist where id=%s """, (
                idx,)
        )
        cursor.connection.commit()
        cursor.close()
        return({"message": "deleted"})

# function to update Tasklist
@listing.route('/updateTaskList/<int:idx>', methods=['POST'])
def updateTaskList(idx):
    if request.method == 'POST':
        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        if ans:
            task = request.json["task"]
            cursor = mysql.connection.cursor()
            cursor.execute(
                """UPDATE tasklist SET name=%s where id=%s and user_id=%s""", (
                    task, idx, ans["id"])
            )
            cursor.connection.commit()
            cursor.close()
            return({"message": "updated"})        
