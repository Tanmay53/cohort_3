# Python Imports
from flask import Flask,jsonify
from flask_mysqldb import MySQL
from blueprints.user import user
from blueprints.tweets import tweet

# Initialize Application
app = Flask(__name__)

# Register Blueprint
app.register_blueprint(user,url_prefix = "/auth")
app.register_blueprint(tweet,url_prefix = "/tweet")

# Database Configuration
app.config['MYSQL_HOST'] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "Krishna@7860"
app.config["MYSQL_DB"] = "twitter"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

mysql = MySQL(app)

# Base Route
@app.route("/")
def home():
    try:
        conn = mysql.connection.cursor()
        conn.execute("""SELECT DATABASE()""")
        rows = conn.fetchone()
        return jsonify({"Message":" Database Connected","rows":rows}),200
    except Exception as e:
        return jsonify({"error":str(e)})
    finally:
        conn.close()

if __name__ == "__main__" and __package__ is None:
    app.run(debug=True)