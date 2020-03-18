from flask import Flask, requst
import json
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


def get_employees(page):
    cur = mysql.connection.cursor()
    cur.execute(
        """ 
    select Employees.id, name, gender, Departments.department, salary from Employees left join Departments on Departments.id=Employees.department limit %s, 20
    """, (page-1,)
    )
    emp = cur.fetchall()
    all_emp = []
    for e in emp:
        all_emp.append(e)


@app.route("/", methods=["POST"])
def employees():
    page_num = requst.json["page_num"]
