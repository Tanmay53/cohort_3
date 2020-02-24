import os
import csv
import hashlib
import secrets

def read_file():
    try:
        d = []
        with open('data/users.csv') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                d.append({'id': int(row['id']), 'name': row['name'], 'email': row['email'], 'salt': row['salt'], 'password_hash': row['password_hash']})
        return d
    except FileNotFoundError:
        return []

def write_file(d):
    if not os.path.exists('data'):
        os.mkdir('data')
    with open('data/users.csv', 'w') as csvfile:
        fieldnames = ['id', 'name', 'email', 'salt', 'password_hash']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()
        for a in d:
            writer.writerow({'id': a['id'], 'name': a['name'], 'email': a['email'], 'salt': a['salt'], 'password_hash': a['password_hash']})

def generate_salt():
    return secrets.token_urlsafe(16)

def generate_hash(string, salt):
    hash_string = salt + string + salt
    hash = hashlib.md5()
    for _ in range(50):
        hash.update(hash_string.encode('UTF-8'))
        hash_string = hash.hexdigest()
    return hash_string