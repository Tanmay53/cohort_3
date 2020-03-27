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
app.config['MYSQL_DB'] = 'school'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

def check_duplicate(email,val):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT COUNT(tid) FROM teachers WHERE email = %s AND aid = %s""",(email,val)
    )
    email_count = cursor.fetchone()['COUNT(tid)']
    cursor.close()
    return {"email_count": email_count}

def check_class(cname,val):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT COUNT(cid) FROM class WHERE cname = %s AND aid = %s """,(cname,val)
    )
    class_count = cursor.fetchone()['COUNT(cid)']
    cursor.close()
    return {"class_count": class_count}

def check_section(sname,val):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT COUNT(sid) FROM section WHERE sname = %s AND aid = %s """,(sname,val)
    )
    section_count = cursor.fetchone()['COUNT(sid)']
    cursor.close()
    return {"section_count": section_count}

@app.route('/classSection', methods = ['POST'])
def classSection():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    print(val)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM class WHERE aid = %s""",(val,)
    )
    classes = cursor.fetchall()
    cursor.execute(
        """SELECT * FROM section WHERE aid = %s""",(val,)
    )
    section = cursor.fetchall()
    cursor.close()

    class_items = []
    section_items = []
    for i in classes:
        class_items.append(i)
    
    for i in section:
        section_items.append(i)

    return jsonify({"class": class_items, "section" : section_items})

@app.route('/add', methods = ['POST'])
def addTeacher():
    name = request.json['name']
    email = request.json['email']
    classs = request.json['class']
    gender = request.json['gender']
    section = request.json['section']
    subject = request.json['subject']
    mobile = request.json['mobile']
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    # print("aid",val)
    check = check_duplicate(email,val)
    cursor = mysql.connection.cursor()
    try:
        if check['email_count'] >= 1:
            return {"message": "Email Already exist"}
        else:
            cursor.execute(
                """INSERT INTO teachers(name,email,cid,sid,gender,subject,mobile,aid)
                VALUES(%s, %s, %s, %s, %s, %s, %s, %s) """, (name,email,classs,section,gender,subject,mobile,val)
                )
            mysql.connection.commit()
            return {"message": "teacher added"}
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()

@app.route('/addClass', methods = ['POST'])
def classAdd():
    cname = request.json['cname']
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    check = check_class(cname,val)
    cursor = mysql.connection.cursor()
    try:
        if check['class_count'] >= 1:
            return {"message": "class already exist"}
        else:
            cursor.execute(
                """INSERT INTO class(cname,aid)
                VALUES(%s, %s) """, (cname,val)
                )
            mysql.connection.commit()
            return {"message": "new class added"}
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()


@app.route('/addSection', methods = ['POST'])
def sectionAdd():
    sname = request.json['sname']
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    check = check_section(sname,val)
    cursor = mysql.connection.cursor()
    try:
        if check['section_count'] >= 1:
            return {"message": "section already exist"}
        else:
            cursor.execute(
                """INSERT INTO section(sname,aid)
                VALUES(%s, %s) """, (sname,val)
                )
            mysql.connection.commit()
            return {"message": "new section added"}
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()

@app.route('/teacher',methods=['POST'])
def getall():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    cursor = mysql.connection.cursor()
    clickVal = request.json['clickVal']
    geteach = clickVal*10
    cursor.execute(
        """SELECT teachers.tid, name, subject,class.cname,section.sname from teachers join class on teachers.cid = class.cid join section on section.sid = teachers.sid WHERE teachers.aid = %s LIMIT %s,10""",(val,geteach)
    )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for i in results:
        items.append(i)
    return jsonify({"teacher":items})

@app.route('/classfilter',methods=['POST'])
def filterbyclass():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    cursor = mysql.connection.cursor()
    classs = request.json['class']
    clickVal = request.json['clickVal']
    geteach = clickVal*10
    if classs == "all":
        cursor.execute(
            """SELECT teachers.tid, name, subject,class.cname,section.sname from teachers join class on teachers.cid = class.cid join section on section.sid = teachers.sid WHERE teachers.aid = %s LIMIT %s,10""",(val,geteach)
        )
    else:
        cursor.execute(
            """SELECT teachers.tid, name, subject,class.cname,section.sname from teachers join class on teachers.cid = class.cid join section on section.sid = teachers.sid WHERE teachers.aid = %s AND class.cid = %s LIMIT %s,10""",(val,classs,geteach)
        )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for i in results:
        items.append(i)
    return jsonify({"teacher":items})

@app.route('/sectionfilter',methods=['POST'])
def filterbySection():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    cursor = mysql.connection.cursor()
    section = request.json['section']
    clickVal = request.json['clickVal']
    geteach = clickVal*10
    if section == "all":
        cursor.execute(
            """SELECT teachers.tid, name, subject,class.cname,section.sname from teachers join class on teachers.cid = class.cid join section on section.sid = teachers.sid WHERE teachers.aid = %s LIMIT %s,10""",(val,geteach)
        )
    else:
        cursor.execute(
            """SELECT teachers.tid, name, subject,class.cname,section.sname from teachers join class on teachers.cid = class.cid join section on section.sid = teachers.sid WHERE teachers.aid = %s AND section.sid = %s LIMIT %s,10""",(val,section,geteach)
        )
    results = cursor.fetchall()
    cursor.close()
    items = []
    for i in results:
        items.append(i)
    return jsonify({"teacher":items})
    

@app.route('/delete', methods = ['POST'])
def deleteTeacher():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    tid = request.json['tid']
    cursor = mysql.connection.cursor()
    try:
        cursor.execute(
            """DELETE FROM teachers WHERE tid = %s AND aid = %s""", (tid,val)
            )
        mysql.connection.commit()
        return {"message": "Teacher Deleted"}
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()

@app.route('/getDetail', methods = ['POST'])
def detail():
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    tid = request.json['tid']
    cursor = mysql.connection.cursor()
    try:
        cursor.execute(
            """SELECT teachers.tid, email, name, subject,gender,mobile,class.cid,section.sid from teachers join class on teachers.cid = class.cid join section on section.sid = teachers.sid WHERE teachers.tid = %s AND teachers.aid = %s""",(tid,val)
            )
        result = cursor.fetchone()
        return jsonify({"teacher": result})
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()

@app.route('/update', methods = ['POST'])
def updateTeacher():
    name = request.json['name']
    classs = request.json['class']
    gender = request.json['gender']
    section = request.json['section']
    subject = request.json['subject']
    mobile = request.json['mobile']
    tid = request.json['tid']
    auth_header = request.headers.get('Authorization')
    token_encoded = auth_header.split(' ')[1]
    decode_data = jwt.decode(token_encoded, 'masai', algorithms=['HS256'])
    val = str(decode_data['aid'])
    print("aid",val)
    cursor = mysql.connection.cursor()
    try:
        cursor.execute(
            """UPDATE teachers SET name = %s, cid = %s, sid = %s, gender = %s, subject = %s, mobile = %s, aid = %s WHERE tid = %s""",
             (name,classs,section,gender,subject,mobile,val,tid)
            )
        mysql.connection.commit()
        return {"message": "teacher data updated"}
    except Exception as e:
        print(e)
        return jsonify({"error":"check"})
    finally:
        cursor.close()