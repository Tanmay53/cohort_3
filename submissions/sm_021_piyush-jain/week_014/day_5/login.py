import csv
user = input()
password = input()


def check_credentials(user, password):
    flag = True
    
    with open('/home/piyush/coding/week_014/day_5/users.csv', "r") as csvfile:
        reader = csv.DictReader(csvfile, delimiter=" ")
        for row in reader:
            if(row.get("user") == user):
                if(row.get("password")) == password:
                    flag = True
                    print("Login Successfully")
                    break
                else:
                    flag = True
                    print("Wrong Password")
                    break
            else:
                flag = False

        if(flag == False):
            print("User Not found")


check_credentials(user, password)
