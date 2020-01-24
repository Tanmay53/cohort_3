import csv

def read_csv(user):
    with open("users.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row["user_name"] == user:
                print("Already User Exist")
                return False
        return True

def write_csv(u, p, flag=False):
    with open("users.csv", "a") as csvfile:
        fieldnames = ["user_name", "password"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if flag:
            writer.writeheader()
        writer.writerow({"user_name": u, "password": p})

def sign_up():
    user_name = input("user_name: ")
    pass_word = input("password: ")

    try:
        x = read_csv(user_name)
        if x:
            write_csv(user_name, pass_word)
            print("Registration Successful")
        
    except:
        write_csv(user_name, pass_word,True)

sign_up()
