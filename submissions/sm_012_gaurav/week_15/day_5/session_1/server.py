from flask import Flask, request
import json
import os
import csv

app = Flask(__name__)

def read_csv():
    try:
        d = []
        with open('data/users.csv') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                d.append({'id': int(row['id']), 'name': row['name'], 'email': row['email'], 'mobile': int(row['mobile']), 'age': int(row['age'])})
        return d
    except FileNotFoundError:
        return []

def write_csv(d):
    if not os.path.exists('data'):
        os.mkdir('data')
    with open('data/users.csv', 'w') as csvfile:
        fieldnames = ['id', 'name', 'email', 'mobile', 'age']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()
        for a in d:
            writer.writerow({'id': a['id'], 'name': a['name'], 'email': a['email'], 'mobile': a['mobile'], 'age': a['age']})

@app.route('/users', methods = ['GET', 'POST'])
def getAndPostData():
    if request.method == 'GET':
        try:
            data = read_csv()
            return json.dumps({'data': data, 'done': True})
        except:
            return json.dumps({'message': 'Some Error Occurred!!!', 'done': False})
    else:
        try:
            idx = 0
            name = request.json['name']
            email = request.json['email']
            mobile = request.json['mobile']
            age = request.json['age']
            d = read_csv()
            if len(d) == 0:
                idx = 1
            else:
                idx = d[-1]['id'] + 1
            d.append({'id': idx, 'name': name, 'email': email, 'mobile': mobile, 'age': age})
            write_csv(d)
            return json.dumps({'message': 'User Added Successfully', 'done': True})
        except:
            return json.dumps({'message': 'Some Error Occurred!!!', 'done': False})

@app.route('/users/<int:idx>', methods = ['GET', 'PUT', 'DELETE'])
def manipulateData(idx):
    try:
        d = read_csv()
        found = False
        for a in d:
            if a['id'] == idx:
                found = True
                break
        if not found:
            return json.dumps({'message': 'User Does not Exist!!!', 'done': False})
        else:
            if request.method == 'GET':
                try:
                    d = read_csv()
                    index = 0
                    for i,a in enumerate(d):
                        if a['id'] == idx:
                            index = i
                            break
                    return json.dumps({'done': True, 'data': d[index]})
                except:
                    return json.dumps({'done': False, 'message': "Some Error Occurred!!!"})
            elif request.method == 'PUT':
                try:
                    d = read_csv()
                    index = 0
                    name = request.json['name']
                    email = request.json['email']
                    mobile = int(request.json['mobile'])
                    age = int(request.json['age'])
                    for i, a in enumerate(d):
                        if a['id'] == idx:
                            index = i
                            break
                    d[index]['name'] = name
                    d[index]['email'] = email
                    d[index]['mobile'] = mobile
                    d[index]['age'] = age
                    write_csv(d)
                    return json.dumps({'message': 'Information has been updated successfully!!!', 'done': True})
                except:
                    return json.dumps({'message': 'Some Error Occurred!!!', 'done': False})
            elif request.method == 'DELETE':
                try:
                    d = read_csv()
                    newData = []
                    for a in d:
                        if a['id'] != idx:
                            newData.append(a)
                    write_csv(newData)
                    return json.dumps({'message': 'User Deleted Successfully!!!', 'done': True})
                except:
                    return json.dumps({'message': 'Some Error Occurred!!!', 'done': False})
    except:
        return json.dumps({'message': 'Some Error Occurred!!!', 'done': False})
