from flask import Blueprint, request, jsonify
from db_helper import connect, insert, select_one, select_all, delete_helper, edit_helper
import jwt


employee = Blueprint('employee', __name__)

# write routes here
@employee.route('/create', methods=['POST'])
def create():
    emp_name = request.json['emp_name']
    email    = request.json['email']
    gender   = request.json['gender']
    dept_id  = request.json['dept_id']
    salary   = request.json['salary']
    emp_uuid = request.json['emp_uuid']

    """ try:
        decoded = jwt.decode(token, 'secret', algorithms=['HS256'])
        user_id = decoded['user_id']
    except Exception:
        return jsonify({'result':'failure', 'user': 'invalid'})
    """
    query = '''INSERT INTO `employee` (`emp_name`, `email`, `gender`, `dept_id`, `salary`, `emp_uuid`)
               VALUES (%s, %s, %s, %s, %s, %s)
            '''
    arguments = [emp_name, email, gender, dept_id, salary, emp_uuid]
    result = insert(query, arguments)
    return jsonify(result)

@employee.route('/department')
def get_all_department():
    query = 'SELECT id, dept_name FROM department'
    result = select_all(query, [])
    return jsonify(result)

@employee.route('/fetch', methods=['POST'])
def get_all_records():
    gender = request.json['gender']
    department = request.json['department']
    sal_order      = request.json['sal_order']

    if sal_order == 'asc':
        temp_qry = 'ORDER BY salary ASC'
    else:
        temp_qry  = 'ORDER BY salary DESC'
    
    if gender == 'all' and department == 'all':
        query = '''SELECT e.id, e.emp_uuid, e.emp_name, e.email, e.gender, e.salary, 
                   d.dept_name FROM employee e LEFT JOIN department d on e.dept_id = d.id 
                ''' + temp_qry
        result = select_all(query, [])        
    elif gender != 'all' and department == 'all':
        query = '''SELECT e.id, e.emp_uuid, e.emp_name, e.email, e.gender, e.salary, 
                   d.dept_name FROM employee e LEFT JOIN department d on e.dept_id = d.id
                   where e.gender = %s
                ''' + temp_qry
        result = select_all(query, [gender])
    elif gender == 'all' and department != 'all':
        query = '''SELECT e.id, e.emp_uuid, e.emp_name, e.email, e.gender, e.salary, 
                   d.dept_name FROM employee e LEFT JOIN department d on e.dept_id = d.id
                   where e.dept_id = %s 
                ''' + temp_qry
        result = select_all(query, [department])
    else:
        query = '''SELECT e.id, e.emp_uuid, e.emp_name, e.email, e.gender, e.salary, 
                   d.dept_name FROM employee e LEFT JOIN department d on e.dept_id = d.id
                   where e.dept_id = %s and e.gender = %s
                ''' + temp_qry
        result = select_all(query, [department, gender])
    return jsonify(result)




'''
SELECT e.id, e.emp_uuid, e.emp_name, e.email, e.gender, e.salary, d.dept_name FROM employee e LEFT JOIN department d on e.dept_id = d.id;

'''