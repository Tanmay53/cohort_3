import os.path
import csv
global username
global password
print("Enter user name")
username = input()
print("Enter password")
password = input()


class Register:
    data = {}

    def add_user(self, username, password):
        if username in self.data:
            print("User Already Exists")
        else:
            self.data[username] = password
            print("Registration Successful")

    def getdata_data(self):
        file_isthere = os.path.isfile('data/users.csv')
        if file_isthere:
            with open("data/users.csv") as csvfile:
                reader = csv.reader(csvfile, delimiter=",", quotechar="|")
                for row in reader:
                    self.data.update({row[0]: row[1]})

    def write_csv(self):
        file_isthere = os.path.isfile('data/users.csv')
        with open('data/users.csv', 'w') as csvfile:
            fieldnames = ["username", "password"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            if not file_isthere:
                writer.writeheader()
            for a in self.data:
                writer.writerow({"username": a, "password": self.data[a]})


my_user = Register()
my_user.getdata_data()
my_user.add_user(username, password)
my_user.write_csv()
