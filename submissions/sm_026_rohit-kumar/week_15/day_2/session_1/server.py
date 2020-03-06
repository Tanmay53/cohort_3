from flask import Flask, request
import csv, json, os


app = Flask(__name__)



def get_data_from_csvfile(filter='ALL'):
    file_handle = open('data/groceries.csv', 'r')
    records = list(csv.DictReader(file_handle))
    
    if filter == 'PURCHASED':
        records = [x for x in records if x['purchased'] == '1']
    elif filter == 'NOT_PURCHASED':
        records = [x for x in records if x['purchased'] == '0']

    result = {'headers': ['item', 'quantity', 'purchased'],
              'data': records
             }
    
    file_handle.close()
    return result

def write_data_to_csvfile(item, quantity, purchased):
    fieldnames = ['item', 'quantity', 'purchased']
    if os.path.exists('data/groceries.csv'):
        file_handle = open('data/groceries.csv', 'a')
        writer = csv.DictWriter(file_handle, fieldnames=fieldnames)
    else:
        file_handle = open('data/groceries.csv', 'w')
        writer = csv.DictWriter(file_handle, fieldnames=fieldnames)
        writer.writeheader()

    writer.writerow({'item': item, 'quantity': quantity, 'purchased': purchased})
    file_handle.close()


def write_all_records_to_csv(records):
    fieldnames = ['item', 'quantity', 'purchased']
    file_handle = open('data/groceries.csv', 'w')
    writer = csv.DictWriter(file_handle, fieldnames=fieldnames)
    writer.writeheader()
    for row in records:
        writer.writerow(row)

    file_handle.close()

def read_all_records_from_csv():
    file_handle = open('data/groceries.csv', 'r')
    reader = csv.DictReader(file_handle)
    records = list(reader)
    file_handle.close()
    return records


def edit_csvfile(item_no, item, quantity, purchased):
    records = read_all_records_from_csv()
    # validate item no
    if (item_no - 1) < 0 or (item_no - 1) >= len(records):
        return

    # make changes
    records[item_no - 1] = {'item': item, 'quantity': quantity, 'purchased': purchased}
    # write data back to file
    write_all_records_to_csv(records)

    return json.dumps(records)


@app.route('/listing')  
def listing():
    result = get_data_from_csvfile()
    return json.dumps(result)

@app.route('/create', methods=['POST'])
def create():
    item = request.json['item']
    quantity = request.json['quantity']
    purchased = 0

    write_data_to_csvfile(item, quantity, purchased)


@app.route('/edit/<int:item_no>', methods=['POST'])
def edit(item_no):
    if request.method == 'POST':
        item = request.json['item']
        quantity = request.json['quantity']
        purchased = request.json['purchased']
        
        # edit the file
        return edit_csvfile(item_no, item, quantity, purchased)

@app.route('/delete', methods=['POST'])
def delete():
    item_no = int(request.json['item_no'])
    
    # read all records
    records = read_all_records_from_csv()
    # validate item no
    if (item_no - 1) < 0 or (item_no - 1) >= len(records):
        return

    # delete the record
    records.pop(item_no - 1)
    
    write_all_records_to_csv(records)
    return json.dumps(records)

@app.route('/purchased', methods=['GET', 'POST'])
def purchased():
    if request.method == 'GET':
        result = get_data_from_csvfile('PURCHASED')
        return json.dumps(result)
    
    if request.method == 'POST':
        item_no = request.json['item_no']
        
        # read all records
        records = read_all_records_from_csv()
        if (item_no - 1) < 0 or (item_no - 1) >= len(records):
            return

        records[item_no - 1]['purchased'] = 1
        write_all_records_to_csv(records)
        return json.dumps(records)
        

