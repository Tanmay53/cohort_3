import csv

def read_user_file(user):
    with open("users.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row["user_name"] ==user:
                return True
        return False

def write_user_file(input_user, input_password, flag=False):
    with open("users.csv", "a") as csvfile:
        fieldnames = ["user_name", "password"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if flag:
            writer.writeheader()
        writer.writerow({"user_name": input_user, "password": input_password})

def registration(user_name,pass_word):
    try:
        x = read_user_file(user_name)
        if x:
            print("Already User Exist")
        else:
            write_user_file(user_name, pass_word)
            print("Registration Successful")
    except:
        write_user_file(user_name, pass_word,True)
        print("Registration Successful")




input_username = input("Enter your user Name: ")
input_password = input("Enter your password: ")
registration(input_username,input_password)


