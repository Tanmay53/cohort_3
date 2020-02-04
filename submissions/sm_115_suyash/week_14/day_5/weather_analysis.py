import csv

def wether_summary():
    with open("./KCQT.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            