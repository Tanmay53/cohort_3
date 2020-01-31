# Create a file called duplicate_emails.txt with all the emails that are duplicates along with the count of no of times they are repeated

import csv

def duplicate_emails_count():
    count = 0
    temp_list = []
    duplicates = {}
    with open('data/emails_rand.txt') as inputfile:
        reader = csv.reader(inputfile)
        for row in reader:
            temp_list.append(row[0])
        # print(temp_list)

        for i in range(len(temp_list)):
            if temp_list[i] not in duplicates:
                duplicates[temp_list[i]] = 1
            else:
                duplicates[temp_list[i]] = duplicates.get(temp_list[i]) + 1

        # print(duplicates)
        duplicate_emails = []
        duplicate_occurance = []

        for key, value in duplicates.items():
            if value>1:
                duplicate_emails.append(key)
                duplicate_occurance.append(value)
        return (duplicate_emails, duplicate_occurance)

duplicate_emails = (duplicate_emails_count())[0]
duplicate_occurance = (duplicate_emails_count())[1]

# print(duplicate_emails)
# print(duplicate_occurance)

def write_csv():
    with open('data/duplicate_emails.txt', 'w') as inputfile:
        writer = csv.writer(inputfile, delimiter=' ')
        writer.writerow(['Email Id', 'Occurance Count'])
        for i in range(len(duplicate_emails)):
            writer.writerow([duplicate_emails[i] , duplicate_occurance[i]  ])
        
write_csv()