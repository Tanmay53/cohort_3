from flask import Flask, request
from flask_mysqldb import MySQL
app = Flask(__name__)


app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Averma379@'
app.config['MYSQL_DB'] = 'folderdb'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


@app.route('/')
def top_layer():
    cursor = mysql.connection.cursor()
    cursor.execute (
        """SELECT * FROM (SELECT COUNT(descendent) AS count,descendent FROM closure_table GROUP BY descendent)
         AS count_table JOIN folder_list ON folder_list.id = count_table.descendent WHERE count_table.count = 1;

"""
    )
    results = cursor.fetchall()
    cursor.close()
    return {"TOP_LAYER":results}


@app.route('/child/<int:id>')
def child_layer(id):
    cursor = mysql.connection.cursor()
    cursor.execute (
        """SELECT * FROM folder_list JOIN 
        closure_table ON id = closure_table.descendent 
        WHERE ancestor = %s and length = 1""",(id,)
    )
    results = cursor.fetchall()
    cursor.close()
    return {"IMMEDIATE_CHILD":results}



@app.route('/parent/<int:id>')
def immediate_parent_sibblings(id):
    cursor = mysql.connection.cursor()
    cursor.execute (
        """SELECT * FROM folder_list JOIN closure_table 
        ON folder_list.id = closure_table.descendent 
        WHERE ancestor = ( SELECT id FROM closure_table JOIN folder_list 
        ON folder_list.id = ancestor WHERE descendent = %s AND length = 2) 
        AND closure_table.length = 1;;""",(id,)
    )
    results = cursor.fetchall()
    cursor.close()
    return {"IMMEDIATE_PARENT":results}



# @app.route('/grand-parent/<int:id>')
# def grand_parent(id):
#     cursor = mysql.connection.cursor()
#     cursor.execute (
#         """SELECT * FROM closure_table JOIN 
#         folder_list ON folder_list.id = ancestor
#          WHERE descendent = %s AND length = 2;""",(id,)
#     )
#     results = cursor.fetchall()
#     cursor.close()
#     return {"GRAND_PARENT":results}
