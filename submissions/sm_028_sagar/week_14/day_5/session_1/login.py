import csv
print('Enter username and password for login')
username,password = map(str,input().split())

def loginCheck(username,password):
    with open('users.csv') as csvfile:
        #checking for existing user
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['username'] == username:
                if row['password'] == password:
                    print('Login Successful')
                else:
                    print('Wrong Password')
            else:
                print('User Not Found')


#invoking login check
loginCheck(username,password)