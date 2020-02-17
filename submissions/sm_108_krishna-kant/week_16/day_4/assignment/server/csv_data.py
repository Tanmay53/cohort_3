import csv

ADDRESS_CSV_PATH="/home/coder-hex/Desktop/OpenSource/cohort_3/submissions/sm_108_krishna-kant/week_16/day_4/assignment/server/database/address.csv"
USER_CSV_PATH="/home/coder-hex/Desktop/OpenSource/cohort_3/submissions/sm_108_krishna-kant/week_16/day_4/assignment/server/database/users.csv"

def edit_address(user_id,id,line_1,line_2,city,pincode,task_type):
    address_data = read_address()
    updated_address = {"id":id,"user_id":user_id,"line_1":line_1,"line_2":line_2,"city":city,"pincode":pincode} 
    for i in range(len(address_data)):
        if address_data[i]['user_id'] == user_id and address_data[i]['id'] == id:
            if task_type == "edit":
                address_data[i] = updated_address
            elif task_type == "delete":
                updated_address = address_data.pop(i)
                break
    with open(ADDRESS_CSV_PATH,"w") as addresscsv:
        fieldsname = ['id','user_id','line_1','line_2','city','pincode']
        writer = csv.DictWriter(addresscsv,fieldnames=fieldsname)
        writer.writeheader()
        for row in address_data:
            writer.writerow(row)
        return updated_address

def edit_user(user_id,name,email,mobile,task_type):
    user_data = read_user()
    updated_user = {"id":user_id,"name":name,"mobile":mobile,"email":email}
    for i in range(len(user_data)):
        if user_data[i]['id'] == user_id:
            if task_type == 'edit':
                user_data[i] = updated_user
            elif task_type == "delete":
                user_data.pop(i)
                break
    with open(USER_CSV_PATH,"w") as usercsv:
        fieldnames = ['id','name','mobile','email']
        writer = csv.DictWriter(usercsv,fieldnames=fieldnames)
        writer.writeheader()
        for row in user_data:
            writer.writerow(row)  
    return updated_user
    
def get_user(user_id):
    user_data = read_user()
    address = read_address()
    user_details = {} 
    for row in user_data:
        if row["id"] == user_id:
            user_details = row
    address_list = []        
    for row in address:
        if row["user_id"] == user_id:
            print(row["user_id"])
            address_list.append(row)
    user_details["address"] = address_list
    return user_details

def write_user(id,name,mobile,email):
    user_data = {"id":id,"name":name,"mobile":mobile,"email":email}
    with open(USER_CSV_PATH,'a') as usercsv:
        fieldnames = ['id','name','mobile','email']
        writer = csv.DictWriter(usercsv,fieldnames=fieldnames)
        writer.writerow(user_data)
    return user_data

def write_address(id,user_id,line_1,line_2,city,pincode):
    address_data = {"id":id,"user_id":user_id,"line_1":line_1,"line_2":line_2,"city":city,"pincode":pincode}
    with open(ADDRESS_CSV_PATH , 'a') as addresscsv:
        fieldsname = ['id','user_id','line_1','line_2','city','pincode']
        writer = csv.DictWriter(addresscsv,fieldnames=fieldsname)
        writer.writerow(address_data)
    return address_data

def read_address():
    address = []
    with open(ADDRESS_CSV_PATH) as addresscsv:
        reader = csv.DictReader(addresscsv)
        for row in reader:
            address.append(row)
    return address

def read_user():
    user_data = []
    with open(USER_CSV_PATH) as usercsv:
        reader = csv.DictReader(usercsv)
        for row in reader:
            user_data.append(row)
    return user_data