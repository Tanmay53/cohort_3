import hashlib
import os
import base64

def generate_salt():
    salt=os.urandom(16)
    return str(base64.b64encode(salt)) 

def md5_hash(string):
    salt=generate_salt()
    print(salt)
    new_string=string+salt
    hash=hashlib.md5()
    hash.update(new_string.encode('utf-8'))
    print(hash.hexdigest())
    print(salt)
md5_hash("masai")
