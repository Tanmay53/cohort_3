# User Authentication Route
from flask import Blueprint,jsonify,request
import server
import random
import hashlib
import os
import base64
import datetime
import jwt 

# Init User
user = Blueprint('user',__name__)

# Generate Salt
def verify_user(email_id, hashed_pwd):
    try:
        conn = server.mysql.connection.cursor()
        conn.execute(
            """SELECT * FROM `users` WHERE `email` = %s AND `password` = %s""", (email_id, hashed_pwd,))
        row = conn.fetchone()
        return False if row == None else row
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()

def generate_salt():
    salt = os.urandom(16)
    return str(base64.b64encode(salt))

def check_email(email_id):
    try:
        conn = server.mysql.connection.cursor()
        conn.execute(
            """SELECT COUNT(id) AS `count` FROM `users` WHERE `email` = %s""", (email_id,))
        row = conn.fetchone()
        return True if row['count'] == 0 else False
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    return hash.hexdigest()

# function to get user after login

def get_user_by_email(email_id):
    try:
        conn = server.mysql.connection.cursor()
        conn.execute(
            """SELECT * FROM `users` WHERE `email` = %s""", (email_id,))
        row = conn.fetchone()
        print(row)
        return False if row == None else row
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()  

def get_user_by_id(id):
    try:
        conn = server.mysql.connection.cursor()
        conn.execute(
            """SELECT * FROM `users` WHERE `id` = %s""", (id,))
        row = conn.fetchone()
        print(row)
        row.pop('salt')
        row.pop('password')
        return False if row == None else row
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()

def get_salt(email_id):
    try:
        conn = server.mysql.connection.cursor()
        conn.execute(
            """SELECT `email`, `salt` FROM `users` WHERE `email` = %s""", (email_id,))
        row = conn.fetchone()
        return row['salt'] if row['email'] == email_id else False
    except Exception as e:
        print(str(e))
        return False
    finally:
        conn.close()

def save_profile(location,email):
    print(location)
    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""UPDATE users SET `profile_img` = %s WHERE `email` = %s """,
                        (location,email))
        server.mysql.connection.commit()
        user = get_user_by_email(email)
        return user
    except Exception as e:
        return str(e)
    finally:
        conn.close()

# signup route
@user.route("/register", methods=["POST"])
def user_signup():
    username = request.json["username"]
    email = request.json["email"]
    password = request.json["password"]

    if check_email(email):
        salt = generate_salt()
        hashed_pwd = md5_hash(password + salt)
        try:
            conn = server.mysql.connection.cursor()
            conn.execute("""INSERT  INTO `users`(username,email,password,salt) VALUES (%s, %s, %s, %s)""",
                         (username ,email, hashed_pwd,salt))
            server.mysql.connection.commit()
            return jsonify({"message": "User added successfully ...", "error": False}), 200
        except Exception as e:
            print(e)
            return jsonify({"message": str(e), "error": True}), 400
        finally:
            conn.close()
    else:
        return jsonify({"message": email + " already exist...", "error": True}), 200


@user.route("/login", methods=["POST"])
def user_login():
    email = request.json["email"]
    password = request.json["password"]
    salt = get_salt(email)
    if salt:
        hashed_pwd = md5_hash(password + salt)
        print(hashed_pwd)
        user = verify_user(email, hashed_pwd)
        if user:
            encode_data = jwt.encode(
                {"uid": user['id'], "email": user['email']}, "Secret", algorithm="HS256")
            return jsonify({"error": False, "message": "Login successful!", "token": str(encode_data,"utf-8")}), 200
        else:
            return jsonify({"error": True, "message": "Login failed! Username/Password Wrong"}), 200
    else:
        return jsonify({"error": True, "message": email + " not found ..."}), 200

#auth route

@user.route("/getuser", methods=["GET"])
def get_user():
    token = request.headers.get('Authorization')
    print(token)
    try:
        token = token.split(' ')[1]
        print(token)
        decode_data = jwt.decode(token,'Secret',algorithm=['HS256'])
        email = decode_data['email']
        user =  get_user_by_email(email)
        user.pop('password')
        user.pop('salt')
        return jsonify({"error":False, 'user': user})
    except:
        return jsonify({"error":True,"msg":"Invalid Token Login Again..!!"})


@user.route('/update/<email>',methods=['POST'])
def update_pic(email):
    f = request.files['picture']
    path1 = '../client/public/static/img/'
    path2 = 'static/img/'
    location = path1 + email.split("@")[0] +"/"+ f.filename
    location_database = path2 + email.split("@")[0] +"/"+ f.filename
    temp1 = path1 + email.split('@')[0]
    temp2 = path2 + email.split('@')[0]
    print(temp1)
    print(temp2)
    if not os.path.exists(temp1):
        os.makedirs(temp1)
        if not os.path.exists(temp2):
            os.makedirs(temp2)
            f.save(location)
            user = save_profile(location_database,email)
    else:
        f.save(location)
        user = save_profile(location_database,email)

    return {"user": user,"error" : False }

@user.route('/lists/<int:id>')
def list_user(id):
    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
        SELECT * from users where id NOT IN (SELECT follower from followers where following = %s) and id != %s
        """,(id,id))
        rows = conn.fetchall()
        return jsonify({"msg":"user list","count":len(rows),"data":rows})
    except Exception as e:
        return jsonify({"msg": str(e)})
    finally:
        conn.close()

@user.route('/follow/<int:following>/<int:follower>')
def follow_user(following,follower):
    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
            INSERT INTO followers (following,follower) VALUES(%s,%s)
        """,(following,follower))
        server.mysql.connection.commit()
        return jsonify({"msg":"User Followed Successfully"})
    except Exception as e:
        return jsonify({"msg":str(e)})
    finally:
        conn.close()