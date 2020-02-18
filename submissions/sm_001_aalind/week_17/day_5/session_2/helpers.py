import csv

def getUsers():
  users = []

  with open('./data/users.csv') as file:
    reader = csv.DictReader(file)
    users = list(reader)
  
  return users

def add_user(name, email, mobile):
  users = getUsers()
  current_user_id = int(users[-1]['id']) + 1 if len(users) > 0 else 1
  user = {
    'id': current_user_id,
    'name': name,
    'email': email,
    'mobile': mobile
  }

  fieldnames = ['id', 'name', 'email', 'mobile']
  with open('./data/users.csv', 'a') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writerow(user)
    
  return {'error': False, 'message': 'User Added'}

def getUser(user_id):
  users = getUsers()

  for user in users:
    if int(user['id']) == user_id:
      return user

  return {}

def getUserAddresses(user_id):
  addresses = getAddresses()
  user_addresses = []

  for address in addresses:
    if int(address['user_id']) == user_id:
      user_addresses.append(address)

  return user_addresses

def modifyUser(user_id, name, email, mobile):
  users = getUsers()
  error = True

  for user in users:
    if int(user['id']) == user_id:
      user['name'] = name
      user['email'] = email
      user['mobile'] = mobile
      error = False
      break

  if error:
    return {'error': error, 'message': 'User Not Found'}
  else:
    fieldnames = ['id', 'name', 'email', 'mobile']

    with open('./data/users.csv', 'w') as file:
      writer = csv.DictWriter(file, fieldnames=fieldnames)
      writer.writeheader()
      for user in users:
        writer.writerow(user)

    return {'error': error, 'message': 'User Updated Successfully'}

def deleteUser(user_id):
  users = getUsers()
  user_addresses = getAddresses()
  error = True

  for i in range(len(users)):
    if int(users[i]['id']) == user_id:
      error = False
      users[i] = {}
      break
  
  for i in range(len(user_addresses)):
    if int(user_addresses[i]['user_id']) == user_id:
      user_addresses[i] = {}

  if error:
    return {'error': error, 'message': 'User Not Found'}
  else:
    fieldnames = ['id', 'name', 'email', 'mobile']

    with open('./data/users.csv', 'w') as file:
      writer = csv.DictWriter(file, fieldnames=fieldnames)
      writer.writeheader()
      for user in users:
        if len(user) != 0:
          writer.writerow(user)

    fieldnames = ['id', 'user_id', 'line_1', 'line_2', 'city', 'pincode']

    with open('./data/addresses.csv', 'w') as file:
      writer = csv.DictWriter(file, fieldnames=fieldnames)
      writer.writeheader()
      for address in user_addresses:
        if len(address) != 0:
          writer.writerow(address)

  return {'error': error, 'message': 'User Deleted Successfully'}

def addAddress(user_id, line_1, line_2, city, pincode):
  user = getUser(user_id)

  if len(user) == 0:
    return {'error': True, 'message': 'User Not Found'}
    
  addresses = getAddresses()
  
  current_address_id = int(addresses[-1]['id']) + 1 if len(addresses) > 0 else 1
  address = {
    'id': current_address_id,
    'user_id': user_id,
    'line_1': line_1,
    'line_2': line_2,
    'city': city,
    'pincode': pincode
  }

  fieldnames = ['id', 'user_id', 'line_1', 'line_2', 'city', 'pincode']
  with open('./data/addresses.csv', 'a') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writerow(address)

  return {'error': False, 'message': 'Address Added Successfully'}

def getAddresses():
  addresses = []

  with open('./data/addresses.csv') as file:
    reader = csv.DictReader(file)
    addresses = list(reader)

  return addresses

def modifyAddress(address_id, line_1, line_2, city, pincode):
  addresses = getAddresses()
  error = True

  for address in addresses:
    if int(address['id']) == address_id:
      address['line_1'] = line_1
      address['line_2'] = line_2
      address['city'] = city
      address['pincode'] = pincode
      error = False
      break

  if error:
    return {'error': error, 'message': 'Address Not Found'}
  else:
    fieldnames = ['id', 'user_id', 'line_1', 'line_2', 'city', 'pincode']

    with open('./data/addresses.csv', 'w') as file:
      writer = csv.DictWriter(file, fieldnames=fieldnames)
      writer.writeheader()

      for address in addresses:
        writer.writerow(address)

    return {'error': False, 'message': 'Address Updated Successfully'} 

def getAddress(address_id):
  addresses = getAddresses()

  for address in addresses:
    if int(address['id']) == address_id:
      return address

  return {}

def deleteAddress(address_id):
  addresses = getAddresses()
  error = True

  for index, address in enumerate(addresses):
    if int(address['id']) == address_id:
      del addresses[index]
      error = False
      break

  if error:
    return {'error': error, 'message': 'Address Not Found'}
  else:
    fieldnames = ['id', 'user_id', 'line_1', 'line_2', 'city', 'pincode']
    
    with open('./data/addresses.csv', 'w') as file:
      writer = csv.DictWriter(file, fieldnames=fieldnames)
      writer.writeheader()

      for address in addresses:
        writer.writerow(address)

    return {'error': error, 'message': 'Address Deleted Successfully'}