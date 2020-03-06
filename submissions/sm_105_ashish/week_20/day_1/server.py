from flask import Flask, request
import json
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
def immediate_ancestors(id):
    cursor = mysql.connection.cursor()
    cursor.execute (
        """SELECT * FROM folder_list JOIN closure_table 
        ON folder_list.id = closure_table.descendent 
        WHERE ancestor = ( SELECT id FROM closure_table JOIN folder_list 
        ON folder_list.id = ancestor WHERE descendent = %s AND length = 2) 
        AND closure_table.length = 1;;""",(id,)
    )
    result2 = cursor.fetchall()
    if len(result2) > 0:
        cursor.close()
        return {"IMMEDIATE_ANCESTORS":result2}
    else:
        cursor = mysql.connection.cursor()
        cursor.execute(
        """SELECT * FROM folder_list JOIN 
        closure_table ON id = closure_table.ancestor
         WHERE descendent = %s AND closure_table.length = 1;""" ,(id,)
        )
        result1 = cursor.fetchall()
        cursor.close()
        return {"IMMEDIATE_ANCESTORS":result1}
    



@app.route('/insert' , methods=["POST"])
def insert_child():
    folder_name = request.json["folder_name"]
    parent_id = request.json["parent_id"]
    cursor = mysql.connection.cursor()
    cursor.execute (
        """INSERT INTO folder_list (folder_name) 
        VALUES (%s);""",(folder_name,)
    )
    cursor.execute (
        """SELECT id from folder_list WHERE folder_name
        = %s""",(folder_name,) 
    )
    res = cursor.fetchall()
    child_id = res[0]["id"]
    cursor.execute (
        """INSERT INTO closure_table 
        (ancestor,descendent,length) SELECT ancestor , %s ,
        length+1 FROM closure_table WHERE descendent = %s
        UNION ALL SELECT %s,%s, 0;""",(child_id,parent_id,child_id,child_id,)

    )
    mysql.connection.commit()
    cursor.close()
    return {"result":"folder added successfully"}


@app.route('/delete/<int:folder_id>')
def delete_self(folder_id):
    cursor = mysql.connection.cursor()
    cursor.execute (
        """DELETE FROM closure_table WHERE descendent
        IN (SELECT des_id FROM (SELECT descendent as des_id FROM 
        closure_table WHERE ancestor = %s) AS new_table);""",(folder_id,)
    )
    cursor.execute (
        """DELETE FROM folder_list WHERE id = %s""",(folder_id,)
    )
    res2 = cursor.fetchall()
    mysql.connection.commit()
    cursor.close()
    return {"result":res1,"res":res2}


