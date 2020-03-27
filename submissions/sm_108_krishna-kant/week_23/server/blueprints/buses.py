from flask import Blueprint,request,jsonify,json
from location import get_location_id
import server

buses = Blueprint("buses",__name__)

# @desc : Add Buses
# route: "buses/add"
# @param : pid:str, bus_type:str, source:str, destination:str, start_time:str 
# return : JSON
@buses.route("/add",methods=["POST"])
def add_location():
    
    pid = request.json["pid"]
    bus_type = request.json["bus_type"]
    source = request.json["source"]
    destination = request.json["destination"]
    start_time = request.json["start_time"]

    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
            INSERT INTO buses (bus_pid, type, source, destination, start_time) VALUES (%s, %s, %s, %s, %s)
        """, (pid, bus_type, source, destination, start_time))
        server.mysql.connection.commit()
        return jsonify({"error": False, "msg":"Bus Added Successfully"})

    except Exception as e:
        return jsonify({"error":True, "msg" : str(e)})

    finally:
        conn.close()

# @desc : List Buses
# route: "buses/list"
# @args : filterBy:str , value:str , page:str , limit:str
# return : JSON
@buses.route("/list", methods=["GET"])
def list_trips():

    start = 0
    end = 0

    filterBy = request.args.get('filterBy')
    value = request.args.get("value")
    page = request.args.get('page')
    limit = request.args.get("limit")


    if limit is None and page is None:
        start = 0
        end = 10
    if limit is not None:
        end = int(limit)

    if page is not None and limit is not None:
        start = (int(page) - 1 ) * int(limit)
    
    try:
        conn = server.mysql.connection.cursor()
        print(start,end)
        if filterBy == "destination":
            print(start,limit)
            conn.execute("""
                select buses.id, dl.name as destination, sl.name as 'source' ,
                 buses.bus_pid , buses.type , buses.start_time from buses left join locations 
                 as dl on buses.destination=dl.id left join locations as sl on buses.source=sl.id 
                 where dl.name = %s limit %s,%s;
            """,(value, int(start), end))

        elif filterBy == "source":
            conn.execute("""
                select buses.id, dl.name as destination, sl.name as 'source' , buses.bus_pid , 
                buses.type , buses.start_time from buses left join locations as dl 
                on buses.destination=dl.id left join locations as sl on buses.source=sl.id
                 where sl.name = %s limit %s,%s;
            """,(value, int(start), end))

        else:
            conn.execute("""
                select buses.id, dl.name as destination, sl.name as 'source' , buses.bus_pid , 
                buses.type , buses.start_time from buses left join locations as dl on 
                buses.destination=dl.id left join locations as sl on buses.source=sl.id limit %s,%s;
            """,(int(start), end))
        rows = conn.fetchall()

        for row in rows :
            row["start_time"] = str(row["start_time"])

        return jsonify({"error":False,"data":rows}),200

    except Exception as e:
        return jsonify({"error":True, "msg":str(e)}),400

    finally:
        conn.close()

# @desc : Edit Bus
# route: "buses/edit/<id>"
# @params : destination:str , source:str , start_time:str
# return : JSON
@buses.route("/edit/<int:id>" , methods=["PUT"])
def edit_bus(id):

    destination = request.json['destination']
    source = request.json['source']
    start_time = request.json['start_time']

    destination = get_location_id(destination)
    source = get_location_id(source)
    print(destination,source)

    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
            UPDATE buses SET destination = %s, source = %s, start_time = %s where id = %s
        """,(destination, source, start_time,id))
        server.mysql.connection.commit()
        return jsonify({"error" : False, "msg" : "Data Edited Successfully"})
    except Exception as e:
        return jsonify({"error" : True, "msg" : str(e)})
    finally:
        conn.close()

# @desc : Delete Bus
# route: "buses/delete/<id>"
# @params: None
# return : JSON
@buses.route("/delete/<int:id>", methods=["DELETE"])
def delete_bus(id):

    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
            DELETE FROM buses WHERE id = %s
        """,(id,))
        server.mysql.connection.commit()
        return jsonify({"error" : False, "msg" : "Data Deleted Successfully"})

    except Exception as e:
        return jsonify({"error" : True , "msg" : str(e) })
    
    finally:
        conn.close()
