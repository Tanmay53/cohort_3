from flask import Blueprint, request, jsonify
from db_helper import connect, insert, select_one, select_all, delete_helper, edit_helper, delete
import jwt


employee = Blueprint('employee', __name__)

# write routes here
@employee.route('/create', methods=['POST'])
def create():
    try:
        emp_name = request.json['emp_name']
        email    = request.json['email']
        gender   = request.json['gender']
        dept_id  = request.json['dept_id']
        salary   = request.json['salary']
        emp_uuid = request.json['emp_uuid']
        token    = request.headers.get('Authorization').split(' ')[1]
    
        decoded = jwt.decode(token, 'secret', algorithms=['HS256'])
        query = '''INSERT INTO `employee` (`emp_name`, `email`, `gender`, `dept_id`, `salary`, `emp_uuid`)
                    VALUES (%s, %s, %s, %s, %s, %s)
                '''
        arguments = [emp_name, email, gender, dept_id, salary, emp_uuid]
        result = insert(query, arguments)
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})

@employee.route('/delete', methods=['DELETE'])
def delete_employee():
    try:
        emp_uuid = request.json['emp_uuid']
        token    = request.headers.get('Authorization').split(' ')[1]
    
        decoded = jwt.decode(token, 'secret', algorithms=['HS256'])
        query = "DELETE FROM `employee` WHERE `emp_uuid` = %s"
        arguments = [emp_uuid]
        result =  delete(query, arguments)
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})
        

@employee.route('/department')
def get_all_department():
    query = 'SELECT id, dept_name FROM department'
    result = select_all(query, [])
    return jsonify(result)


# probe
@employee.route('/probe', methods=['POST'])
def get_all_probe():
    try:
        gender      = request.json['gender']
        department  = request.json['department']
    
        # common in all case
        base_query = '''
                    SELECT COUNT(*) AS `total_rec` FROM employee e LEFT JOIN department d on e.dept_id = d.id  
                    '''
        if gender == 'all' and department == 'all':
            query = base_query
            result = select_all(query, [])        

        elif gender != 'all' and department == 'all':
            query = base_query + " where e.gender = %s"
            result = select_all(query, [gender])

        elif gender == 'all' and department != 'all':
            query = base_query + " where e.dept_id = %s"
            result = select_all(query, [department])

        else:
            query = base_query + " where e.dept_id = %s and e.gender = %s"
            result = select_all(query, [department, gender])
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})



@employee.route('/fetch', methods=['POST'])
def get_all_records():
    try:
        gender      = request.json['gender']
        department  = request.json['department']
        sal_order   = request.json['sal_order']
        limit_beg   = request.json['limit_beg']
        limit_end   = request.json['limit_end'] 

        # common in all case
        base_query = '''
                    SELECT LPAD(e.id, 4, "0") as id, e.emp_uuid, e.emp_name, e.email, e.gender, e.salary, 
                    d.dept_name FROM employee e LEFT JOIN department d on e.dept_id = d.id  
                    '''

        if sal_order == 'asc':
            temp_qry = 'ORDER BY salary ASC LIMIT {}, {}'.format(limit_beg, limit_end)
        else:
            temp_qry  = 'ORDER BY salary DESC LIMIT {}, {}'.format(limit_beg, limit_end)
        

        if gender == 'all' and department == 'all':
            query = base_query + temp_qry
            result = select_all(query, [])        

        elif gender != 'all' and department == 'all':
            query = base_query + " where e.gender = %s " + temp_qry
            result = select_all(query, [gender])

        elif gender == 'all' and department != 'all':
            query = base_query + " where e.dept_id = %s " + temp_qry 
            result = select_all(query, [department])

        else:
            query = base_query + " where e.dept_id = %s and e.gender = %s " + temp_qry
            result = select_all(query, [department, gender])
        return jsonify(result)
    except Exception:
        return jsonify({'result':'failure'})
