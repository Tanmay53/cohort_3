from flask import Flask
from flask import request, make_response, jsonify
from blueprint_auth import auth
from flask_mysqldb import MySQL
import json
import jwt

app =Flask(__name__)
app.register_blueprint(auth, url_prefix = "/auth")

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Kushal#025'
app.config['MYSQL_DB'] = 'employee'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

def check_duplicate(email):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT COUNT(eid) FROM employee WHERE email = %s """,(email,)
    )
    email_count = cursor.fetchone()['COUNT(eid)']
    cursor.close()
    return {"email_count": email_count}

@app.route('/add', methods = ['POST'])
def addemployee():
    name = request.json['name']
    email = request.json['email']
    department = request.json['department']
    gender = request.json['gender']
    salary = request.json['salary']
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    # print("aid",val)
    check = check_duplicate(email)
    cursor = mysql.connection.cursor()
    try:
        if check['email_count'] >= 1:
            return {"message": "Email Already exist"}
        else:
            cursor.execute(
                """INSERT INTO employee(name,email,department,gender,salary,aid)
                VALUES(%s, %s, %s, %s, %s, %s) """, (name,email,department,gender,salary,val)
                )
            mysql.connection.commit()
            return {"message": "employee added"}
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()

@app.route('/emp',methods=['POST'])
def getall():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    cursor = mysql.connection.cursor()
    clickVal = request.json['clickVal']
    getemp = clickVal*20
    cursor.execute(
        """SELECT * FROM employee WHERE aid = %s LIMIT %s,20""",(val,getemp)
    )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for i in results:
        items.append(i)
    return jsonify({"employee":items})

@app.route('/salarysort',methods=['POST'])
def sortbysalary():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    cursor = mysql.connection.cursor()
    sortby = request.json['type']
    if sortby == "asc":
        cursor.execute(
        """SELECT * FROM employee WHERE aid = %s ORDER BY SALARY ASC LIMIT 20""",(val,)
        )
    else:
        cursor.execute(
        """SELECT * FROM employee WHERE aid = %s ORDER BY SALARY DESC LIMIT 20""",(val,)
        )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for i in results:
        items.append(i)
    return jsonify({"employee":items})

@app.route('/genderfilter',methods=['POST'])
def filterbygender():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    cursor = mysql.connection.cursor()
    gender = request.json['gender']
    if gender == "male":
        cursor.execute(
        """SELECT * FROM employee WHERE aid = %s AND gender = %s LIMIT 20""",(val,gender)
        )
    elif gender == "female":
        cursor.execute(
        """SELECT * FROM employee WHERE aid = %s AND gender = %s LIMIT 20""",(val,gender)
        )
    elif gender == "other":
        cursor.execute(
        """SELECT * FROM employee WHERE aid = %s AND gender = %s LIMIT 20""",(val,gender)
        )
    else:
        cursor.execute(
        """SELECT * FROM employee WHERE aid = %s LIMIT 20""",(val,)
        )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for i in results:
        items.append(i)
    return jsonify({"employee":items})

@app.route('/departmentfilter',methods=['POST'])
def filterbydepartment():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    cursor = mysql.connection.cursor()
    department = request.json['department']
    if department == "it":
        cursor.execute(
        """SELECT * FROM employee WHERE aid = %s AND department = %s LIMIT 20""",(val,department)
        )
    elif department == "account":
        cursor.execute(
        """SELECT * FROM employee WHERE aid = %s AND department = %s LIMIT 20""",(val,department)
        )
    elif department == "sales":
        cursor.execute(
        """SELECT * FROM employee WHERE aid = %s AND department = %s LIMIT 20""",(val,department)
        )
    else:
        cursor.execute(
        """SELECT * FROM employee WHERE aid = %s LIMIT 20""",(val,)
        )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for i in results:
        items.append(i)
    return jsonify({"employee":items})
    