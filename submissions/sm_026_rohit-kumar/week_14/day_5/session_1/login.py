import csv

username = input('Enter username : ')
password = input('Enter password : ')

def check_for_presense(username, password):
    login_success = False
    wrong_password = False
    not_found = False

    fieldnames = ['username', 'password']
    csv_reader = open('users.csv', 'r')
    reader = csv.DictReader(csv_reader, fieldnames=fieldnames)
    for row in reader:
        if row['username'] == 'username':
            continue

        elif row['username'] == username and row['password'] == password:
            login_success = True
        elif row['username'] == username and row['password'] != password:
            wrong_password = True
        else:
            not_found = True        
    
    if login_success:
        return 1
    if wrong_password:
        return 2
    if not_found:
        return 3

res = check_for_presense(username, password)
if res == 1:
    print('Login Successful')
elif res == 2:
    print('Wrong Password')
else:
    print('User Not Found')
