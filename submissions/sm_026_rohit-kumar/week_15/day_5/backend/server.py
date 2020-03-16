from flask import Flask, request
import json, os, csv, pdb

app = Flask(__name__)

def get_user_id():
    id_no = 0
    if os.path.exists('data/users.csv'):
        f_handle = open('data/users.csv', 'r')
        reader = csv.DictReader(f_handle)
        for row in reader:
            id_no = row['id']
        
        f_handle.close()
    
    return str(int(id_no) + 1)

def write_one_record_to_csv(name, email, mobile, age):
    # get the user id for new user already
    id = get_user_id()

    # prep to write new row
    field_names = ['id', 'name', 'email', 'mobile', 'age']
    if os.path.exists('data/users.csv'):
        f_handle = open('data/users.csv', 'a')
        writer = csv.DictWriter(f_handle, fieldnames=field_names)
    else:
        f_handle = open('data/users.csv', 'w')   
        writer = csv.DictWriter(f_handle, fieldnames=field_names)
        writer.writeheader()

    writer.writerow({'id': id, 'name': name, 'email': email, 'mobile': mobile, 'age': age})
    f_handle.close()

def read_all_records_from_csv():
    # reader = []

    if os.path.exists('data/users.csv'):
        f_handle = open('data/users.csv', 'r')
        user_list = list(csv.DictReader(f_handle))
        f_handle.close()

    return (user_list)

def update_data_to_csv(id_no, name, email, mobile, age):
    users = read_all_records_from_csv()
    for user in users:
        if user['id'] == str(id_no):
            user['name'] = name
            user['email'] = email
            user['mobile'] = mobile
            user['age'] = age

    # overwite all reacords in the users.csv file
    write_all_records_to_csv(users)

def write_all_records_to_csv(users):
    field_names = ['id', 'name', 'email', 'mobile', 'age']
    f_handle = open('data/users.csv', 'w')   
    writer = csv.DictWriter(f_handle, fieldnames=field_names)
    writer.writeheader()

    for user in users:
        writer.writerow({'id': user['id'], 'name':user['name'], 'email': user['email'], 'mobile': user['mobile'], 'age': user['age']})

    f_handle.close()

def delete_user_from_csv(id_no):
    all_users = read_all_records_from_csv()
    for i, user in enumerate(all_users):
        if user['id'] == str(id_no):   
            all_users.pop(i)

    write_all_records_to_csv(all_users)

def get_user_from_csv(id):
    users = read_all_records_from_csv()
    for user in users:
        if user['id'] == str(id):
            return json.dumps(user)
    
    return json.dumps({})

@app.route('/user/listing', methods=['GET'])
def listing():
    records = read_all_records_from_csv()
    return json.dumps(records)

@app.route('/user/create', methods=['POST'])
def create():
    name   = request.json['name']
    email  = request.json['email']
    mobile = request.json['mobile']
    age    = request.json['age']
    
    # write record to file
    write_one_record_to_csv(name, email, mobile, age)

@app.route('/user/edit/<int:id>', methods=['PATCH'])
def edit(id):
    id_no = id
    name   = request.json['name']
    email  = request.json['email']
    mobile = request.json['mobile']
    age    = request.json['age']


    
    # write record to file
    update_data_to_csv(id_no, name, email, mobile, age)


@app.route('/user/delete/<int:id>', methods=['DELETE'])
def delete(id):
    delete_user_from_csv(id)
    

@app.route('/user/show/<int:id>')
def show(id):
    user = get_user_from_csv(id)
    return json.dumps(user)

@app.route('/user/probe/<int:per_page>')
def probe(per_page):
    all_records =  read_all_records_from_csv()
    total = len(all_records)
    no_of_pages = total // per_page

    records = all_records[:per_page]
    return json.dumps({'records': records, 'total_pages': no_of_pages})

@app.route('/user/chunk/', methods=['POST'])
def chunk():
    per_page = int(request.json['per_page'])
    page_num = int(request.json['page_num'])

    all_records =  read_all_records_from_csv()
    total = len(all_records)
    no_of_pages = total // per_page

    beg = (page_num - 1) * per_page
    end = page_num * per_page

    records = all_records[beg: end]
    return json.dumps({'records': records, 'total_pages': no_of_pages})


@app.after_request
def add_header(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')

    return response 

""" 
@app.after_request
def add_headers(response):
    response.headers.add('Content-Type', 'application/json')
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Expose-Headers', 'Content-Type,Content-Length,Authorization,X-Pagination')
    
    return response """
