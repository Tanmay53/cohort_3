import json
import os.path
import csv
import jwt
import base64
import hashlib
from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import jwt
app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Stupid@55655'
app.config['MYSQL_DB'] = 'task'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

# function to display all tasklists
@app.route('/allTasklists')
def allTasklists():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ select tasklist.name,tasklist.id,tasklist.date,count(task_id)as pending from tasklist left join tasks on tasklist.id=tasks.task_id where tasklist.user_id =%s group by tasklist.id;""", (ans["id"],)
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




# function to get User details
@app.route('/user')
def user():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if ans:
        print(ans["id"])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM registration where id=%s""",(ans["id"],)
        )
        user=cursor.fetchall()
        print(user)
        cursor.close()
        if user:
            return jsonify(user)
        else:
            return{"message": "No Data Available"}
    else:
        return{"message": "Invalid User"}




from tasks import task
from listing import listing
from registration import auth
from registration import loggedPerson
app.register_blueprint(task, url_prefix="/task")
app.register_blueprint(listing, url_prefix="/listing")
app.register_blueprint(auth, url_prefix="/auth")