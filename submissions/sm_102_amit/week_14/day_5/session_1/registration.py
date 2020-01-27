# User Registration
'''
It should take the username and password as input and store the data in the file users.csv (Headers: username, password)
Upon successful saving it should print the message Registration Successful
If a user with the same username exists it should print the message User Already Exists
'''
import csv


def check(username):
    try:
        with open("/home/akamit21/coding/week_14/day_5/session_1/data/users.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile)
            for x in reader:
                for _, val in x.items():
                    if val == username:
                        return False
            return True
    except:
        with open("/home/akamit21/coding/week_14/day_5/session_1/data/users.csv", "w") as csvfile:
            fieldnames = ['username', 'password']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            return True


def registration(username, password):
    if(check(username)):
        with open("/home/akamit21/coding/week_14/day_5/session_1/data/users.csv", "a") as csvfile:
            fieldnames = ['username', 'password']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow({'username': username, 'password': password})
            print("Registered Successfully ...")
    else:
        print("User already registered ...")


username = input("Enter Username: ")
password = input("Enter Password: ")


registration(username, password)
