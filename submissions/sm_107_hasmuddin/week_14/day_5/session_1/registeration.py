import csv

# making header


def init_header():
    with open("data/users.csv", "w") as users:
        fieldnames = ["username", "password"]
        writer = csv.DictWriter(users, fieldnames=fieldnames)
        writer.writeheader()
    users.close()


def read_csv(username):
    flag = True
    try:
        with open("data/users.csv") as users:
            read = csv.DictReader(users)
            for row in read:
                if row["username"] == username:
                    flag = False

        return flag
    except FileNotFoundError:
        init_header()


def register():
    username = str(input("Username: "))
    password = input("Password: ")
    if read_csv(username):
        with open("data/users.csv", "a") as users:
            fieldname = ["username", "password"]
            write = csv.DictWriter(users, fieldnames=fieldname)
            write.writerow({"username": username, "password": password})
            print("Registeration Sucessfull")
    else:
        print("User Already exit")


register()
