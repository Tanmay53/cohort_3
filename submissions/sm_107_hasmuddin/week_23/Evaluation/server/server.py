
# importing app and mysql function from App.app pkgs.
from App.app import *
# importing auth from blueprints pkgs
from bluerprints.blueprint_auth import *
from flask import request
import json

app.register_blueprint(auth, url_prefix="/auth")


def all_classes():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Classes")
    classes = [c for c in cur.fetchall()]
    cur.close()
    return classes


def all_sections():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Sections")
    sections = [s for s in cur.fetchall()]
    cur.close()
    return sections


# routes for add new teacher along wiht name, class, section, subject
@app.route("/add_teacher", methods=["POST"])
def add_teachers():
    try:
        name = request.json["name"]
        class_num = request.json["class_num"]
        section = request.json["section"]
        subject = request.json["subject"]
        cur = mysql.connection.cursor()
        cur.execute("""INSERT INTO Teachers
        (name, class, section, subject) 
        VALUES(%s, %s, %s, %s)""", (name, class_num, section, subject))
        mysql.connection.commit()
        cur.close()
        return json.dumps({"message": "Teacher Added"})
    except:
        return json.dumps({"message": "Something went wrong"})

# route for fetching teachers records.
@app.route("/teachers_record", methods=["POST"])
def teacher_access():
    cur = mysql.connection.cursor()
    curr_page = request.json["curr_page"]
    cur.execute(""" 
        select teacher.id, name, subject, teacher.class, Sections.section FROM (select Teachers.id, name, section, subject, Classes.class from Teachers left join Classes on Teachers.class=Classes.id) as teacher left join Sections on Sections.id=teacher.section limit %s, 10;
        """, ((curr_page-1)*10,))
    teachers_data = cur.fetchall()
    cur.close()
    teachers = [x for x in teachers_data]
    if len(teachers) > 0:
        return json.dumps({"data": teachers,
                           "error": False,
                           "classes": all_classes(),
                           "sections": all_sections()
                           })
    else:
        return json.dumps({"data": [], "error": True, "message": "No Record found"})


# filter by class
@app.route("/teachers_by_class", methods=["POST"])
def class_filter():
    cur = mysql.connection.cursor()
    class_num = request.json["class_num"]
    cur.execute(""" 
    select teacher.id, name, subject, teacher.class, Sections.section FROM (select Teachers.id, name, section, subject, Classes.class from Teachers left join Classes on Teachers.class=Classes.id) as teacher left join Sections on Sections.id=teacher.section where teacher.class=%s;
    """, (class_num, ))
    teacher_classes = [x for x in cur.fetchall()]
    cur.close()
    return json.dumps({"data": teacher_classes,
                       "classes": all_classes(),
                       "sections": all_sections()})


# filter by section
@app.route("/teachers_by_section",  methods=["POST"])
def section_filter():
    cur = mysql.connection.cursor()
    # here we are getting section id from client.
    section = request.json["section"]
    cur.execute(""" 
    select teacher.id, name, subject, teacher.class, Sections.section FROM (select Teachers.id, name, section, subject, Classes.class from Teachers left join Classes on Teachers.class=Classes.id) as teacher left join Sections on Sections.id=teacher.section where teacher.section=%s;
    """, (section, ))
    teacher_section = [x for x in cur.fetchall()]
    cur.close()
    return json.dumps({"data": teacher_section,
                       "classes": all_classes(),
                       "sections": all_sections()})


app.run(debug=True)
