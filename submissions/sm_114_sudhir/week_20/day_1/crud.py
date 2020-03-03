from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'masai123'
app.config['MYSQL_DB'] = 'sql_3'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)
@app.route('/read')
def read():
    cursor = mysql.connection.cursor()
    # cursor.execute(
    #     """SELECT * FROM students_marks where class = %s AND gender = %s""", ('X', 'Male')
    # )
    cursor.execute (
        """SELECT * FROM users WHERE name = %s """, ("Masai",)
    )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for item in results:
        items.append(item)
    return {"users": items}
@app.route('/create')
def create():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (name, country_id)
        VALUES (%s, %s) """, ("Aman", 3) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "user created"}
@app.route('/update')
def update():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """UPDATE users SET name = %s WHERE id > %s""", ("Yogesh", 4) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "users updated"}
@app.route('/delete')
def delete():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """DELETE FROM users WHERE id = %s""", (1,) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "user deleted"}