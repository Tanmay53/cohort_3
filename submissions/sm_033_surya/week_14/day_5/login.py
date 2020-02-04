import csv


class Login:
    def login(self, username, password):
        output_string = ""
        with open("data/users.csv") as csvfile:
            reader = csv.DictReader(csvfile)
            for a in reader:
                if username in a["username"]:
                    if password == a["password"]:
                        output_string = "Login Successful"
                        return output_string
                    else:
                        output_string = "Wrong Password"
                        return output_string
                else:
                    output_string = "User Not Found"
        return output_string


my_data = Login()
global username
global password
print("please enter UserName")
username = input()
print("please enter Password")
password = input()
display_string = my_data.login(username, password)
print(display_string)
