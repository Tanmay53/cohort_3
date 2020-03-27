from flask import Blueprint,request,jsonify
import server

location = Blueprint("location",__name__)


# @desc : Location Add
# route: "location/add"
# @param : name:str
# return : JSON
@location.route("/add",methods=["POST"])
def add_location():
    name = request.json["name"]
    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
            INSERT INTO locations (name) VALUES (%s)
        """, (name,))
        server.mysql.connection.commit()
        return jsonify({"error": False, "msg":"Location Added Successfully"})
    except Exception as e:
        return jsonify({"error":True, "msg" : str(e)})
    finally:
        conn.close()

# @desc : Location list
# route: "location/list"
# @param : None
# return : JSON
@location.route("/list",methods=["GET"])
def list_location():
    
    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
            SELECT * FROM locations
        """,)
        rows = conn.fetchall()
        return jsonify({"error": False, "data":rows})
    except Exception as e:
        return jsonify({"error":True, "msg" : str(e)})
    finally:
        conn.close()


def get_location_id(name):
    print(name)
    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
            SELECT id from locations where name = %s
        """,(name,))
        row = conn.fetchone()
        return row["id"]
    except Exception as e:
        print(str(e))
        return "Location Not Found"
    finally:
        conn.close
        

