from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import jwt
app = Flask(__name__)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Stupid@55655'
app.config['MYSQL_DB'] = 'trial'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
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

@app.route('/getName')
def name():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    if(ans):
        cursor=mysql.connection.cursor()
        cursor.execute(
            """SELECT name from user where id=%s""",(ans["id"],)
        )
        result=cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        return jsonify(result)
    else:
        return({"message":"Invalid User"})    



# function to make blogs
@app.route('/makeBlog/<int:user_id>/<int:category_id>', methods=['POST'])
def makeBlog(user_id, category_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans["id"])
    if request.method == 'POST':
        title = request.json["title"]
        blog = request.json["blog"]
        date = request.json["date"]
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT NAME FROM user where id=%s""", (user_id,)
        )
        name = cursor.fetchall()
        cursor.execute(
            """INSERT INTO blogs(id,category_id,user_id,blog,date,title,name) values(NULL,%s,%s,%s,%s,%s,%s)""", (
                category_id, user_id, blog, date, title, name[0]["NAME"])
        )
        cursor.connection.commit()
        print("executed")
        cursor.close()
        return({"message": "Created Successfully"})


# update Blog
@app.route('/toBeUpdated/<int:idx>/<int:user_id>/<int:category_id>')
def toBeUpdated(idx, user_id, category_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(idx, user_id, category_id)
    print(ans, "blog update")
    if(int(ans["id"]) == int(user_id)):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM blogs where id=%s and user_id=%s and category_id=%s""", (
                idx, ans["id"], category_id)
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


# function to update blog
@app.route('/updatedBlog/<int:blog_id>/<int:user_id>/<int:category_id>', methods=['POST'])
def updateBlog(blog_id, user_id, category_id):
    if request.method == 'POST':
        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        print(ans, "upadte Blog")
        if (int(ans["id"])==int(user_id)):
            title = request.json["title"]
            blog = request.json["blog"]
            print("id matched")
            cursor = mysql.connection.cursor()
            cursor.execute(
                """UPDATE blogs set title=%s ,blog=%s where id=%s""", (
                    title, blog, blog_id)
            )
            cursor.connection.commit()
            cursor.close()
            print("executed")
            return({"message": "Updated"})
        else:
            return ({"message": "Incorrect Request"})


# function to get the user details
@app.route('/userDetails')
def userDetails():
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans, "user details")
    if (ans):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM user where id=%s  """, (ans["id"],)
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
            """SELECT * FROM blogs where user_id=%s  """, (ans["id"],)
        )
        results = cursor.fetchall()
        # print(results)
        cursor.connection.commit()
        cursor.close()
        if(results):
            print(results)
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
            """SELECT * FROM blogs  where user_id !=%s""",(ans["id"],)
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
@app.route('/blogComments/<int:idx>/<int:category_id>')
def blogComments(idx, category_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans, "BlogComments")
    if (ans):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM comment where blog_id=%s and category_id=%s""", (
                idx, category_id)
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
            """SELECT * FROM blogs where  id=%s and user_id=%s and category_id=%s """, (
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
        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        print(ans, "comment")
        if (ans):
            comment = request.json["comment"]
            print(comment)
            print(idx, user_id, category_id)
            cursor = mysql.connection.cursor()
            cursor.execute(
                """ SELECT NAME FROM user where id=%s""", (ans["id"],)
            )
            name = cursor.fetchall()
            # print(type(name))
            print(name[0]["NAME"])
            cursor.execute(
                """INSERT INTO comment(id,blog_id,user_id,category_id,comment_name,comment_person)values(NULL,%s,%s,%s,%s,%s) """, (
                    idx, ans["id"], category_id, comment, name[0]["NAME"])
            )
            results = cursor.fetchall()
            print(results)
            cursor.connection.commit()
            cursor.close()
            items = []
            for item in results:
                items.append(item)
            return({"message": "done"})


# function to see a specific blogs all the comments
@app.route('/Allcomments/<int:id>/<int:category_id>')
def Allcomments(id,category_id):
        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        print(ans, "All-comment")
        cursor=mysql.connection.cursor()
        cursor.execute(
            """SELECT * FROM comment where blog_id=%s  and category_id=%s""",(id,category_id)
        )
        results=cursor.fetchall()
        cursor.connection.commit()
        cursor.close()
        items = []
        for item in results:
            items.append(item)
        return{"items": items}

@app.route('/home')
def read():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM category """
    )
    results = cursor.fetchall()
    cursor.connection.commit()
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
    # made changes in if condition
    if (int(ans["id"]) == user_id):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM comment where id=%s and blog_id=%s and  user_id=%s and category_id=%s""", (
                i, idx, user_id, category_id)
        )
        # results = cursor.fetchall()
        # print(results)
        cursor.connection.commit()
        cursor.close()
        # items = []
        # for item in results:
        #     items.append(item)
        return{"message":"Deleted Successfully"}
    else:
        print("false")
        return({"message": "Invalid"})


# function to delete the comment
@app.route('/deleteBlog/<int:idx>/<int:category_id>')
def deleteTheBlog(idx, category_id):
    token = request.headers.get("Authorization")
    ans = loggedPerson(token)
    print(ans, "DeleteBlog")
    # made changes in if condition
    if (int(ans["id"])):
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM comment where blog_id=%s""", (
                idx,)
        )
        print("executed")
        cursor.connection.commit()
        cursor.close()
        cursor = mysql.connection.cursor()
        cursor.execute(
            """DELETE FROM blogs where id=%s and user_id=%s and category_id=%s""", (
                idx, ans["id"], category_id)
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
        token = request.headers.get("Authorization")
        ans = loggedPerson(token)
        print(ans, "Update Comment")
        print(ans["id"], user_id)
        if (int(ans["id"]) == int(user_id)):
            cursor = mysql.connection.cursor()
            value = request.json["changed"]
            print(value)
            cursor.execute(
                """UPDATE comment  set comment_name =%s where id=%s and blog_id=%s and  user_id=%s and category_id=%s""", (
                    value, i, idx, ans["id"], category_id)
            )
            results = cursor.fetchall()
            print(results, "came in")
            cursor.connection.commit()
            cursor.close()
            items = []
            for item in results:
                items.append(item)
            return{"message": "SUCCESSFULLY UPDATED"}
        else:
            return({"message": "NOT AUTHORIZED TO UPDATE"})


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

from registration import auth
app.register_blueprint(auth, url_prefix="/auth")