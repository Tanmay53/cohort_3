import csv
import sys

# Function definitions start here .....
def write_to_file(filename, username, password, new_file=False):
    with open(filename, 'a+') as file:
        fieldnames = ['username', 'password']
        writer = csv.DictWriter(file, delimiter=",", fieldnames=fieldnames)
        
        if new_file:
            writer.writeheader()
        
        writer.writerow({'username': username, 'password': password})

# Function definitions end here .....

username = input('Enter username: ').strip()
password = input('Enter password: ').strip()
user_present = False

if len(username) == 0 or len(password) == 0:
    print('Enter valid credentials!')
    sys.exit()

try:
    with open('users.csv', mode='r') as file:
        contents = csv.DictReader(file)
        
        for user in contents:
            if user['username'] == username:
                user_present = True
                break

    if user_present:
        print('User Already Exists')
    else:
        write_to_file('users.csv', username, password)
        print('Registration Successful')
except:
    write_to_file('users.csv', username, password, True)
