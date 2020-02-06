# counting unique emails
f1 = open("emails_rand.txt", "r")

countUniqueEmail = 0
emailDict = dict()
for line in f1:
    email = line.split()
    if email[0] in emailDict:
        emailDict[email[0]] += 1
    else:
        emailDict[email[0]] = 1

for key in emailDict:
    if emailDict[key] == 1:
        countUniqueEmail += 1

print(countUniqueEmail)
f1.close()

# counting duplicate emails and writing it into another file
f2 = open("duplicate_emails.txt", "w")

for key in emailDict:
    if emailDict[key] > 1:
        f2.write(key + ": " + str(emailDict[key]) + "\n")

f2.close()
