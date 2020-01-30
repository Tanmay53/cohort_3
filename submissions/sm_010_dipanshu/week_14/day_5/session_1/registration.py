import csv
import os


def read_file(username):
    if not os.path.exists("data/users.csv"):
        csvfile = open("data/users.csv", "w")
        fieldnames = ["username", "password"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        csvfile.close()

    csvfile = open("data/users.csv", "r")

    reader = csv.DictReader(csvfile)

    for row in reader:
        if row["username"] == username:
            return 1

    csvfile.close()
    return 0


def register(username, password):
    if read_file(username):
        print("User already exists")
    else:
        csvfile = open("data/users.csv", "a")
        fieldnames = ["username", "password"]

        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writerow({"username": username, "password": password})
        print("Registration Successful")
        csvfile.close()


register("dipanshu", "sabharwal")
register("gaurav", "arya")
register("aalind", "sharma")
