import hashlib
import secrets
import jwt

def generate_salt():
    return secrets.token_urlsafe(16)

def generate_hash(password, salt):
    hash = hashlib.md5()
    hash_string = salt + password + salt
    for _ in range(50):
        hash.update(hash_string.encode('UTF-8'))
        hash_string = hash.hexdigest()
    return hash_string

def generate_token(data):
    return jwt.encode(data, 'ryder', algorithm='HS256').decode()

def decode_token(token):
    return jwt.decode(token, 'ryder', algorithms=['HS256'])