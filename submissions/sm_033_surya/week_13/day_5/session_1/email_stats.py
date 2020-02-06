import csv

output_set = set()


def readinput_file():
    with open("emails_rand.txt", "r") as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            output_set.add(row[0])
    return output_set


def data_write(dict):
    with open("duplicate_emails.txt", "w") as csvfile:
        writer = csv.writer(csvfile, delimiter=",", quotechar='"')
        for a in dict:
            if dict[a] > 1:
                writer.writerow([a, dict[a]])


def duplicates(unique_file):
    dict = {}
    with open("emails_rand.txt", "r") as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            if row[0] not in dict:
                dict.update({row[0]: 1})
            else:
                dict[row[0]] = dict[row[0]]+1
    data_write(dict)


countof_Unique = readinput_file()
print(len(countof_Unique))
duplicates(countof_Unique)
