from flask import Blueprint, request
from server import mysql
from helpers import check_token
from helpers_company import *
import json

company = Blueprint('company', __name__)

@company.route('', methods=['GET', 'POST'])
def manipulateCompany():
    token_str = request.headers.get('Authorization', default=None)
    if token_str == None:
        return json.dumps({'message': 'Unauthorized Access', 'error': True})
    else:
        cursor = mysql.connection.cursor()
        try:
            if not check_token(cursor, token_str.split(' ')[1]):
                return json.dumps({'message': 'Unauthorized Access', 'error': True})
            else:
                if request.method == 'GET':
                    data = getCompany(cursor)
                    return json.dumps({'data': data, 'error': False})
                elif request.method == 'POST':
                    name = request.json['name']
                    location = request.json['location']
                    addCompany(cursor, name, location)
                    return json.dumps({'message': 'Company Added Successfully','error': False})
        except:
            return json.dumps({'message': 'Some Error Occurred', 'error': True})
        finally:
            mysql.connection.commit()
            cursor.close()

