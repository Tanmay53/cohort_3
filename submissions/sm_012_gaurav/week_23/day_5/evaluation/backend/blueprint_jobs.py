from flask import Blueprint, request
from server import mysql
import json
from helpers import check_token
from helpers_jobs import *

jobs = Blueprint('jobs', __name__)

@jobs.route('', methods = ['GET', 'POST'])
def getAndPostJob():
    token_str = request.headers.get('Authorization', default=None)
    if token_str == None:
        return json.dumps({'message': 'Unauthorized Access', 'error': True})
    else:
        cursor = mysql.connection.cursor()
        try:
            if not check_token(cursor, token_str.split(' ')[1]):
                return json.dumps({'message': 'Unauthorized Access', 'error': True})
            else:
                if request.method == 'POST':
                    title = request.json['title']
                    salary = int(request.json['salary'])
                    openings = int(request.json['openings'])
                    companyId = int(request.json['companyId'])
                    addJob(cursor, title, salary, openings, companyId)
                    return json.dumps({'message': 'Job Added Successfully', 'error': False})
                elif request.method == 'GET':
                    company = request.args.get('company', default=None)
                    location = request.args.get('location', default=None)
                    sortBy = request.args.get('sortBy', default=None)
                    sortType = request.args.get('sortType', default='asc')
                    page = int(request.args.get('page', default=1))
                    data, count, cnt = getJobs(cursor, company, location, sortBy, sortType, page)
                    return json.dumps({'data': data, 'count': count, 'totalCnt': cnt, 'error': False})
        except Exception as e:
            print(e)
            return json.dumps({'message': 'Some Error Occurred', 'error': True})
        finally:
            mysql.connection.commit()
            cursor.close()

@jobs.route('/<int:jobId>', methods = ['PATCH', 'DELETE', 'GET'])
def editAndDeleteJob(jobId):
    token_str = request.headers.get('Authorization', default=None)
    if token_str == None:
        return json.dumps({'message': 'Unauthorized Access', 'error': True})
    else:
        cursor = mysql.connection.cursor()
        try:
            if not check_token(cursor, token_str.split(' ')[1]):
                return json.dumps({'message': 'Unauthorized Access', 'error': True})
            else:
                if request.method == 'PATCH':
                    title = request.json['title']
                    salary = int(request.json['salary'])
                    openings = int(request.json['openings'])
                    updateJob(cursor, title, salary, openings, jobId)
                    return json.dumps({'message': 'Job Updated Successfully', 'error': False})
                elif request.method == 'DELETE':
                    deleteJob(cursor, jobId)
                    return json.dumps({'message': 'Job Deleted Successfully', 'error': False})
                elif request.method == 'GET':
                    cursor.execute('''select * from jobs where id=%s''', (jobId, ))
                    result = cursor.fetchone()
                    return json.dumps({'data': result, 'error': False})
        except:
            return json.dumps({'message': 'Some Error Occurred', 'error': True})
        finally:
            mysql.connection.commit()
            cursor.close()