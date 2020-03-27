from flask import Blueprint, request, jsonify
from db_helper import connect, insert, select_one, delete, select_all, delete_helper, edit_helper
import jwt


classes = Blueprint('classes', __name__)

@classes.route('/add', methods=['POST'])
def add_classes():
    try:
        class_name = request.json['class_name']
        class_uuid = request.json['class_uuid']

        query = "INSERT INTO `classes` (`class_name`, `class_uuid`) values (%s, %s)"
        arguments = [class_name, class_uuid]
        return jsonify(insert(query, arguments))
    except Exception as ex:
        print(ex)
        return jsonify({'result': 'failure'})

    
@classes.route('/fetch')
def fetch_classes():
    try:
        query = "SELECT `class_name`, `class_uuid` FROM `classes`"
        return select_all(query, [])
    except Exception as ex:
        print(ex)
        return jsonify({'result': 'failure'})


@classes.route('/delete', methods=['DELETE'])
def delete_classes():
    try:
        class_uuid = request.json['class_uuid']
        query = "DELETE FROM `classes` WHERE `class_uuid` = %s"
        return delete(query, [class_uuid])
    except Exception as ex:
        print(ex)
        return jsonify({'result': 'failure'})
 