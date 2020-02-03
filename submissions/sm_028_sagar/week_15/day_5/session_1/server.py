from flask import Flask
from flask import request
import json
import csv
app = Flask(__name__)

#Return List of all users
@app.route('/users')
def usersList():
    arr = []
    with open('data/users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            arr.append(row)
    return json.dumps({'arr':arr,'message':'Response Successfull'}) if len(arr) > 0 else json.dumps({'arr':[],'message':'No Users Listed'})


#Create New User
@app.route('/users',methods=['POST'])
def createUser():
    name = request.json['name']
    email = request.json['email']
    mobile = request.json['mobile']
    age = request.json['age']
    #current possible id for user:
    id = 0
    with open('data/users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            id = int(row['id'])
    newId = id+1
    
    #writing new data with new user in csv file
    with open('data/users.csv','a') as csvfile:
        fieldnames = ['id','name','email','mobile','age']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        # writer.writeheader()
        writer.writerow({'id':newId,'name':name,'email':email,'mobile':mobile,'age':age})
        return json.dumps('User Listed')
    

#Show specific user:
@app.route('/users/<id>')   
def showUser(id):
    #finding id in users file
    with open('data/users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if int(row['id']) == int(id):
                return json.dumps({'arr':[row],'message':'User Found'})
        
        return json.dumps('User Not Found')


#Edit Specific User:
@app.route('/users/<id>',methods=['PUT'])
def editUser(id):
    newData = request.json['data']
    print(newData)
    #matching id of requested user with existing profile
    userData = []
    with open('data/users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            userData.append(row)
        
    #rewriting data
    with open('data/users.csv','w') as csvfile:
        fieldnames = ['id','name','email','mobile','age']
        writer = csv.DictWriter(csvfile,fieldnames = fieldnames)
        writer.writeheader()
        for i in range(len(userData)):
            if int(userData[i]['id']) == int(id):
                writer.writerow({'id':userData[i]['id'],'name':newData['name'],'email':newData['email'],'mobile':newData['mobile'],'age':newData['age']})     
                continue  

            writer.writerow({'id':userData[i]['id'],'name':userData[i]['name'],'email':userData[i]['email'],'mobile':userData[i]['mobile'],'age':userData[i]['age']})       

    return json.dumps('request accepted')


#Delete Specific User:
@app.route('/users/<id>',methods=['DELETE'])
def deleteUser(id):
    #create list and skip user with id
    userData = []
    with open('data/users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['id'] == id:
                continue
            userData.append(row)

    #rewriting data
    with open('data/users.csv','w') as csvfile:
        fieldnames = ['id','name','email','mobile','age']
        writer = csv.DictWriter(csvfile,fieldnames = fieldnames)
        writer.writeheader()
        for i in range(len(userData)):
            writer.writerow({'id':userData[i]['id'],'name':userData[i]['name'],'email':userData[i]['email'],'mobile':userData[i]['mobile'],'age':userData[i]['age']}) 

        return json.dumps('User Successfully Deleted!')   



