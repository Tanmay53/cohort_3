import csv


def read_csv():
    with open('KCQT.csv', 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for line in csv_reader:
            print(line)

def write_csv():
    with open('KCQT.csv', 'w') as csv_writer:
        field_names = ['year', 'month', 'min_temp', 'max_temp']
        writer = csv.DictWriter(csv_writer, fieldnames = field_names)
