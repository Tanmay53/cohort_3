import csv
import hashlib
import secrets

def user_registration(name, email, password):
  users = getUsers()

  for user in users:
    if user['email'] == email:
      return {'error': True, 'message': 'Registration Failed, Email Already Registered'}

  salt = get_salt()
  password_hash = get_hash(password) + salt

  for i in range(69):
    password_hash = get_hash(password_hash)

  user = {
    'id': int(users[-1]['id']) + 1 if len(users) != 0 else 1,
    'name': name,
    'email': email,
    'salt': salt,
    'password_hash': password_hash
  }

  fieldnames = ['id', 'name', 'email', 'salt', 'password_hash']
  with open('./data/users.csv', 'a') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writerow(user)

  return {'error': False, 'message': 'Registration Successful'}

def user_login(email, password):
  users = getUsers()
  registered_user = {}

  for user in users:
    if user['email'] == email:
      registered_user = user

  if len(registered_user) == 0:
    return {'error': False, 'message': 'Login Failed'}
  
  salt = registered_user['salt']
  password_hash = get_hash(password) + salt  

  for i in range(69):
    password_hash = get_hash(password_hash)

  if password_hash == registered_user['password_hash']:
    return {'error': False, 'message': 'Successful Log In'}
  else:
    return {'error': True, 'message': 'Login Failed'}

def getUsers():
  users = []

  with open('./data/users.csv') as file:
    reader = csv.DictReader(file)
    for user in reader:
      users.append(user)

  return users

def get_hash(pssd):
  my_hash = hashlib.md5(pssd.encode('utf-8'))
  
  return my_hash.hexdigest()

def get_salt():
  salt = secrets.token_urlsafe(16)
  
  return salt
