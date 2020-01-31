import csv

def read_user_file(user , password):
    with open("users.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['user_name'] == user:
                if row['password'] == password:
                    return 'Login successfull'
                else:
                    return 'Wrong Password'
        return 'User Not Found'

user = input('Enter your login : ')
password = input('Enter you password : ')


def login(user,password):
    message = read_user_file(user,password)
    print(message)

login(user, password)

    
