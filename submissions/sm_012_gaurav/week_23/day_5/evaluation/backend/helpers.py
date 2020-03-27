import jwt
import hashlib
import secrets

def generate_salt():
    return secrets.token_urlsafe(16)

def generate_hash(password, salt):
    md5 = hashlib.md5()
    hash_string = password + salt
    for _ in range(50):
        md5.update(hash_string.encode('UTF-8'))
        hash_string = md5.hexdigest()
    return hash_string

def generate_token(data):
    return jwt.encode(data, 'secret', algorithm='HS256').decode()

def decode_token(token):
    return jwt.decode(token, 'secret', algorithms=['HS256'])

def check_token(cursor, token):
    userId = decode_token(token)['id']
    cursor.execute('''select * from users where id=%s''', (userId, ))
    result = cursor.fetchone()
    if not result:
        return False
    else:
        return True