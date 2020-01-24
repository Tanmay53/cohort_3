import csv

def read_csv(username,password):
     usernames = list()
     with open("/home/coderhex/repos/cohort_3/submissions/sm_108_krishna-kant/week_14/day_5/db/user.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
           if row['username'] == username and row['password'] == password :
               return True
        return False
               

def login():
    username = input("Enter Username : ")
    password = input("Enter Password : ")
    auth_user = ""
    try:
        auth_user = read_csv(username,password)
        if auth_user:
            print("Login Successfull")
        else:
            print("User Not Registered")
    except:
        print("An Error Occurred")
        
login()
        