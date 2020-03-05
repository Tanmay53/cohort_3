from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'nipLOVESsud@94'
app.config['MYSQL_DB'] = 'ClosureTable_folder'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)



@app.route('/')
def home():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM (SELECT COUNT(descendant) AS des_count, descendant FROM Closure_Table GROUP BY descendant)
         AS des_count_table JOIN folders ON folders.id = des_count_table.descendant WHERE des_count = 1"""
    )
    results = cursor.fetchall()
    cursor.close()
    folders = []
    for i in results:
        folders.append(i)
    return { "folders": folders, "message": "Data Fetched"}

@app.route('/child/<int:id>')
def find_child(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM Closure_Table JOIN folders ON 
        (folders.id = descendant) WHERE ancestor = %s and length = 1""", (str(id))
    )
    results = cursor.fetchall()
    cursor.close()
    childs = []
    for i in results:
        childs.append(i)
    return {"child_folders": childs}

@app.route('/parent/<int:id>')
def parent(id):
    c1 = mysql.connection.cursor()
    c1.execute(
        """select * from folders join Closure_Table on folders.id = Closure_Table.descendant where ancestor = (select folders.id from Closure_Table join folders on folders.id = ancestor where descendant = %s and length = 2) and length = 1""", (str(id))
    )
    res1 = c1.fetchall()
    if len(res1) > 0:
        c1.close()
        return {"parent": res1}
    else:
        c1.execute(
            """SELECT * FROM folders join Closure_Table on folders.id = ancestor where descendant = %s and length = 1""", (str(id))
        )
        res2 = c1.fetchall()
        return {"parent": res2}
    c1.close()

@app.route('/create_folder', methods=['POST'])
def create_folder():
    body = request.json
    folder_name = body['folder_name']
    parent_id = body['parent_id']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO folders (folder_name) 
        VALUES (%s)""", (folder_name,)
    )
    cursor.execute(
        """SELECT id FROM folders WHERE folder_name = (%s)""", (folder_name,)
    )
    res = cursor.fetchall()
    folder_id = res[0]['id']
    cursor.execute(
        """INSERT INTO Closure_Table (ancestor, descendant, length)  
        SELECT ancestor, %s, (length+1) FROM Closure_Table WHERE descendant = %s 
        UNION ALL SELECT %s, %s, 0""", (folder_id, parent_id, folder_id, folder_id)
    )
    mysql.connection.commit()
    cursor.close()
    return {"message": "Folder Created"}


# @app.route('/create', methods=['GET', 'POST'])
# def create():
#     if request.methods == "POST"
#         cursor = mysql.connection.cursor()
#         cursor.execute()
#         mysql.connection.commit()
#         cursor.close()
        # return {"message": "Folder Created"}
    # if request


# @app.route('/create')
# def create():
#     cursor = mysql.connection.cursor()
#     cursor.execute(
#         """INSERT INTO users (name, country_id)
#         VALUES (%s, %s) """, ("Aman", 3) 
#         )
#     mysql.connection.commit()
#     cursor.close()
#     return {"message": "user created"}
# @app.route('/update')
# def update():
#     cursor = mysql.connection.cursor()
#     cursor.execute(
#         """UPDATE users SET name = %s WHERE id > %s""", ("Yogesh", 4) 
#         )
#     mysql.connection.commit()
#     cursor.close()
#     return {"message": "users updated"}
# @app.route('/delete')
# def delete():
#     cursor = mysql.connection.cursor()
#     cursor.execute(
#         """DELETE FROM users WHERE id = %s""", (1,) 
#         )
#     mysql.connection.commit()
#     cursor.close()
#     return {"message": "user deleted"}