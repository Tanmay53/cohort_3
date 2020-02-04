from flask import Flask
import csv
import json
from flask import request
app = Flask(__name__)

# reading csv file
def read_csv():
    users_db = list()
    with open('data/users.csv') as csv_file:
        reader = csv.DictReader(csv_file)
        for line in reader:
            users_db.append(line)
    return users_db

# write csv file
def write_csv(id, name, email, mobile, age):
    with open('data/users.csv', 'a') as csv_file:
        fields_names = ['id', 'name', 'email', 'mobile', 'age']
        writer = csv.DictWriter(csv_file, fieldnames = fields_names)
        # writer.writeheader()
        writer.writerow({'id': id, 'name': name, 'email': email, 'mobile': mobile, 'age': age})

# write_csv(1, 'sudhir', 'lion.sud.k@gmail.com', 7255279912, 24)
# read_csv()

# edit csv
def edit_csv(users):
    with open('data/users.csv', 'w') as csv_file:
        field_names = ['id', 'name', 'email', 'mobile', 'age']
        writer = csv.DictWriter(csv_file, fieldnames = field_names)
        writer.writeheader()
        for line in users:
            writer.writerow(line)

@app.route('/')
def home():
    return 'Home Page'

@app.route('/users')
def users():
    return 'Users Page'

# listing all the users
@app.route('/users/listing')
def users_listing():
    users = read_csv()
    return json.dumps({'users': users})

# creating a users
@app.route('/users/create', methods = ['POST'])
def create():
    id  = request.json['id']
    name = request.json['name']
    email = request.json['email']
    mobile = request.json['mobile']
    age = request.json['age']
    write_csv(id, name, email, mobile, age)
    return json.dumps({'message': 'User Add Successfully'})

# show users with particular is
@app.route('/users/show/<int:id>', methods = ['GET'])
def show(id):
    user = list()
    with open('data/users.csv', 'r') as csv_file:
        reader = csv.DictReader(csv_file)
        for line in reader:
            if int(line['id']) == id:
                user.append(line)
    return json.dumps({'user': user})


# edit users with id
@app.route('/users/edit/<int:id>', methods = ['POST'])
def edit(id):
    edit_name = request.json['name']
    edit_email = request.json['email']
    edit_mobile = request.json['mobile']
    edit_age = request.json['age']

    users = read_csv()
   
    for line in users:
        if int(line['id']) == id:
            line['name'] = edit_name
            line['email'] = edit_email
            line['mobile'] = edit_mobile
            line['age'] = edit_age

    edit_csv(users)
    return json.dumps({'message': "Update Successfully"})
    
    
# delete users with particular id
@app.route('/users/delete/<int:id>', methods = ['POST'])
def delete(id):
    users = read_csv()
    for line in users:
        if int(line['id']) == id:
            users.remove(line)

    edit_csv(users)
    return json.dumps({'message': 'user removed'})
    
