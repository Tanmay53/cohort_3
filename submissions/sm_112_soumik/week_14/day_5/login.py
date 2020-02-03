import csv
username = input("Login \n :Enter Your Username! : ")
password = input("Enter your password ! : ")


def read_csv():
    temp_data = []
    with open("data/users.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for values in reader:
            temp_data.append(dict(values))
    return temp_data


database = read_csv()
# print(database)


def auth_login():
    user = False
    for items in database:
        if items["username"] == username:
            if items["password"] == password:
                print("Login Seccessful")
                user = True
            else:
                print("Wrong Password")
                user = True

    if user == False:
        print("User Not Found ")


auth_login()
