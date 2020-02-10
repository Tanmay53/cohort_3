'''
Create a file called duplicate_emails.txt with all the emails
that are duplicates along with the count of no of times they are repeated
'''

emailFile = open("emails_rand.txt")
duplicateFile = open("duplicate_emails.txt", "w+")
emailsData = []
for line in emailFile:
    if "<td" in line.split():
        # print(line.split())
        ar = line.split()
        fakeData = ar[-1:]
        layer = fakeData[0].split(">")
        innerLayer = layer[1].split("<")
        emails = innerLayer[0]
        if not len(emails) ==0:
            emailsData.append(emails)

originals = {""}
for email in emailsData:
    originals.add(email)

for original in originals:
    count = 0
    em=""
    for duplicate in emailsData:
        if original == duplicate:
            count += 1
            em += original
    duplicateFile.write(f'{em} {count} \n')

duplicateFile.close()
emailFile.close()