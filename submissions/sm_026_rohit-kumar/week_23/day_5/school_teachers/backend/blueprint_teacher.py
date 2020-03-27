from flask import Blueprint, request, jsonify
from db_helper import connect, insert, select_one, select_all, delete_helper, edit_helper
import jwt


teacher = Blueprint('teacher', __name__)

@teacher.route('/add', methods=['POST'])
def add_teacher():
    try:
        class_uuid      = request.json['class_uuid']  
        section_uuid    = request.json['section_uuid']
        subject_uuid    = request.json['subject_uuid'] 
        teacher_name    = request.json['teacher_name']
        teacher_uuid    = request.json['teacher_uuid']

        query = """
                INSERT INTO teachers (`class_uuid`, `section_uuid`, 
                    `subject_uuid`, `teacher_name`, `teacher_uuid`)
                VALUES (%s, %s, %s, %s, %s)
                """
        arguments = [class_uuid, section_uuid, subject_uuid, teacher_name, teacher_uuid]
        return jsonify(insert(query, arguments))
    except Exception as ex:
        print(ex)
        return jsonify({'result': 'failure'})


@teacher.route('/fetch')
def fetch_teacher():
    try:
        query = """
                SELECT t.teacher_name, c.class_name, s.section_name, sub.subject_name 
                FROM teachers t LEFT JOIN classes c on t.class_uuid = c.class_uuid 
                LEFT JOIN section s ON t.section_uuid = s.section_uuid 
                LEFT JOIN subject sub on t.subject_uuid = sub.subject_uuid;
                """
        return jsonify(select_all(query, []))
    except Exception as ex:
        return jsonify({'result': 'failure'})