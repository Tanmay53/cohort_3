import csv

username = input("Enter Username: ")
password = input("Enter Password: ")

def read_csv(username, password):
    with open('users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for line in reader:
            if line['username'] == username:
                if line['password'] == password:
                    return 1
                else:
                    return 2
    return 0

check = read_csv(username, password)
if check == 1:
    print("Login Successful")
elif check == 2:
    print("Wrong Password")
else:
    print("User Not Found")