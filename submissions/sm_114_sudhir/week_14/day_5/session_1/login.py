import csv
user = input('Enter your username:- ')
pswrd = input('Enter your password:- ')



def read_csv(username, password):
    with open('user.csv', 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for line in csv_reader:
            if username == line['username'] and password == line['password']:
                print("Login Successful")
            elif username == line['username'] and password != line['password']:
                print('Wrong Password')
            else:
                print('User not exits')
            break

read_csv(user, pswrd)