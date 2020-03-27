from helpers import generate_hash, generate_salt, generate_token

def userExists(cursor, email):
    cursor.execute('''select * from users where email = %s''', (email, ))
    result = cursor.fetchone()
    if result:
        return True
    else:
        return False

def addUser(cursor, name, email, password):
    salt = generate_salt()
    password_hash = generate_hash(password, salt)
    cursor.execute('''insert into users(name, email, password, salt) values(%s, %s, %s, %s)''', (name, email, password_hash, salt))

def checkCredentials(cursor, email, password):
    cursor.execute('''select * from users where email = %s''', (email, ))
    result = cursor.fetchone()
    password_hash = generate_hash(password, result['salt'])
    token = None
    if password_hash == result['password']:
        token = generate_token({'id': result['id']})
    return token
    