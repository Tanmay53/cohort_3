from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import json

app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '@ps123'
app.config['MYSQL_DB'] = 'practise_closure'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

@app.route('/')
def home():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM (SELECT COUNT(descendant_id) AS count,
         descendant_id FROM closure_table GROUP BY descendant_id)
          AS sub_table JOIN folders ON folders.id = sub_table.descendant_id
           WHERE sub_table.count = %s""", (1,)
    )
    result = cursor.fetchall()
    cursor.close()
    top_folders = list()
    for item in result:
        top_folders.append(item)
    return {"topFolders": top_folders}

@app.route('/child/<int:id>', methods = ['POST', 'GET'])
def immediateChild(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM folders JOIN closure_table ON
         folders.id = closure_table.descendant_id WHERE
          ancestor_id = %s AND path_length = %s""", (id, 1)
    )
    result = cursor.fetchall()
    cursor.close()
    immediateChildd = list()
    for item in result:
        immediateChildd.append(item)
    return {"immediateChild": immediateChildd}

@app.route('/parent/<int:id>', methods = ['POST', 'GET'])
def immediateParent(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM folders JOIN closure_table ON
         folders.id = closure_table.descendant_id WHERE
          closure_table.ancestor_id = (SELECT folders.id
           FROM folders JOIN closure_table ON folders.id
            = closure_table.ancestor_id WHERE descendant_id
             = %s AND path_length = 2) AND closure_table.path_length
              = 1""", (id,)
    )
    result = cursor.fetchall()
    cursor.close()
    immmediateParentt = list()
    for item in result:
        immmediateParentt.append(item)
    return {"immediateParent": immmediateParentt}
