from flask import Flask
from flask import request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
import base64
import jwt
import hashlib
import os
import json
app = Flask(__name__)
mysql = MySQL(app)



app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '$uryA11472'
app.config['MYSQL_DB'] = 'Blog_db'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
CORS(app)

# All blog data #########################

@app.route('/listing')
def getdata():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from blog_table"""
    )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for item in results:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """select name from users where id= %s""", (item["user_id"],)
        )
        user = cursor.fetchall()
        cursor.close()
        print(user)
        item.update(user[0])
        items.append(item)
    return jsonify(items)


# Sinle User request ###########

@app.route('/singleuser')
def getsingleuser():
    print(id)
    token = request.headers.get("Authorization")
    token_encoded = token.split(' ')[1]
    try:
        decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
        print(decode_data)
        cursor = mysql.connection.cursor()
        cursor.execute(
            """select * from users where id = %s """, (decode_data["id"],)
        )
        results = cursor.fetchall()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return jsonify(items)
    except:
        return json.dumps({"message": "some error appears"})


def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()


def generate_salt():
    salt = os.urandom(16)
    print(salt)
    return base64.b64encode(salt)

from Bluprint_auth import auth
from Bluprint_comment import comment
from Blueprint_post import post

app.register_blueprint(auth,url_prefix="/auth")
app.register_blueprint(comment,url_prefix="/comment")
app.register_blueprint(post,url_prefix="/post")
