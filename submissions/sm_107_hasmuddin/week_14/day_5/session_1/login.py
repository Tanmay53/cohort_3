import csv


def read_csv(username, password):
    with open("users.csv") as users:
        flag = False
        read = csv.DictReader(users)
        for row in read:
            if row["username"] == username and row["password"] == password:
                print("Login Successfull")
                flag = True
                break
            elif row["username"] == username and not row["password"] == password:
                print("Wrong Password")
                flag = True
                break

    if flag is False:
        print("User Not found")


def login():
    username = input("Username: ")
    password = input("Password: ")
    read_csv(username, password)


login()