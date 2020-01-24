import csv

def read_csv(username,password):
     usernames = list()
     res = ""
     with open("/home/coderhex/repos/cohort_3/submissions/sm_108_krishna-kant/week_14/day_5/db/user.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['username'] == username and row['password'] == password :
                res = "Login Succesfull"
            elif row['username'] == username and row['password'] != password:
                res = "Wrong Password"
            else:
                res = "User Not Found"
        return res
               

def login():
    username = input("Enter Username : ")
    password = input("Enter Password : ")
    auth_user = ""
    try:
        auth_user = read_csv(username,password)
        print(auth_user)
    except:
        print("An Error Occurred")
        
login()
        