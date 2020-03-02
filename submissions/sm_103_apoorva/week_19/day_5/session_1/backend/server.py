from flask import Flask
from flask import request, make_response, jsonify
from blueprint_auth import auth
from flask_mysqldb import MySQL
import json
import jwt

app = Flask(__name__)
app.register_blueprint(auth, url_prefix = '/auth')

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Kushal#025'
app.config['MYSQL_DB'] = 'task_manager'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

@app.route('/readtask', methods = ['POST'])
def read_task():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secure', algorithms=['HS256'])
    val = str(decode_data['user_id'])
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM task_list  WHERE user_id = %s""",(val,)
    )
    results = cursor.fetchall()
    cursor.close()
    return jsonify(results)

@app.route('/addlist', methods = ['POST'])
def add_task_to_list():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secure', algorithms=['HS256'])
    val = str(decode_data['user_id'])
    list_name = request.json['list_name']
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO task_list(list_name,user_id) VALUES(%s,%s)""",(list_name,val,)
        )
        mysql.connection.commit()
        return jsonify({"message":"New Task List Created"})
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()


@app.route('/addtask', methods = ['POST'])
def add_task():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secure', algorithms=['HS256'])
    val = str(decode_data['user_id'])
    list_id = request.json['list_id']
    task_name = request.json['task_name']
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO tasks (task_name,user_id,list_id) VALUES(%s,%s,%s)""",(task_name,val,list_id,)
        )
        mysql.connection.commit()
        return jsonify({"message":"New Task Created"})
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()


@app.route('/changestatus', methods = ['POST'])
def change_task_status():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secure', algorithms=['HS256'])
    val = str(decode_data['user_id'])
    list_id = request.json['list_id']
    task_id = request.json['task_id']
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """UPDATE tasks SET isdone= %s WHERE user_id = %s AND list_id = %s AND task_id = %s""",(1,val,list_id,task_id,)
        )
        mysql.connection.commit()
        return jsonify({"message":"Marked Done"})
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()

@app.route('/deletetask', methods = ['POST'])
def delete_task():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secure', algorithms=['HS256'])
    val = str(decode_data['user_id'])
    list_id = request.json['list_id']
    task_id = request.json['task_id']
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM tasks WHERE user_id = %s AND list_id = %s AND task_id = %s""",(val,list_id,task_id,)
        )
        mysql.connection.commit()
        return jsonify({"message":"Task Deleted"})
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()

@app.route('/deletetasklist', methods = ['POST'])
def delete_task_list():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'secure', algorithms=['HS256'])
    val = str(decode_data['user_id'])
    list_id = request.json['list_id']
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM tasks WHERE user_id = %s AND list_id = %s""",(val,list_id,)
        )
        cursor.execute(
            """DELETE FROM task_list WHERE user_id = %s AND list_id = %s""",(val,list_id,)
        )
        mysql.connection.commit()
        return jsonify({"message":"Task List Deleted"})
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()
