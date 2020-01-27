import csv
def read_csv(username,password):
    validUser=False
    try:
        with open('users.csv','r') as csvfile:
            reader=csv.DictReader(csvfile)
            for row in reader:
                for key,value in row.items():
                    if key=="username" and value == username:
                        validUser=True
                    if validUser and key=="password" and value==password:
                        return True

            if validUser:
                print("Wrong Password")
                return False
            else:
                print("User not Found")
                return False
    except FileNotFoundError:
        return "Not Found"

def login(username,password):
    status=read_csv(username,password)
    if status == "Not Found":
        print("Not Registered users in directory yet")
    elif status:
        print ("Login Successful")
    else:
        print("Try Again!!")


username=input("Please Enter username:")
password=input("please enter password:")
login(username,password)