from flask import Flask
app = Flask(__name__)
from flask import request
import csv
import json
import math

def reg_read_csv():
    li = []
    with open ('/home/apoorva/coding/week_15/day_5/session_1/backend/data/users.csv','r') as csvfile:
        reader  = csv.DictReader(csvfile)
        for row in reader:
            li.append(dict(row))
        return li

def read_csv(dataPerPage,page_no):
    li = []
    with open ('/home/apoorva/coding/week_15/day_5/session_1/backend/data/users.csv','r') as csvfile:
        reader  = csv.DictReader(csvfile)
        for row in reader:
            li.append(dict(row))
    curr_page = page_no
    dataPer_page = int(dataPerPage)
    total_pages = math.ceil(len(li)/dataPer_page)
    prev_page_end = (curr_page-1) * dataPer_page
    curr_page_end = curr_page * dataPer_page
    curr_page_items = li[prev_page_end:curr_page_end]
    # print(curr_page_items)
    return [curr_page_items,total_pages]


def write_csv(name, email, mobile, age):
    li = reg_read_csv()
    if len(li) is 0:
        with open('/home/apoorva/coding/week_15/day_5/session_1/backend/data/users.csv','w') as csvfile:
            fieldnames = ['id','Name','email','mobile','age']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerow({'id' : 0, 'Name' : name, 'email' : email, 'mobile' : mobile, 'age': age})
    else:
        new_id = int(li[len(li)-1]["id"])+1
        with open('/home/apoorva/coding/week_15/day_5/session_1/backend/data/users.csv','a') as csvfile:
            fieldnames = ['id','Name','email','mobile','age']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow({'id' : new_id, 'Name' : name, 'email' : email, 'mobile' : mobile, 'age': age})


def edit_csv(id_no, name, email, mobile, age):
    li = reg_read_csv()
    with open('/home/apoorva/coding/week_15/day_5/session_1/backend/data/users.csv','w') as csvfile:
            fieldnames = ['id','Name','email','mobile','age']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for i in range(len(li)):
                if i is id_no:
                    writer.writerow({'id' : id_no, 'Name' : name, 'email' : email, 'mobile' : mobile, 'age': age})
                else:
                    writer.writerow(dict(li[i]))
            

def details_csv(id_no):
    li = reg_read_csv()
    with open('/home/apoorva/coding/week_15/day_5/session_1/backend/data/users.csv','r') as csvfile:
            for i in range(len(li)):
                if i is id_no:
                    return (dict(li[i]))

def delete_csv(id_no):
    li = reg_read_csv()
    with open('/home/apoorva/coding/week_15/day_5/session_1/backend/data/users.csv','w') as csvfile:
            fieldnames = ['id','Name','email','mobile','age']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for i in range(len(li)):
                if i is id_no:
                    continue
                else:
                    writer.writerow(dict(li[i]))   

@app.route('/listing')
def listings():
    page_no = request.args.get('page_no', default = 1, type = int)
    dataPerPage = request.args.get('dataPerPage', default = 25, type = int)
    li = read_csv(dataPerPage,page_no)
    return json.dumps(li)


@app.route('/create', methods = ['POST'])
def create():
    name = request.json['Name']
    email = request.json['email']
    mobile = request.json['mobile']
    age = request.json['age']
    write_csv(name,email,mobile,age)
    return "Data Added"


@app.route('/edit/<int:id_no>', methods = ['POST'])
def edit(id_no):
    name = request.json['Name']
    email = request.json['email']
    mobile = request.json['mobile']
    age = request.json['age']

    edit_csv(id_no,name,email,mobile,age)
    li = reg_read_csv()
    return json.dumps(li)

@app.route('/delete/<int:id_no>', methods = ['POST'])
def delete(id_no):
    delete_csv(id_no)
    li = reg_read_csv()
    return json.dumps(li)

@app.route('/details/<int:id_no>', methods = ['POST'])
def details(id_no):
    li = details_csv(id_no)
    return json.dumps(li)