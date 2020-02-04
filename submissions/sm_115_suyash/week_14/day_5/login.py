import csv

def isLogin():
    print("Enter username")
    user_name = input()
    print("Enter password")
    pass_word = input()
    with open("./users.csv","r") as csvfile:
        reader = csv.DictReader(csvfile)
        count = 0
        for user in reader:
            if user["username"] == user_name and user["password"] == pass_word:
                count = 1
                break
            elif user["username"] == user_name and user["password"] != pass_word:
                count = 2
                break
        if count == 1:
            print("Login Successful")
        elif count == 2:
            print("Wrong Password")
        else:
            print("User Not Found")

isLogin()