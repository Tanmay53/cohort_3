from flask import Blueprint, request, jsonify
from db_helper import connect, insert, select_one, select_all, delete, delete_helper, edit_helper
import jwt


subject = Blueprint('subject', __name__)

@subject.route('/add', methods=['POST'])
def add_subject():
    try:
        subject_name = request.json['subject_name']
        subject_uuid = request.json['subject_uuid']

        query = "INSERT INTO `subject` (`subject_name`, `subject_uuid`) values (%s, %s)"
        arguments = [subject_name, subject_uuid]
        return jsonify(insert(query, arguments))
    except Exception as ex:
        print(ex)
        return jsonify({'result': 'failure'})


@subject.route('/fetch')
def fetch_subject():
    try:
        query = "SELECT `subject_name`, `subject_uuid` FROM `subject`"
        return select_all(query, [])
    except Exception as ex:
        print(ex)
        return jsonify({'result': 'failure'})


@subject.route('/delete', methods=['DELETE'])
def delete_subject():
    try:
        subject_uuid = request.json['subject_uuid']
        query = "DELETE FROM `subject` WHERE `subject_uuid` = %s"
        return delete(query, [subject_uuid])
    except Exception as ex:
        print(ex)
        return jsonify({'result': 'failure'})
 