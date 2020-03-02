from flask import Flask
from flask import request,jsonify , make_response
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = "localhost"
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Krishna@7860'
app.config['MYSQL_DB'] = 'files'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

#base Route
@app.route('/')
def home():
    try:
        conn = mysql.connection.cursor()
        conn.execute(""" SELECT * FROM ftp WHERE path IS NULL """)
        rows = conn.fetchall()
        return jsonify({"data":rows}),200
    except Exception as e:
        print(str(e))
    finally:
        conn.close()

@app.route('/folder' , methods=['POST'])
def folders():
    current_id = str(request.json['current_id'])
    prev_path = request.json['prev_path']

    try:
        conn = mysql.connection.cursor()
        conn.execute(""" 
            SELECT * FROM ftp WHERE path LIKE  %s
        """,(prev_path+current_id+"/",))
        rows = conn.fetchall()
        return jsonify({"data":rows}),200
    except Exception as e:
        print(str(e))
        return jsonify({"error":str(e)}),400
    finally:
        conn.close()


@app.route("/current", methods=['POST'])
def current():
    prev_path = request.json['path']

    try:
        conn = mysql.connection.cursor()
        conn.execute(""" 
            SELECT * FROM ftp WHERE path LIKE  %s
        """,(prev_path,))
        rows = conn.fetchall()
        return jsonify({"data":rows}),200
    except Exception as e:
        print(str(e))
        return jsonify({"error":str(e)}),400
    finally:
        conn.close()



@app.route('/create',methods=['POST'])
def create():
    # INSERT INTO ftp(name,path) VALUES("Somik","4/8/10/");
    name = request.json['name']
    path = request.json['path']
    try:
        conn = mysql.connection.cursor()
        conn.execute(
            """ INSERT INTO ftp(name,path) VALUES(%s,%s) """ , (name,path)
        )
        mysql.connection.commit()
        return jsonify({"msg" : "Folder Added Succesfully"})
    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}) , 500
    finally:
        conn.close()


app.run(debug=True)