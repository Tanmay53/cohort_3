import csv


def write_csv(user, password, flag = False):
    with open('day_5/session_1/user.csv', 'a') as csvfile:
        fieldnames = {'username', 'password'}
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        if flag:
            writer.writeheader()
        writer.writerow({'username': user, 'password':password})
        print('User Added Successfully')

def read_csv(user):
    with open('day_5/session_1/user.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for line in reader:
            if line['username'] == user:
                return True
        return False   

def reg(user, password):
    try:
        check_user = read_csv(user)
        if check_user:
            print('User Already Exist')
        else:
            write_csv(user, password)
    except:
        write_csv(user, password, True)


user = input("Please Enter the username:- ")
pswrd = input("Please Enter your password:- ")
reg(user,pswrd)