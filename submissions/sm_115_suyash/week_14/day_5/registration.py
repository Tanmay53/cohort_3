import csv

def read_csv():
    li = []
    with open("./users.csv","r") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            li.append(dict(row))
    return li

def sign_up():
    li = read_csv()
    print("Enter username")
    user_name = input()
    print("Enter password")
    pass_word = input()

    if len(li) is 0:
        with open("./users.csv", "w") as csvfile :
                fieldnames = ["username", "password"]
                writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
                writer.writeheader()
                writer.writerow({"username":user_name,"password":pass_word})
                print("Registration Successful")
    else:
        for info in li:
            if info["username"] == user_name and info["password"] == pass_word:
                print("User already exist")
            else:
                with open("./users.csv", "a") as csvfile :
                    fieldnames = ["username", "password"]
                    writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
                    writer.writerow({"username":user_name,"password":pass_word})
                print("Registration Successful")

sign_up()