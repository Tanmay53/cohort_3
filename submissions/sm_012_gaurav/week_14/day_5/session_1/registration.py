import os
import csv

def read_csv(username, password):
    with open('users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for line in reader:
            if line['username'] == username:
                return False
    return True

def write_csv(username, password):
    fieldnames = ['username', 'password']
    if not os.path.exists('users.csv'):
        with open('users.csv', 'a') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
            writer.writeheader()
            writer.writerow({'username': username, 'password': password})
        print("Registration Successful")
    else:
        if not read_csv(username, password):
            print("User Already Exists")
        else:
            with open('users.csv', 'a') as csvfile:
                writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
                writer.writerow({'username': username, 'password': password})
            print("Registration Successful")


username = input("Enter Username: ")
password = input("Enter Password: ")

write_csv(username, password)


