def read_csv():
    with open('KCQT.csv','r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            print(row)

read_csv()