# from flask import Flask
# from flask import Blueprint
# from flask import request, make_response, jsonify
# import csv
# import json
# import hashlib
# import os
# import base64
# import jwt

# auth = Blueprint("auth", __name__)

# # Signup function
# @auth.route("/signup", methods = ["POST"])
# def signup():
#     name = request.json["name"]
#     email = request.json["email"]
#     password = request.json["password"]
#     salt = generate_salt()
#     print(salt)
#     salted_password = salt + password
#     password_hash = hash_cycle(salted_password)

#     users_data = read_csv()
#     id = len(users_data) + 1
    
#     user_details = {"id": id, "name": name, "email": email, "salt": salt, "password_hash": password_hash}
    
#     for ele in users_data:
#         if ele["email"] == email:
#             return json.dumps({"message": "Email already present"})
#     write_csv(user_details)
#     return json.dumps({"message": "Signup Successful"})


# def read_csv():
#     data = list()
#     with open("data/users.csv", "r") as csvfile:
#         reader = csv.DictReader(csvfile)
#         for row in reader:
#             data.append(row)
#     return data

# def write_csv(user_data):
#     data = read_csv()
#     with open("data/users.csv", "a") as csvfile:
#         fieldnames = ["id", "name", "email", "salt", "password_hash"]
#         writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
#         if len(data) == 0:
#             writer.writeheader()
#         writer.writerow(user_data)

# def generate_salt():
#     salt = os.urandom(16)
#     # print(salt.encode('base-64'))
#     return str(base64.b64encode(salt))

# def md5_hash(string):
#     hash = hashlib.md5()
#     hash.update(string.encode('utf-8'))
#     # print(hash.hexdigest())
#     return hash.hexdigest()

# def hash_cycle(string):
#     for i in range(5):
#         string = md5_hash(string)
#     return string


# # Login function
# @auth.route("/login", methods = ["POST"])
# def login():
#     email = request.json["email"]
#     password = request.json["password"]

#     users_data = read_csv()
#     for ele in users_data:
#         if ele["email"] == email:
#             if ele["password_hash"] == hash_cycle(ele["salt"] + password):
#                 user_info = ele
#                 encode_data = jwt.encode({"id": user_info["id"]}, 'masai', algorithm='HS256')
#                 return json.dumps({"message": "Login Successful", "id": user_info["id"], "token": str(encode_data)})
#             else:
#                 return json.dumps({"message": "Incorrect Password"})
#     return json.dumps({"message": "Check your email and ensure you are a registered user."})

#     # Get Authorization Details
# @auth.route("/details", methods = ["POST"])
# def details():
#     decoded_response = token_decoder()
#     # print(decoded_response)
#     data = read_csv()
#     user_dict = dict()
#     for ele in data:
#         if ele["id"] == decoded_response["id"]:
#             user_dict["id"] = ele["id"]
#             user_dict["name"] = ele["name"]
#             user_dict["email"] = ele["email"]
#     return user_dict
    
# def token_decoder():
#     auth_header = request.headers.get("Authorization")
#     token_encoded = auth_header.split(" ")[1]
#     decode_data = jwt.decode(token_encoded, "masai", algorithm = ["HS256"])
#     return decode_data
    


