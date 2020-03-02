from flask import Blueprint, request
import os, json, csv

address = Blueprint('address', __name__)

# utility methods
def get_all_address():
    if os.path.exists('addresses.csv'):
        file_handle = open('addresses.csv', 'r')
        all_address = list(csv.DictReader(file_handle))
        file_handle.close()

        return all_address
    else:
        return [] 


def get_next_addressid(user_id):
    all_address = get_all_address()
    if len(all_address) == 0:
        return 1
    else:
        address_id = 0
        for addr in all_address:
            if int(addr['user_id']) == user_id:
                address_id = int(addr['id'])
        return address_id + 1           

def add_single_address(address):
    field_names = ['id', 'user_id', 'line_1', 'line_2', 'city', 'pincode']
    if os.path.exists('addresses.csv'):
        file_handle = open('addresses.csv', 'a')
        writer = csv.DictWriter(file_handle, fieldnames = field_names)
        writer.writerow(address)   
        file_handle.close()
    else:
        file_handle = open('addresses.csv', 'w')
        writer = csv.DictWriter(file_handle, fieldnames = field_names)
        writer.writeheader()
        
        # write row
        writer.writerow(address)
        file_handle.close()




@address.route('/add/<int:user_id>', methods=['POST'])
def add_address(user_id):
    line_1  = request.json['line_1']
    line_2  = request.json['line_2']
    city    = request.json['city']
    pincode = request.json['pincode']
    addr_id = get_next_addressid(int(user_id))

    address = {'id': addr_id, 'user_id': user_id, 'line_1': line_1,
               'line_2': line_2, 'city': city, 'pincode': pincode}
    # return json.dumps(address)
    add_single_address(address)



@address.route ('/listing/<int:user_id>')
def address_listing(user_id):
    all_address = get_all_address()
    user_address = []
    for address in all_address:
        if int(address['user_id']) == user_id:
            user_address.append(address)
    return json.dumps(user_address)


def write_all_address(addresses):
    field_names = ['id', 'user_id', 'line_1', 'line_2', 'city', 'pincode']
    file_handle = open('addresses.csv', 'w')
    writer = csv.DictWriter(file_handle, field_names)
    writer.writeheader()
    
    for address in addresses:
        writer.writerow(address)

    file_handle.close()    
  

def edit_user_address(user_id, addr_id, addr):
    all_address = get_all_address()

    for address in all_address:
        if int(address['user_id']) == user_id and int(address['id']) == addr_id:
            address['line_1'] = addr['line_1']
            address['line_2'] = addr['line_2']
            address['city'] = addr['city']
            address['pincode'] = addr['pincode']

    write_all_address(all_address)


def delete_address(user_id, addr_id = None):
    all_address = get_all_address()
    new_address = []
    if addr_id == None:
        for address in all_address:
            if int(address['user_id']) == user_id:
                continue
            # keep this user
            new_address.append(address)
    else:
        for address in all_address:
            if int(address['user_id']) == user_id and int(address['id']) == addr_id:
                continue
            # keep this user
            new_address.append(address)
    # write records back to file    
    write_all_address(new_address)



@address.route ('/edit', methods=['PUT'])
def edit_address():
    user_id = int(request.json['user_id'])
    addr_id = int(request.json['addr_id'])
    line_1 = request.json['line_1']
    line_2 = request.json['line_2']
    city = request.json['city']
    pincode = request.json['pincode']

    addr = {'line_1': line_1, 'line_2': line_2, 'city': city, 'pincode': pincode}
    edit_user_address(user_id, addr_id, addr)
    # return json.dumps(addr)

@address.route ('/delete/<int:user_id>')
def delete_all_address(user_id):
    delete_address(user_id)

@address.route ('/delete/<int:user_id>/<int:addr_id>')
def delete_single_address(user_id, addr_id):
    delete_address(user_id, addr_id)
