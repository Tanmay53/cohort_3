from flask import Flask, request
from flask_mysqldb import MySQL
import json
import jwt
import secrets
import hashlib

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'evalsql'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

def generate_salt():
    return secrets.token_urlsafe(16)

def generate_hash(password, salt):
    md5 = hashlib.md5()
    hash_string = password + salt
    for _ in range(50):
        md5.update(hash_string.encode('UTF-8'))
        hash_string = md5.hexdigest()
    return hash_string

def generate_token(data):
    return jwt.encode(data, 'python', algorithm='HS256').decode()

def decode_token(token):
    return jwt.decode(token, 'python', algorithms=['HS256'])

@app.route('/signup', methods = ['POST'])
def signUp():
    email = request.json['email']
    password = request.json['password']
    salt = generate_salt()
    password_hash = generate_hash(password, salt)
    cursor = mysql.connection.cursor()
    cursor.execute('''select email from admin''')
    userFound = False
    for user in cursor.fetchall():
        if user['email'] == email:
            userFound = True
            break
    if userFound:
        mysql.connection.commit()
        cursor.close()
        return json.dumps({'message':'User Already Exists'})
    else:
        cursor.execute('''insert into admin(email, salt, password) values(%s, %s, %s)''', (email, salt, password_hash))
        mysql.connection.commit()
        cursor.close()
        return json.dumps({'message': 'User Signed Up successfully'})

@app.route('/login', methods = ['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    cursor = mysql.connection.cursor()
    cursor.execute('''select id, email, password, salt from admin where email = %s''', (email, ))
    results = []
    for user in cursor.fetchall():
        results.append(user)
    if len(results) == 0:
        mysql.connection.commit()
        cursor.close()
        return json.dumps({'message': 'Email does not exists.', 'error': True})
    else:
        results = results[0]
        salt = results['salt']
        newHash = generate_hash(password, salt)
        if newHash == results['password']:
            return json.dumps({'token': generate_token({'id': results['id']}), 'error': False})
        else:
            return json.dumps({'message': 'Invalid Credentials', 'error': True})

@app.route('/employees', methods = ['GET', 'POST'])
def employeeDetails():
    if request.method == 'GET':
        sortBy = request.args.get('sortBy',default = None)
        department = request.args.get('department', default = None)
        gender = request.args.get('gender', default = None)
        page = request.args.get('page', default = 1)
        cursor = mysql.connection.cursor()
        userId = decode_token(request.headers['Authorization'].split()[1])['id']
        cursor.execute('''select * from admin where id = %s''', (userId,))
        user = cursor.fetchone()
        if user['id']:
            if sortBy == 'asc':
                if not department and gender:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id where gender = %s order by salary, epmloyee.id limit %s, %s''', (gender, (page-1)*20, 20))
                elif not gender and department:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id where dept_id = %s order by salary, employee.id limit %s, %s''', (department, (page-1)*20, 20))
                elif gender and department:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id where gender = %s and dept_id=%s order by salary, epmloyee.id limit %s, %s''', (gender, department, (page-1)*20, 20))
                else:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id order by salary, employee.id limit %s, %s''', ((page - 1)*20, 20))
            elif sortBy == 'desc':
                if not department and gender:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id where gender = %s order by salary desc, employee.id limit %s, %s''', (gender, (page-1)*20, 20))
                elif not gender and department:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id where dept_id = %s order by salary desc, employee.id limit %s, %s''', (department, (page-1)*20, 20))
                elif gender and department:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id where gender = %s and dept_id=%s order by salary desc, employee.id limit %s, %s''', (gender, department, (page-1)*20, 20))
                else:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id limit %s, %s''', ((page - 1)*20, 20))
            else:
                if not department and gender:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id where gender = %s limit %s, %s''', (gender, (page-1)*20, 20))
                elif not gender and department:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id where dept_id = %s limit %s, %s''', (department, (page-1)*20, 20))
                elif gender and department:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id where gender = %s and dept_id=%s limit %s, %s''', (gender, department, (page-1)*20, 20))
                else:
                    cursor.execute('''select employee.name as emp_name, gender, salary, departments.name as departmentName from employee join departments on employee.dept_id = departments.id limit %s, %s''', ((page - 1)*20, 20))
            results = []
            for a in cursor.fetchall():
                results.append(a)
            mysql.connection.commit()
            cursor.close()
            return json.dumps({'data': results, 'error': False})
        else:
            mysql.connection.commit()
            cursor.close()
            return json.dumps({'message': 'Invalid token', 'error': True})
    elif request.method == 'POST':
        userId = decode_token(request.headers['Authorization'].split()[1])['id']
        name = request.json['name']
        gender = request.json['gender']
        salary = int(request.json['salary'])
        deptId = int(request.json['dept_id'])
        cursor = mysql.connection.cursor()
        cursor.execute('''select * from admin where id = %s''', (userId,))
        result = cursor.fetchone()
        if result.id:
            cursor.execute('''insert into employee(name, gender, salary, dept_id) values(%s, %s, %s, %s)''', (name, gender, salary, deptId))
            mysql.connection.commit()
            cursor.close()
            return json.dumps({'error': False})
        else:
            mysql.connection.commit()
            cursor.close()
            return json.dumps({'message': 'Invalid token', 'error': True})
    
