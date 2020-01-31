# Read the data from the file and find out the count of unique email address from the file
import csv

def find_unique_emails_count():
    count = 0
    temp_list = []
    with open('data/emails_rand.txt') as inputfile:
        reader = csv.reader(inputfile)
        for row in reader:
            temp_list.append(row[0])

    unique = set(temp_list)
    unique_count = len(unique)
    return unique_count

print(find_unique_emails_count())