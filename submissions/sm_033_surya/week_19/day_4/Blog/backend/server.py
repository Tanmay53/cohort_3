from flask import Flask
from flask import request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from Blueprint_auth import auth
import base64
import jwt
import hashlib
import os
import json


app = Flask(__name__)
app.register_blueprint(auth,url_prefix="/auth")
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '$uryA11472'
app.config['MYSQL_DB'] = 'Blog_db'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
CORS(app)
mysql = MySQL(app)



@app.route("/register", methods=["POST"])
def register():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    salt = generate_salt()
    new_password = md5_hash(password+str(salt))
    print(new_password)
    password_hash = new_password
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (name, email, salt, password_hash)
        VALUES (%s, %s, %s, %s )""", (name, email, salt, password_hash) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "user created"}


@app.route('/login',methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    cursor = mysql.connection.cursor()
    cursor.execute(
    """select * from users where email = %s""",(email,)
    )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for item in results:
        items.append(item)
    salt = items[0]["salt"]
    new_password = md5_hash(password+str(salt))
    password_hash = new_password
    if items[0]["password_hash"] == password_hash:
        encode_data = jwt.encode({"id": items[0]["id"]}, 'user', algorithm='HS256')
        return {"token":str(encode_data)}
    else:
        return {"token":"error"}
    
@app.route('/listing')
def getdata():
    # token = request.headers.get("Authorization")
    # token_encoded = token.split(' ')[1]
    # decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
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
        """select name from users where id= %s""",(item["user_id"],)
        )
        user = cursor.fetchall()
        cursor.close()
        print(user)
        item.update(user[0])
        items.append(item)
    return jsonify(items)

@app.route('/singlepost/<id>',methods=["GET","POST"])
def getsinglepost(id):
    if request.method == "GET":
        print(id)
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """select * from blog_table where id = %s """,(id,)
        )
        results = cursor.fetchall()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return jsonify({"data":items ,"userid":decode_data["id"]})
    else:
        blog_id = id,
        print("heloooo")
        title = request.json["title"]
        content = request.json["content"]
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """UPDATE blog_table SET title = %s,content = %s WHERE id = %s""",(title,content,blog_id)
        )
        mysql.connection.commit()
        cursor.close()
        return json.dumps({"message":"updated"})

@app.route('/singleuser')
def getsingleuser():
    print(id)
    token = request.headers.get("Authorization")
    token_encoded = token.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
    print(decode_data)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from users where id = %s """,(decode_data["id"],)
    )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for item in results:
        items.append(item)
    return jsonify(items)

@app.route('/comments/<id>',methods=["GET","POST"])
def getcomments(id):
    if request.method == "GET":
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """select * from comment_table where blog_id = %s""",(id,)
        )
        results = cursor.fetchall()
        cursor.close()
        items = []
        for item in results:
            cursor = mysql.connection.cursor()
            cursor.execute(
            """select name from users where id = %s""",(item["user_id"],)
            )
            name = cursor.fetchall()
            cursor.close()
            print(name[0])
            item.update(name[0])
            items.append(item)
        return jsonify(items)

@app.route('/deletecomment/<id>',methods=["GET","POST"])
def deletecomments(id):
    if request.method == "GET":
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """delete  from comment_table where id = %s""",(id,)
        )
        mysql.connection.commit()
        cursor.close()
        return json.dumps({"message":"success"})

@app.route('/deletepost/<id>',methods=["GET","POST"])
def deletepost(id):
    if request.method == "GET":
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """delete  from comment_table where blog_id = %s""",(id,)
        )
        mysql.connection.commit()
        cursor.close()
        cursor = mysql.connection.cursor()
        cursor.execute(
            """delete  from blog_table where id = %s""",(id,)
        )
        mysql.connection.commit()
        cursor.close()
        return json.dumps({"message":"success"})


@app.route ('/createpost',methods=["POST"])
def createpost():
    title = request.json["title"]
    content = request.json["content"]
    category = request.json["Category"]
    token = request.headers.get("Authorization")
    token_encoded = token.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
    date="2020-02-26"
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO blog_table (user_id,category_id,title,content,date) VALUES(%s,%s,%s,%s,%s)""",(decode_data["id"],2,title,content,date)
    )
    cursor.connection.commit()
    cursor.close()
    return json.dumps({"message":"successfully added"})

@app.route ('/addcomment/<id>',methods=["POST"])
def createcomment(id):
    blog_id=id
    content = request.json["content"]
    category_id = request.json["category_id"]
    token = request.headers.get("Authorization")
    token_encoded = token.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
    date="2020-02-26"
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO comment_table (user_id,category_id,blog_id,content,date) VALUES(%s,%s,%s,%s,%s)""",(decode_data["id"],category_id,blog_id,content,date)
    )
    cursor.connection.commit()
    cursor.close()
    return json.dumps({"message":"successfully added"})

@app.route('/singlecomment/<id>',methods=["GET","POST"])
def singlecomment(id):
    if request.method == "GET":
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """select * from comment_table where id = %s""",(id,)
        )
        results = cursor.fetchall()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return jsonify(items)
    else:
        content= request.json["content"]
        token = request.headers.get("Authorization")
        token_encoded = token.split(' ')[1]
        decode_data = jwt.decode(token_encoded, 'user', algorithms=['HS256'])
        cursor = mysql.connection.cursor()
        cursor.execute(
            """UPDATE comment_table SET content = %s WHERE id = %s""",(content,id)
        )
        cursor.connection.commit()
        cursor.close()
        return json.dumps({"message":"updted"})







def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    # print(hash.hexdigest())
    return hash.hexdigest()
def generate_salt():
    salt = os.urandom(16)
    print(salt)
    return base64.b64encode(salt)
    
