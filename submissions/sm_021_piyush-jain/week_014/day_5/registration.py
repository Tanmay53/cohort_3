import csv

user = input()
password = input()


def write_csv(user, password):

    with open('/home/piyush/coding/week_014/day_5/users.csv', "r+b") as csvfile:
        fieldnames = ['user', 'password']
        writer = csv.DictWriter(csvfile, delimiter=" ", fieldnames=fieldnames)
        reader = csv.DictReader(csvfile, delimiter=" ")
        writer.writeheader()
        flag = False
        for row in reader:
            if(row.get("user") == user):
                print("user already exists")
                flag = True

        if(flag == False):
            writer.writerow({"user": user, "password": password})


write_csv(user, password)
