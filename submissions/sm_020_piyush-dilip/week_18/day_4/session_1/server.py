from flask import Flask
from flask_mysqldb import MySQL
import jwt
import json
import os
import hashlib
from flask import request, make_response, jsonify
app = Flask(__name__)
mysql = MySQL(app)
app.config['MYSQL_USER'] = 'charlie'
app.config['MYSQL_PASSWORD'] = 'charlie'
app.config['MYSQL_DB'] = 'blogApplication'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

def generateSalt():
    salt = os.urandom(16)
    return salt.encode('base-64')

def multiHashing(password, salt):
    string = password + salt
    for i in range(100):
        string = md5_hash(string)
    return string

def decodeToken(token):
    decode = jwt.decode(token, 'charlie', algorithms=['HS256'])
    id = decode['id']
    return id

def getUser(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT * FROM users WHERE id = %s """, (id,)
    )
    user = cursor.fetchall()
    cursor.close()

    return user

@app.route('/')
def home():
    return "HOme"

@app.route('/user/create', methods=['POST'])
def create():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    salt = generateSalt()
    passwordHash = multiHashing(password, salt)

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (username, email, salt, passwordHash)
        VALUES (%s, %s, %s, %s) """, (username, email, salt, passwordHash) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "user created" }

@app.route('/user/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    cursor = mysql.connection.cursor()

    cursor.execute(
        """ SELECT * FROM users WHERE email = %s """, (email,)
    )

    results = cursor.fetchall()
    cursor.close()

    items = []

    for item in results:
        items.append(item)

    passwordHash = multiHashing(password, items[0]['salt'])

    if passwordHash == items[0]['passwordHash'] :
        token = jwt.encode({ "id" : items[0]['id']}, 'charlie', algorithm='HS256')
        return { 'error' : False, 'token' : token}
    return { 'error' : True, 'message' : "Invalid credentials" }


@app.route('/user/details')
def details():
    authHeader = request.headers.get('Authorization')
    tokenEncoded = authHeader.split(' ')[1]
    decode = jwt.decode(tokenEncoded, 'charlie', algorithms=['HS256'])
    id = decode['id']

    cursor = mysql.connection.cursor()

    cursor.execute(
        """ SELECT username FROM users WHERE id = %s """, (id,)
    )

    results = cursor.fetchall()
    cursor.close()

    items = []

    for item in results:
        items.append(item)

    return {"user" : items}

@app.route('/user/blog/create', methods=['POST'])
def createBlog():
    authHeader = request.json['Authorization']
    tokenEncoded = authHeader.split(' ')[1]
    userId = int(decodeToken(tokenEncoded))
    user = getUser(userId)
    username = user[0]['username']
    print(username)
    title = request.json['title']
    blog = request.json['blog']
    category = request.json['category']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO blogs2 (userId, title, blog, category, username)
        VALUES (%s, %s, %s, %s, %s) """, (userId, title, blog, category, username) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "blog created"}

@app.route('/user/blog/update/<int:id>', methods=['PUT'])
def updateBlog(id):
    title = request.json['title']
    blog = request.json['blog']
    category = request.json['category']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """UPDATE blogs2 SET title = %s, blog = %s, category = %s  WHERE id = %s""", (title, blog, category, id,) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "blog updated"}

@app.route('/user/blog/delete/<int:id>', methods=['DELETE'])
def deleteBlog(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """DELETE FROM blogs2 WHERE id = %s""", (id,) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "blog deleted"}


@app.route('/blog/read')
def read():
    cursor = mysql.connection.cursor()

    cursor.execute(
        """ SELECT id, title, category, username, blog FROM blogs2 """
    )

    results = cursor.fetchall()
    cursor.close()

    items = []

    for item in results:
        items.append(item)
    
    return { "blogs": items }

@app.route('/blog/read/<int:id>')
def readBlog(id):
    cursor = mysql.connection.cursor()  

    cursor.execute(
        """ SELECT * FROM blogs2 WHERE id = %s """, (id,)
    )

    results = cursor.fetchall()
    cursor.close()

    items = []

    for item in results:
        items.append(item)
    
    return { "blog" : items }

@app.route('/blog/read')
def userBlogs():
    authHeader = request.json['Authorization']
    tokenEncoded = authHeader.split(' ')[1]
    token = decodeToken(tokenEncoded)
    user = getUser(token)
    userId = user[0]['id']
    cursor = mysql.connection.cursor()  

    cursor.execute(
        """ SELECT * FROM blogs2 WHERE userId = %s """, (userId,)
    )

    results = cursor.fetchall()
    cursor.close()

    items = []

    for item in results:
        items.append(item)
    
    return { "blogs" : items }


@app.route('/user/blog/comment/create', methods=['POST'])
def createComment():
    authHeader = request.json['Authorization']
    tokenEncoded = authHeader.split(' ')[1]
    token = decodeToken(tokenEncoded)
    user = getUser(token)
    username = user[0]['username']
    blogId = request.json['blogId']
    comment = request.json['comment']

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO comments2 (blogId, comment, username)
        VALUES (%s, %s, %s) """, (blogId, comment, username ) 
        )
    mysql.connection.commit()
    cursor.close()
    return {"message": "comment created"}

@app.route('/user/blog/comment/update/<int:id>', methods=['PUT'])
def updateComment(id):
    comment = request.json['comment']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ UPDATE comments2 SET comment = %s WHERE id = %s """, (comment, id)
    )
    mysql.connection.commit()
    cursor.close()
    return { "message" : "Comment updated"}


@app.route('/user/blog/comment/delete/<int:id>', methods=['DELETE'])
def deleteComment(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ DELETE FROM comments2 WHERE id = %s """, (id,)
    )
    mysql.connection.commit()
    cursor.close()

    return { "message" : "Comment deleted" }

@app.route('/blog/comment/read/<int:id>')
def readComment(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT * FROM comments2 WHERE blogId = %s """, (id,)
    )

    results = cursor.fetchall()
    cursor.close()

    items = []

    for item in results:
        items.append(item)

    return {"comments" : items }

@app.route('/user/blog/comment/read/<int:id>')
def sendComment(id):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT * FROM comments2 WHERE id = %s """, (id,)
    )

    results = cursor.fetchall()
    cursor.close()

    items = []

    for item in results:
        items.append(item)

    return {"comments" : items }
