from flask import Flask
import csv
import json
from flask import request
app = Flask(__name__)

def writecsv(id,name,email,mobile,age):
    with open('data/users.csv','a') as csvfile:
        fieldnames = ["id","name","email","mobile","age"]
        writer = csv.DictWriter(csvfile , fieldnames = fieldnames )
        # writer.writeheader()
        writer.writerow({"id":id,"name":name,"email":email,"mobile":mobile,"age":age})

def editcsv(userlist):
    with open('data/users.csv','w') as csvfile:
        fieldnames = ["id","name","email","mobile","age"]
        writer = csv.DictWriter(csvfile , fieldnames = fieldnames )
        writer.writeheader()
        for data in userlist:
            writer.writerow(data)



def readcsv():
    arr = list()
    with open('data/users.csv','r') as csvfile:
        reader = csv.DictReader(csvfile)
        for data in reader:
            arr.append(data)
    return arr 



@app.route("/")
def home(): 
    return "hello world"

@app.route("/users/listing")
def showuserslist():
    arr = readcsv()
    return json.dumps({"arr":arr})

@app.route("/users/create",methods =['POST'])
def createuser():
    id = request.json["id"]
    name = request.json["name"]
    email = request.json["email"]
    mobile = request.json["mobile"]
    age = request.json["age"]
    writecsv(id,name,email,mobile,age)
    return ({'msg':'user added successfully'})

@app.route('/users/show/<int:id>', methods = ['GET'])
def showuser(id):
    userlist = readcsv()
    for data in userlist:
        if int(data["id"]) == id:
            user = data
    return json.dumps({"user":user})

@app.route('/users/edit/<int:id>', methods = ["POST"])
def edituser(id):
    name = request.json["name"]
    email = request.json["email"]
    mobile = request.json["mobile"]
    age = request.json["age"]
    userlist = readcsv()
    for data in userlist:
        if int(data['id']) == id:
            data['name'] = name
            data['email'] = email
            data['mobile'] = mobile
            data['age'] = age
    editcsv(userlist)
    return json.dumps({'msg':"user updated successfully"})

@app.route('/users/delete/<int:id>', methods = ['GET'])

def deleteuser(id):
    userlist = readcsv()
    for data in userlist:
        if int(data["id"]) != id:
            userlist.remove(data)
    editcsv(userlist)
    return json.dumps({"msg":"user removed successfully"})


