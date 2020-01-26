import csv
import sys

username = input('Enter username: ').strip()
password = input('Enter password: ').strip()
user_present = False
fail_msg = 'User Not Found'

if len(username) == 0 or len(password) == 0:
    print('Enter valid credentials!')
    sys.exit()

try:
    with open('users.csv', mode='r') as file:
        contents = csv.DictReader(file)
        
        for user in contents:
            if user['username'] == username:
                if user['password'] == password:
                    user_present = True
                    break
                else:
                    fail_msg = 'Wrong Password'

    if user_present:
        print('Login Successful')
    else:
        print(fail_msg)
except:
    print('No Record Found!')
