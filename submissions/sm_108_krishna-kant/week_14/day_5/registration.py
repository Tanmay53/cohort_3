import csv

def init_writer():
    with open('/home/coderhex/repos/cohort_3/submissions/sm_108_krishna-kant/week_14/day_5/db/user.csv', 'w') as csvfile:
        fieldnames = ['username', 'password']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()


def read_csv(username):
     usernames = list()
     with open("/home/coderhex/repos/cohort_3/submissions/sm_108_krishna-kant/week_14/day_5/db/user.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
           for key , values in row.items():
               if key == 'username':
                   usernames.append(values)
     return usernames

                    

def write_csv(username,password):
    with open('/home/coderhex/repos/cohort_3/submissions/sm_108_krishna-kant/week_14/day_5/db/user.csv', 'a') as csvfile:
        fieldnames = ['username', 'password']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow({"username":username,"password":password})
        print("User Registration Successfull")

def registration():
    username = input("Enter Username : ")
    password = input("Enter Password : ")
    auth_user = ""
    try:
        auth_user = read_csv(username)
        if username in auth_user:
            print("Already Resgistered")
        else :
            write_csv(username,password)
    except FileNotFoundError:
        init_writer()
        write_csv(username,password)
        
registration()
        