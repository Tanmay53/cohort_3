from flask import Flask
from flask_cors import CORS
import hashlib
import os
import base64
from flask import request
import json
from flask_mysqldb import MySQL
import jwt

app = Flask(__name__)
CORS(app)


app.config["MYSQL_HOST"] = "localhost"
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '999Plus1@'
app.config['MYSQL_DB'] = 'teachers_db'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


def read_data():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """SELECT * FROM users """
    )
    res = cursor.fetchall()
    cursor.close()
    item = []
    for i in res:
        item.append(i)
    return item


def CreateUser(name, email, salt, hashed_pass):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO users (username,email,salt,password) values (%s,%s,%s,%s)""", (
            name, email, salt, hashed_pass)
    )
    mysql.connection.commit()
    cursor.close()
    return {"message": "User Registered"}


def generate_salt():
    salt = os.urandom(16)
    return base64.b64encode(salt)


def md5_hash(string, salt):
    hash = hashlib.md5()
    new_str = salt+string
    hash.update(new_str.encode('utf-8'))
    return hash.hexdigest()


def write_data(name, email, password):
    if len(email) < 5 or len(name) < 2:
        return "Invalid Credentials"
    salt = str(generate_salt())
    cur_data = read_data()
    for items in cur_data:
        if items["email"] == email:
            return "Email Already Exists"

    hashed_pass = md5_hash(password, salt)
    CreateUser(name, email, salt, hashed_pass)
    return "Registration Succesfull"


def check_auth(email, password):
    cursor = mysql.connection.cursor()
    cursor.execute("""select * from users where email=%s""", (email,))
    res = cursor.fetchall()
    cursor.close()
    if len(res) == 0:
        return {"status": "Incorrect Email Address"}
    else:
        user_salt = res[0]["salt"]
        user_pass = res[0]["password"]
    hex_pass = md5_hash(password, user_salt)
    if hex_pass == user_pass:
        token = jwt.encode(
            {"id": res[0]["id"], "email": res[0]["email"]}, "secret", algorithm="HS256")
        return {"status": "login succesfull", "token": str(token), "u_id": res[0]["id"]}
    else:
        return {"status": "Incorrect Password"}


@app.route("/")
def home():
    cursor = mysql.connection.cursor()
    cursor.execute("""select * from users""")
    res = cursor.fetchall()
    cursor.close()
    return json.dumps(res)


@app.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    res = check_auth(email, password)
    return json.dumps(res)


@app.route("/signup", methods=["POST"])
def register():
    name = request.json["username"]
    password = request.json["password"]
    email = request.json["email"]
    my_data = write_data(name, email, password)
    return json.dumps(my_data)


def find_user(u_id):
    all_users = read_data()
    for i in all_users:
        if u_id == i["id"]:
            return i


@app.route("/details", methods=["POST"])
def showDetails():
    auth_header = request.headers.get('Authorization')
    print("token is", auth_header)
    token_encoded = auth_header.split(' ')[1]
    decode_data = dict(jwt.decode(
        token_encoded, 'secret', algorithms=['HS256']))
    user_id = decode_data["id"]
    user = find_user(str(user_id))
    return json.dumps(user)


@app.route("/add_section", methods=["POST"])
def add_section():
    section_name = request.json["section"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """insert into sections (section) values (%s) """, (section_name,))
    mysql.connection.commit()
    cursor.close()
    return "section added"


@app.route("/add_class", methods=["POST"])
def add_class():
    class_name = request.json["class"]
    cursor = mysql.connection.cursor()
    cursor.execute(
        """insert into class (class) values (%s)""", (class_name,))
    mysql.connection.commit()
    cursor.close()
    return "A new class has been added"


@app.route("/new_teacher", methods=["POST"])
def add_teacher():
    name = request.json["name"]
    subject = request.json["subject"]
    class_id = int(request.json["class_id"])
    section_id = int(request.json["section_id"])
    cursor = mysql.connection.cursor()
    cursor.execute(
        """insert into teachers (name,subject,class_id,section_id) values (%s,%s,%s,%s)""", (name, subject, class_id, section_id))
    mysql.connection.commit()
    cursor.close()
    return "teacher added succesfully"


@app.route("/all_teachers")
def all_tecahers():
    cursor = mysql.connection.cursor()
    cursor.execute("""select teachers.id ,name,subject,created_at,class,section from teachers join class on teachers.class_id = class.id
    join sections on sections.id = teachers.section_id order by name asc limit 10 """)
    res = cursor.fetchall()
    data = list()
    for i in res:
        data.append(i)

    cursor.close()
    return json.dumps(data, default=str)


@app.route("/edit_teacher")
def edit_teacher():
    name = request.json["name"]
    subject = request.json["subject"]
    class_id = int(request.json["class_id"])
    section_id = int(request.json["section_id"])
    cursor = mysql.connection.cursor()
    cursor.execute(
        """insert into teachers (name,subject,class_id,section_id) values (%s,%s,%s,%s)""", (name, subject, class_id, section_id))
    mysql.connection.commit()
    cursor.close()
    return "teacher added succesfully"


@app.route("/set_order", methods=["POST"])
def setOrder():
    o_type = request.json["order"]
    cursor = mysql.connection.cursor()
    cursor.execute("""select teachers.id ,name,subject,created_at,class,section from teachers join class on teachers.class_id = class.id
    join sections on sections.id = teachers.section_id order by class % s limit 10 """, (o_type,))
    res = cursor.fetchall()
    cursor.close()
    data = []
    for i in res:
        data.append(i)
    return json.dumps(data, default=str)


@app.route("/set_filter", methods=["post"])
def filter_table():
    f_type = request.json["type"]
    cursor = mysql.connection.cursor()
    cursor.execute("""select teachers.id ,%s from teachers join class on teachers.class_id = class.id
    join sections on sections.id = teachers.section_id limit 10 """, (f_type,))
    res = cursor.fetchall()
    cursor.close()
    data = []
    for i in res:
        data.append(i)
    return json.dumps(data, default=str)


@app.route("/get_class_section")
def class_section():
    cursor = mysql.connection.cursor()
    cursor.execute("""select * from sections """)
    res1 = cursor.fetchall()
    cursor.execute("""select * from class""")
    res = cursor.fetchall()
    cursor.close()
    data1 = []
    data2 = []
    for i in res1:
        data1.append(i)
    for j in res:
        data2.append(j)
    return json.dumps({"section": data1, "class": data2})


@app.route("/delete_user", methods=["POST"])
def delete_user():
    t_id = request.json["t_id"]
    cursor = mysql.connection.cursor()
    cursor.execute("""delete from teachers where id = %s """, (t_id,))
    mysql.connection.commit()
    cursor.close()
    return "user deleted"


if __name__ == "__main__":
    app.run(debug=True)
