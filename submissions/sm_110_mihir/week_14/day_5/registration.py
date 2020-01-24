import csv
def write_csv(username,password,isNew=False):
    with open('users.csv','a') as csvfile:
        fieldnames=['username','password']
        writer=csv.DictWriter(csvfile, fieldnames=fieldnames)
        if isNew:
            writer.writeheader()
        writer.writerow({'username':username,"password":password})
        print("registration successfull")

def read_csv(username):
    try:
        with open('users.csv','r') as csvfile:
            reader=csv.DictReader(csvfile)
            for row in reader:
                print(row)
                if(row == username):
                    return False
            return True
    except FileNotFoundError:
        return "Not Found"
 

def registration(username,password):
        status=read_csv(username)
        if status=="Not Found":
            write_csv(username,password,True)
        elif status:
            write_csv(username,password,False)
        else:
            print("username already registered!!")

        


username=input("Please Enter username:")
password=input("please enter password:")
registration(username,password)