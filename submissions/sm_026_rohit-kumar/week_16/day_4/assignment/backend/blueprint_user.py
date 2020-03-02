from flask import Blueprint, request
import os, csv, json

user = Blueprint('user', __name__)

# write routes below

# utility functions

def get_all_users():
    if os.path.exists('users.csv'):
        file_handle = open('users.csv', 'r')
        all_user = list(csv.DictReader(file_handle))
        file_handle.close()

        return all_user
    else:
        return []

def get_next_userid():
    all_users = get_all_users()
    if len(all_users) > 0:
        user_id = int(all_users[-1]['id'])
        return user_id + 1
    else:
        return 1

def add_single_user(user):
    field_names = ['id', 'name', 'mobile', 'email']

    if os.path.exists('users.csv'):
        file_handle = open('users.csv', 'a')
        writer = csv.DictWriter(file_handle, fieldnames = field_names)
        writer.writerow(user)   
        # writer.writerow({'id': user['id'], 'name': user['name'], 'mobile': user['mobile'], 'email': user['email']})
        file_handle.close()
    else:
        file_handle = open('users.csv', 'w')
        writer = csv.DictWriter(file_handle, fieldnames = field_names)
        writer.writeheader()
        
        # write row
        writer.writerow(user)
        # writer.writerow({'id': user['id'], 'name': user['name'], 'mobile': user['mobile'], 'email': user['email']})
        file_handle.close()


def write_all_records(users):
    field_names = ['id', 'name', 'mobile', 'email']
    file_handle = open('users.csv', 'w')
    writer = csv.DictWriter(file_handle, field_names)
    writer.writeheader()
    
    for user in users:
        writer.writerow(user)
    
    file_handle.close()


@user.route('/listing')
def listing():
    all_users = get_all_users()
    return json.dumps(all_users)    

@user.route('/create', methods=['POST']) 
def create():
    name = request.json['name']
    mobile = request.json['mobile']
    email = request.json['email']

    user_id = get_next_userid()

    user = {'id': user_id, 'name': name, 'mobile': mobile, 'email': email}
    add_single_user(user)

@user.route('/delete/<int:user_id>')
def delete(user_id):
    all_users = get_all_users()
    new_users = []
    for user in all_users:
        if int(user['id']) == user_id:
            continue
        # keep this user
        new_users.append(user)
    # write records back to file    
    write_all_records(new_users)

    
@user.route('/edit/<int:user_id>', methods=['PUT'])
def edit(user_id):
    name = request.json['name']         
    mobile = request.json['mobile']
    email = request.json['email']

    # user = {'id': user_id, 'name': name, 'mobile': mobile, 'email': email}
    all_users = get_all_users()
    for user in all_users:
        if int(user['id']) == user_id:
            user['name'] = name
            user['mobile'] = mobile
            user['email'] = email
            break
    # write records back to file    
    write_all_records(all_users)


