from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
from registration import auth
import jwt
app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Stupid@55655'
app.config['MYSQL_DB'] = 'trial'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.register_blueprint(auth, url_prefix="/auth")
mysql = MySQL(app)


# function to get logged in user
@app.route('/loggedPerson')
def loggedPerson(token):
    token = token.split(' ')[1]
    result = jwt.decode(token, "masai", algorithms=['HS256'])
    print(result["id"], "result")
    if(result):
        return result
    else:
        return False


# function to pass the user id value back to user
@app.route('/getId', methods=['POST'])
def getId():
    if request.method == 'POST':
        token = request.json["token"]
        result = jwt.decode(token, "masai", algorithms=['HS256'])
        Id = result["id"]
        print(Id)
        return jsonify(Id)


# function to make blogs
@app.route('/makeBlog/<int:user_id>/<int:category_id>', methods=['POST'])
def makeBlog(user_id,category_id):
    if request.method == 'POST':
        title = request.json["title"]
        blog = request.json["blog"]
        date = request.json["date"]
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO blog(id,category_id,user_id,blog,date,title) values(NULL,%s,2,%s,%s,%s)""", (category_id,  blog, date, title)
        )
        cursor.connection.commit()
        cursor.close()
        return({"message":"Created Successfully"})


# function to get the user details
@app.route('/userDetails')
def userDetails():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans, "c")
    if (ans):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM user where id=%s  """, (1,)
        )
        results = cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        if(results):
            items = []
            for item in results:
                items.append(item)
            return{"items": items}
        else:
            return{"message": "No Data Available"}
    else:
        print("false")
        return({"message": "Invalid"})


# function to get user specific blogs
@app.route('/userBlogs')
def userBlogs():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans, "c")
    if (ans):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM blog where user_id=%s  """, (1,)
        )
        results = cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        if(results):
            items = []
            for item in results:
                items.append(item)
            return{"items": items}
        else:
            return{"message": "No Data Available"}
    else:
        print("false")
        return({"message": "Invalid"})


# function to get all blogs
@app.route('/allBlogs')
def allBlogs():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans, "c")
    if (ans):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM blog  """
        )
        results = cursor.fetchall()
        print(results)
        cursor.connection.commit()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return{"items": items}
    else:
        print("false")
        return({"message": "Invalid"})


# function to get the blog comments
@app.route('/blogComments/<int:idx>/<int:user_id>/<int:category_id>')
def blogComments(idx, user_id, category_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans, "BlogComments")
    if (ans):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM comment where blog_id=%s and  user_id=%s and category_id=%s""", (
                idx, user_id, category_id)
        )
        results = cursor.fetchall()
        print(results)
        cursor.connection.commit()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return{"items": items}
    else:
        print("false")
        return({"message": "Invalid"})


# function to get blogs in comment page
@app.route('/userComments/<int:idx>/<int:user_id>/<int:category_id>')
def userComments(idx, user_id, category_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans, "comment")
    if (ans):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM blog where  id=%s and user_id=%s and category_id=%s """, (
                idx, user_id, category_id)
        )
        results = cursor.fetchall()
        print(results)
        cursor.connection.commit()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return{"items": items}
    else:
        print("false")
        return({"message": "done"})


# function to add comments
@app.route('/addComments/<int:idx>/<int:user_id>/<int:category_id>', methods=['POST'])
def addComments(idx, user_id, category_id):
    if request.method == 'POST':
        comment = request.json["comment"]
        print(comment)
        print(idx, user_id, category_id)
        cursor = mysql.connection.cursor()
        cursor.execute(
            """INSERT INTO comment(id,blog_id,user_id,category_id,comment_name,comment_person)values(NULL,%s,%s,%s,%s,"DEFAULT") """, (
                idx, user_id, category_id, comment)
        )
        results = cursor.fetchall()
        print(results)
        cursor.connection.commit()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return({"message": "done"})


@app.route('/home')
def read():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM category """
    )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for item in results:
        items.append(item)
    return{"items": items}


# function to delete the comment
@app.route('/DeleteBlog/<int:i>/<int:idx>/<int:user_id>/<int:category_id>')
def DeleteBlog(i, idx, user_id, category_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans, "DeleteBlog")
    if (ans):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM comment where id=%s and blog_id=%s and  user_id=%s and category_id=%s""", (
                i, idx, user_id, category_id)
        )
        results = cursor.fetchall()
        print(results)
        cursor.connection.commit()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return{"items": items}
    else:
        print("false")
        return({"message": "Invalid"})


# function to update the comment
@app.route('/updateComment/<int:i>/<int:idx>/<int:user_id>/<int:category_id>', methods=['POST'])
def updateComment(i, idx, user_id, category_id):
    if request.method == 'POST':
        # token=request.headers.get("Authorization")
        # ans=loggedPerson(token)
        # print(ans,"Update Comment")
        if (True):
            cursor = mysql.connection.cursor()
            value = request.json["changed"]
            cursor.execute(
                """UPDATE comment  set comment_name =%s where id=%s and blog_id=%s and  user_id=%s and category_id=%s""", (
                    value, i, idx, user_id, category_id)
            )
            results = cursor.fetchall()
            print(results)
            cursor.connection.commit()
            cursor.close()
            items = []
            for item in results:
                items.append(item)
            return{"items": items}
        else:
            print("false")
            return({"message": "Invalid"})


# function to create a blog
@app.route('/allCategories')
def allCategories():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT * FROM category"""
    )
    results = cursor.fetchall()
    cursor.connection.commit()
    cursor.close()
    items = []
    for item in results:
        items.append(item)
    print(items)
    return jsonify(items)
