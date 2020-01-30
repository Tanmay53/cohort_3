import csv
import os


def check_credentials(username, password):
    if not os.path.exists("data/users.csv"):
        return 0
    else:
        csvfile = open("data/users.csv", "r")
        reader = csv.DictReader(csvfile)

        flag = 0
        for row in reader:
            if row["username"] == username and row["password"] == password:
                flag = 1
                break
            elif not row["username"] == username:
                flag = 3
            elif not ["password"] == password:
                flag = 2
                break

        return flag


def login(username, password):
    return_code = check_credentials(username, password)
    if not return_code:
        print("Credential file does not exist")
    elif return_code == 1:
        print("Login successful")
    elif return_code == 2:
        print("Wrong password")
    else:
        print("User not found")


login("dipanshu", "sabharwal")
