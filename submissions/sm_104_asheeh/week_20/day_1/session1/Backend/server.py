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
    query1 = """SELECT * FROM folders JOIN closure_table ON
         folders.id = closure_table.descendant_id WHERE
          closure_table.ancestor_id = (SELECT folders.id
           FROM folders JOIN closure_table ON folders.id
            = closure_table.ancestor_id WHERE descendant_id
             = %s AND path_length = 2) AND closure_table.path_length
              = 1"""
    cursor = mysql.connection.cursor()
    cursor.execute(query1, (id,))
    result = cursor.fetchall()
    cursor.close()

    if len(result) > 0:
        return {"immediateParent": result}

    query2 = """SELECT * FROM folders JOIN closure_table
             ON folders.id = closure_table.ancestor_id
              WHERE descendant_id = %s AND path_length = 1
            """ 
    cursor = mysql.connection.cursor()
    cursor.execute(query2, (id,))
    res = cursor.fetchall()
    cursor.close()
    return {"immediateParent": res}

@app.route('/create', methods = ["POST"])
def create():
    ask = request.json
    folder_name = ask["folder_name"]
    parent_id = ask["parent_id"]
    query1 = """INSERT INTO folders (folder_name) VALUE (%s)"""
    query2 = """SELECT id FROM folders WHERE folder_name = %s"""
    
    cursor = mysql.connection.cursor()
    cursor.execute(query1, (folder_name,))
    cursor.execute(query2, (folder_name,))
    result = cursor.fetchall()
    born_id = result[0]["id"]
    print(born_id)
    query3 = """INSERT INTO closure_table
                 (ancestor_id, descendant_id, path_length)
                  SELECT ancestor_id, %s, path_length + 1 FROM
                   closure_table WHERE descendant_id = %s UNION ALL
                    SELECT %s, %s, 0"""
    cursor.execute(query3, (born_id, parent_id, born_id, born_id))
    mysql.connection.commit()
    cursor.close()
    return {"message": "Folder added successfully"}


    
