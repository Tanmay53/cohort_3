from flask import Flask, request
import os
import hashlib
import json
import base64
import jwt
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '12345'
app.config['MYSQL_DB'] = 'Employee_manage'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


# auth
def sha1_hash(string):
    hashing = hashlib.sha1()
    hashing.update(string.encode('utf-8'))
    return hashing.hexdigest()


def salt_generate():
    salt = os.urandom(16)
    return base64.b64encode(salt)


def password_generator(password, salt):
    i = 0
    pswd = ""
    while i < 30:
        ps = salt+password
        pswd = sha1_hash(ps)
        i += 1
    return pswd


def database_reader():
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT * FROM  Admins""")
    res = cursor.fetchall()
    cursor.close()
    data = []
    for i in res:
        data.append(i)
    return data


def get_user(email):
    data = database_reader()
    for line in data:
        if line["email"] == email:
            return line


def check_email(email):
    data = database_reader()
    for file in data:
        if file["email"] == email:
            return True
    return False


def user_find(email):
    data = database_reader()
    for file in data:
        if file["email"] == email:
            return {"name": file["name"], "id": file["id"]}
    return "not found"


def user_details_find(id):
    data = database_reader()
    for file in data:
        if file["id"] == id:
            return file
    return "not found"


def get_user_name(id):
    curs = mysql.connection.cursor()
    curs.execute("""SELECT name from User WHERE id=%s""", (id,))
    user = curs.fetchone()
    curs.close()
    return user

# employees


def employee_count():
    count_cur = mysql.connection.cursor()
    count_cur.execute("select count(id) as total from Employees")
    total = count_cur.fetchall()
    count_cur.close()
    count_emp = [t for t in total]
    return count_emp


def department_list():
    dep_cur = mysql.connection.cursor()
    dep_cur.execute("select * from Departments")
    total_dep = dep_cur.fetchall()
    dep_cur.close()
    dep_total = []
    for dep in total_dep:
        dep_total.append(dep)
    return dep_total


def get_employees(page):
    cur = mysql.connection.cursor()
    cur.execute(
        """
    select Employees.id, name, gender, Departments.department, salary from Employees left join Departments on Departments.id=Employees.department limit %s, 20
    """, ((page-1)*20,)
    )
    emp = cur.fetchall()
    all_emp = []
    cur.close()
    for e in emp:
        all_emp.append(e)
    return all_emp


def filtered_by(filter_by, page_num, filter_input):
    cur = mysql.connection.cursor()
    count_cur = mysql.connection.cursor()
    if filter_by.lower() == "department":
        cur.execute("""
        select * from (select Employees.id, name, gender, Departments.department, salary from Employees left join Departments on Departments.id=Employees.department where department= % s) as employees limit % s, 20
        """, (filter_input, (page_num-1)*20))

        # count filtered obj
        count_cur.execute("""
        select COUNT(id) as total from (select Employees.id, name, gender, Departments.department, salary from Employees left join Departments on Departments.id=Employees.department where department= % s) as employees
        """, (filter_input, ))
    else:
        cur.execute("""
                select * from (select Employees.id, name, gender, Departments.department, salary from Employees left join Departments on Departments.id=Employees.department where gender=% s) as employees limit % s, 20
            """, (filter_input, (page_num-1)*20))
        # count filter obj
        count_cur.execute("""
        select COUNT(id) as total from (select Employees.id, name, gender, Departments.department, salary from Employees left join Departments on Departments.id=Employees.department where gender= % s) as employees
        """, (filter_input, ))

    fil_data = cur.fetchall()
    total = count_cur.fetchall()
    cur.close()
    count_cur.close()
    fil_data = [[d for d in fil_data], [t for t in total]]
    return fil_data


def sort_by_salary(sort_type, data):
    if sort_type.lower() == "asc":
        data.sort(key=lambda x: x["salary"])
        return data
    elif sort_type.lower() == "desc":
        data.sort(key=lambda x: x['salary'], reverse=True)
        return data
    else:
        return data


@app.route("/add_emp", methods=["POST"])
def add_employee():
    name = request.json["name"]
    gender = request.json["gender"]
    department = request.json["department"]
    salary = request.json["salary"]
    cur = mysql.connection.cursor()
    cur.execute("""
                INSERT INTO Employees (name, gender, department, salary) VALUES(%s, %s, %s, %s)
                 """, (name, gender, department, salary,))
    mysql.connection.commit()
    cur.close()
    return json.dumps({"message": "Added"})


@app.route("/", methods=["POST"])
def employees():
    page_num = request.json["page_num"]
    sort_type = request.json["sort_type"]
    try:
        emp = get_employees(page_num)
        sorted_emp = sort_by_salary(sort_type, emp)
        print("empl", employee_count()[0]["total"])
        return json.dumps({"error": False, "employees": sorted_emp, "total_emp": employee_count()[0]["total"], "dp_list": department_list()})
    except Exception as e:
        return json.dumps({"error": True, "employees": None, "message": e})


@app.route("/filter", methods=["POST"])
def filtered():
    page_num = request.json["page_num"]
    filter_by = request.json["filter_by"]
    sort_type = request.json["sort_type"]
    filter_input = request.json["filter_input"]
    fil_data = filtered_by(filter_by, page_num, filter_input)
    emp_data = sort_by_salary(sort_type, fil_data[0])
    try:
        return json.dumps({"error": False, "employees": emp_data, "total_emp": fil_data[1][0]["total"]})
    except Exception as e:
        return json.dumps({"error": True, "employees": None, "message": e})


@app.route("/signup", methods=['POST'])
def sign_up():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    salt = str(salt_generate())
    password_hash = password_generator(str(password), salt)
    if check_email(email):
        return json.dumps({"error": "true", "message": "Email Already Exist"})
    else:
        cursor = mysql.connection.cursor()
        name = request.json["name"]
        email = request.json['email']
        password = request.json['password']
        cursor.execute("INSERT INTO Admins (name, email, salt, password_hash) VALUES (%s, %s, %s, %s)",
                       (name, email, salt, password_hash))
        mysql.connection.commit()
        cursor.close()
        return {"error": "false", "message": "Registration Successfull"}


@app.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    if check_email(email):
        user = get_user(email)
        password_hash = password_generator(str(password), user["salt"])
        if password_hash == user["password_hash"]:
            user = user_find(email)
            return json.dumps({"error": False, "message": "login Successfull", "user": user})
        else:
            return json.dumps({"error": True, "message": "Incorrect Password"})
    else:
        return json.dumps({"error": True, "message": "Admin is not Registered yet"})
