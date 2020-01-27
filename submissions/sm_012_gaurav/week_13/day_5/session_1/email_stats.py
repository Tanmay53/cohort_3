emailFile = open('emails_rand.txt', 'r')
dupEmail = open('duplicate_emails.txt', 'a')
emailsList = emailFile.read().strip().split('\n')
d = {}
for a in emailsList:
    if a in d:
        d[a] += 1
    else:
        d[a] = 1

print("No of Unique Email Addresses: ",len(d))

for k, v in d.items():
    if v > 1:
        dupEmail.write(k + ' ' + str(v - 1) + '\n')

emailFile.close()
dupEmail.close()