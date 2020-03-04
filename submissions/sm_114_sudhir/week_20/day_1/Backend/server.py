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
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM Closure_Table JOIN folders ON (folders.id = ancestor)
        WHERE descendant = %s and length = 2""", (str(id))
    )
    results = cursor.fetchall()
    cursor.close()
    parents = []
    for i in results:
        parents.append(i)
    return {"parents": parents}

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