import csv

def register(username,password):
    if read_csv_dict(username,password): print('User Already Exists')
    else: 
        write_csv_dict(username,password)
        print('Registration Successfull')

    

def write_csv_dict(username,password):

    with open('users.csv','w') as csvfile:
        #writing key headers
        fieldnames = ['username','password']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()

        #writing username and password
        writer.writerow({'username':username,'password':password})


def read_csv_dict(username,password):
    with open('users.csv') as csvfile:
        #checking for users and sending bool response
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['username'] == username and row['password'] == password:
                return True
        return False

print('Enter Username and password')
username,password = map(str,input().split())

register(username,password)
    








