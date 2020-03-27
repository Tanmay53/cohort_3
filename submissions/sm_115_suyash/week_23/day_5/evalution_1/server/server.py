from flask import Flask
from flask import jsonify, request, make_response
from flask_mysqldb import MySQL
import hashlib
import base64
import json
import jwt 
import os

app = Flask(__name__)

app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "87654321"
app.config["MYSQL_DB"] = "twitter"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"
mysql = MySQL(app)

# Function for password
def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

# Function for generating salt
def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))

# Function for get salt form DB
def get_salt(email):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT email,salt FROM user WHERE email = %s """,(email,)
        )
        res = cursor.fetchone()
        return res["salt"] if res["email"] == email else False
    except Exception as e:
        print(str(e))
        return False
    finally:
        cursor.close()

# Function for check unique user
def check_email(email):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(""" SELECT COUNT(id) AS count FROM user where email = %s """, (email,))
        res = cursor.fetchone()
        if res["count"] == 0:
            return True
        else:
            return False
    except Exception as e:
        print(str(e))
    finally:
        cursor.close()

# Route for user signup
@app.route("/signup", methods=["POST"])
def signup():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    if(check_email(email)):
        salt = generate_salt()
        password = md5_hash(password + salt)
        try:
            cursor = mysql.connection.cursor()
            cursor.execute(
                """ INSERT INTO user(name,email,password,salt) VALUES (%s,%s,%s,%s) """, (name,email,password,salt)
            )
            cursor.connection.commit()
            return jsonify({"message":"Registration Successfully", "error":False}),200
        except Exception as err:
            return jsonify({"message":str(err), "error":True}),400
        finally:
            cursor.close()
    else:
        return jsonify({"message":email + " user allready exist ...", "error":True}),400

# Route for user login
@app.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    salt = get_salt(email)
    if salt:
        password = md5_hash(password + salt)
        try:
            cursor = mysql.connection.cursor()
            cursor.execute(
                """ SELECT * FROM user WHERE password = %s """, (password,)
            )
            res = cursor.fetchone()
            token = jwt.encode({"id":res["id"], "email":res["email"]}, "nS/Z9k", algorithm="HS256")
            return jsonify({"message": "Login successfully", "error": False, "token":token, "user":res}),200
        except Exception as err:
            return jsonify({"message": str(err), "error": True}),400
        finally:
            cursor.close()
    else:
        return jsonify({"message": "Wrong Password", "error": True}),400

# # Route for fetch all tweets
# @app.route("/show/all/tweets", methods=["GET"])
# def show_data():
#     data = []
#     try:
#         cursor = mysql.connection.cursor()
#         cursor.execute(
#             """ SELECT * FROM post """
#         )
#         data = cursor.fetchall()
#         return jsonify({"message": "Successfully","error":False, "data": data}),200
#     except Exception as err:
#         return jsonify({"message": str(err), "error":True}),400
#     finally:
#         cursor.close()

# Route for fetch user and user following tweets
@app.route("/show/tweets", methods=["POST"])
def show_following_data():
    userId = request.json["user_id"]
    page = request.args.get('page')
    limit = request.args.get('limit')
    starting = 0
    offset = 0
    if limit is None and page is None:
        starting = 0
        offset = 20
    elif page is not None and limit is not None:
        starting = (int(page) - 1) * int(limit)
        offset = int(limit)
    elif page is not None:
        starting = (int(page) - 1) * 20
    elif limit is not None:
        offset = int(limit)
    data = []
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT post.*, user.name as following FROM post JOIN user ON post.user_id = user.id WHERE user_id IN (SELECT following FROM follow WHERE user_id = %s) ORDER BY post.created_at DESC LIMIT %s,%s; """,(userId,starting,offset)
        )
        data = cursor.fetchall()
        return jsonify({"message": "Successfully","error":False, "data": data}),200
    except Exception as err:
        return jsonify({"message": str(err), "error":True}),400
    finally:
        cursor.close()

# Function for fetch all users
@app.route("/show/users", methods=["POST"])
def show_users():
    id = request.json["id"]
    data = []
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ SELECT * FROM user WHERE id != %s """,(id,)
        )
        data = cursor.fetchall()
        return jsonify({"message": "Successfully","error":False, "data": data}),200
    except Exception as err:
        return jsonify({"message": str(err), "error":True}),400
    finally:
        cursor.close()

# Route for following
@app.route("/user/following", methods=["POST"])
def user_following():
    userId = request.json["user_id"]
    follower_id = request.json["follower_id"]
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """ INSERT INTO follow(user_id, following) VALUES (%s,%s) """, (userId, follower_id)
        )
        cursor.connection.commit()
        return jsonify({"message": "Successfully","error":False}),200
    except Exception as err:
        return jsonify({"message": str(err), "error":True}),400
    finally:
        cursor.close()

# Route for create new post
@app.route("/create/post", methods=["POST"])
def create_post():
    user_id = request.json["user_id"]
    new_post = request.json["new_post"]
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(

            """ INSERT INTO post(user_id, posts) VALUES (%s,%s) """, (user_id, new_post)
        )
        cursor.connection.commit()
        return jsonify({"message":"Post created Successfully", "error":False}),200
    except Exception as err:
        return jsonify({"message": str(err), "error":True}),400
    finally:
        cursor.close()

if __name__ == "__main__":
    app.run(debug=True)


    # select * from post where user_id in (select following from follow where user_id = 1) order by created_at desc limit 20;
