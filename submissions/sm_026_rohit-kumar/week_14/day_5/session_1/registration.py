import csv, os


def write_to_file(username, password):
    fieldnames = ['username', 'password']
    
    csv_writer = None
    if os.path.exists('users.csv'):
        csv_writer = open('users.csv', 'a')
        writer = csv.DictWriter(csv_writer, fieldnames=fieldnames)
    else:
        csv_writer = open('users.csv', 'w')
        writer = csv.DictWriter(csv_writer, fieldnames=fieldnames)
        writer.writeheader()
    
    writer.writerow({'username': username, 'password': password})
    csv_writer.close()

username = input('Enter username : ')
password = input('Enter password : ')


def check_for_presense(username, password):
    fieldnames = ['username', 'password']
    csv_reader = open('users.csv', 'r')
    reader = csv.DictReader(csv_reader, fieldnames=fieldnames)
    for row in reader:
        if row['username'] == username:
            return False
    return True


res = check_for_presense(username, password)
if res:
    write_to_file(username, password)
else:
    print('Username already exists !')
