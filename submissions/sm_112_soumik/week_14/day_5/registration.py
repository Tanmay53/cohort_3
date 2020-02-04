import csv
username = input("Enter your username")
password = input("Enter your password")
database = []


def read_csv():
    temp_data = []
    with open('data/users.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for value in reader:
            temp_data.append(dict(value))
    return temp_data


database = read_csv()


def write_csv(username):
    is_matched = False
    for items in database:
        if items["username"] == username:
            is_matched = True
    if is_matched:
        print("Username already exists")
    else:
        with open('data/users.csv', "a") as csvfile:
            fieldnames = ["username", "password"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            # writer.writeheader()
            writer.writerow({"username": username, "password": password})
            print("User Added Succesfully !")


write_csv(username)
