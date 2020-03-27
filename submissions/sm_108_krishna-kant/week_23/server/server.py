# imports
from flask import Flask,jsonify
from flask_mysqldb import MySQL
from blueprints.location import location
from blueprints.buses import buses


# Initialize Application
app = Flask(__name__)

# Registering Blueprint
app.register_blueprint(location,url_prefix = "/location")
app.register_blueprint(buses,url_prefix = "/buses")

# Database Configuration
app.config['MYSQL_HOST'] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "Krishna@7860"
app.config["MYSQL_DB"] = "busroute"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

mysql = MySQL(app)

# @desc : Home Route
# route: "/"
# @param : null
# return : JSON
@app.route("/")
def home():
    try:
        conn = mysql.connection.cursor()
        conn.execute("""SELECT DATABASE()""")
        row = conn.fetchone()
        return jsonify(row),200
    except Exception as e:
        return jsonify({"error" : str(e)})
    finally:
        conn.close()


if __name__ == "__main__" and __package__ is None:
    app.run(debug=True)