# User Login
'''
It should take the username and password as input and check with the existing data in users.csv
If the username and password matches it should print the message Login Successful
If a user with the provided username doesn't exists it should print the message User Not Found
If the username and password doesn't match it should print the message Wrong Password
'''
import csv


def login(username, password):
    try:
        with open("/home/akamit21/coding/week_14/day_5/session_1/data/users.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile)
            for x in reader:
                if x['username'] == username:
                    if x['password'] == password:
                        return "Login Successful!"
                    else:
                        return "Wrong Password"
            return "User not found!"
    except Exception as e:
        return (e)


username = input("Enter Username: ")
password = input("Enter Password: ")


print(login(username, password))
