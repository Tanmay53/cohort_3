from flask import Blueprint, request, jsonify
from db_helper import connect, insert, delete, select_one, select_all, delete_helper, edit_helper
import jwt


section = Blueprint('section', __name__)

@section.route('/add', methods=['POST'])
def add_section():
    try:
        section_name = request.json['section_name']
        section_uuid = request.json['section_uuid']

        query = "INSERT INTO `section` (`section_name`, `section_uuid`) values (%s, %s)"
        arguments = [section_name, section_uuid]
        return jsonify(insert(query, arguments))
    except Exception as ex:
        print(ex)
        return jsonify({'result': 'failure'})



@section.route('/fetch')
def fetch_section():
    try:
        query = "SELECT `section_name`, `section_uuid` FROM `section`;"
        return select_all(query, [])
    except Exception as ex:
        print(ex)
        return jsonify({'result': 'failure'})

@section.route('/delete', methods=['DELETE'])
def delete_section():
    try:
        section_uuid = request.json['section_uuid']
        query = "DELETE FROM `section` WHERE `section_uuid` = %s"
        return delete(query, [section_uuid])
    except Exception as ex:
        print(ex)
        return jsonify({'result': 'failure'})
