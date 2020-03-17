from flask import Flask
from flask import request, make_response, jsonify
from flask_mysqldb import MySQL
import hashlib
import os
import json
import jwt

app=Flask(__name__)


app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'grocery'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

@app.route("/")
def home():
    return("home page")


def generate_salt():
    salt = os.urandom(16)
    print(salt.encode('base-64'))
    return salt.encode('base-64')

def md5_hash(string):
    hash = hashlib.md5()
    hash.update(string.encode('utf-8'))
    print(hash.hexdigest())
    return hash.hexdigest()

@app.route("/signup",methods=['POST'])
def create():
    username = str(request.json["username"])
    email= str(request.json["email"])
    password=str(request.json["password"])
    isAdmin = bool(request.json["isAdmin"])
    cursor = mysql.connection.cursor()
    
    salt=generate_salt()
    hash_password=md5_hash(salt+" "+password)
    for _ in range(50):
        hash_password=md5_hash(hash_password)
    
    try:
        cursor.execute (
        """INSERT INTO users (username,email,password,salt,is_admin) VALUES (%s,%s,%s,%s,%s)""", (username,email,hash_password,salt,isAdmin)
    )
        mysql.connection.commit()
    except Exception as e:
        return jsonify({"error": True,  "message": str(e)})
    finally:
        cursor.close()
    return json.dumps({"error": False,  "message": "Registration successful"})




@app.route("/login",methods=['POST'])
def login():
    email=str(request.json["email"])
    password=str(request.json["password"])
    cursor = mysql.connection.cursor()
    print(type(email))
    try:
        cursor.execute (
            """SELECT email FROM users WHERE email=%s""", (email,)
        )        
        result=cursor.fetchone()
        if(result==None):
            return jsonify({"error":True,"message": "Invalid user email!! Please register:)"})

    except Exception as e:
        print(e)
        return jsonify({"error":True,"message": str(e)})
    
    try:
        cursor.execute("""SELECT salt FROM users WHERE email=%s""",(email,))
        salt=cursor.fetchone()
        print(salt)
        hash_password=md5_hash(salt["salt"]+" "+password)
        for _ in range(50):
            hash_password = md5_hash(hash_password)
        cursor.execute("""SELECT password FROM users WHERE email=%s""",(email,))
        password=cursor.fetchone()
        # cursor.close()
        print(password)
        if(hash_password != password["password"]):
            return jsonify({"error":True,"message": "incorrect password"})
        else:
            key="secret"
            encoded = jwt.encode({'email':email},key,algorithm='HS256')
            cursor.execute("""SELECT id,username from users WHERE email=%s""",(email,))
            user=cursor.fetchone()
            # return json.dumps({"error":False,"token":encoded,"user_id":user["id"],"username":user["username"],"email":email})
            return json.dumps({"error":False,"token":encoded})

    except Exception as e:
        cursor.close()
        print(e)
        return jsonify({"error":True,"message": str(e)})

@app.route("/user",methods=['GET'])
def auth():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    email = jwt.decode(token_encoded, 'secret', algorithms=['HS256'])
    print(email)
    try:
        cursor=mysql.connection.cursor()
        cursor.execute("""SELECT count(id) FROM users WHERE email=%s""",(str(email["email"]),))
        result = cursor.fetchone()
        print(result)
    except Exception as e:
        return jsonify({"error":True,"message": str(e)})
    
    if(result["count(id)"]==0):
        return jsonify({"error":True,"message": "unauthorised access restricted"})
    else:
        cursor.execute("""SELECT id,username,email,is_admin FROM users WHERE email=%s""",(str(email["email"]),))
        result = cursor.fetchone()
        cursor.close()
        return jsonify({"error":False,"data": result,"token":token_encoded})

@app.route("/show_all",methods=['GET'])
def show_all():
    cursor = mysql.connection.cursor()
    try:
        cursor.execute("""SELECT product_name,price,img,category_name FROM products JOIN categories WHERE category_id=categories.id""")
        results=cursor.fetchall()
        
    except Exception as e:
        return jsonify({"error":True,"message":str(e)})
    finally:
        cursor.close()
    return jsonify({"error":False,"data":results})
# filter by category
@app.route("/filter",methods=['POST'])
def filter_by_category():
    category_id = (request.json["category_id"])
    cursor = mysql.connection.cursor()
    try:
        cursor.execute(""" SELECT product_name,price,img,category_name FROM products JOIN categories WHERE categories.id=%s """,(category_id))
        results=cursor.fetchall()
        
    except Exception as e:
        return jsonify({"error":True,"message":str(e)})
    finally:
        cursor.close()
    return jsonify({"error":False,"data":results})

# show sorted data
@app.route("/show_sorted",methods=['POST'])
def show_sorted():
    cursor = mysql.connection.cursor()
    try:
        category_id = request.json["category_id"]
        cursor.execute(""" SELECT product_name,price,img,category_name FROM products JOIN categories WHERE categories.id=%s ORDER BY price""",(category_id))
        results=cursor.fetchall()
    except TypeError:
        try:
            cursor.execute(""" SELECT product_name,price,img,category_name FROM products JOIN categories WHERE category_id=categories.id ORDER BY price """)
            results=cursor.fetchall()
            
        except Exception as e:
            return jsonify({"error":True,"message":str(e)})
    finally:
        cursor.close()
    return jsonify({"error":False,"data":results})

# insert new product
@app.route("/insert",methods=['POST'])
def insert():
    category_id = (request.json["category_id"])
    product_name = request.json["product_name"]
    price = request.json["price"]
    img=request.json["img"]
    category_id= request.json["category_id"]
    cursor = mysql.connection.cursor()
    try:
        cursor.execute(""" INSERT INTO products (product_name,price,img,category_id) VALUES (%s,%s,%s,%s)""", (product_name,price,img,category_id))
        mysql.connection.commit()
        
    except Exception as e:
        return jsonify({"error":True,"message":str(e)})
    finally:
        cursor.close()
    return jsonify({"error":False,"message":"new product added successfully !!"})