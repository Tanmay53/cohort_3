import csv

def read_csv(u,p):
    with open("users.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row["user_name"] == u:
                if row["password"] == p:
                    return "Login Successful"
                else:
                    return "Wrong Password"
            return "User Not Found"

def login():
    user_name = input("Enter Username:")
    password = input("Enter password:")
    x = read_csv(user_name,password)
    print(x)
login()