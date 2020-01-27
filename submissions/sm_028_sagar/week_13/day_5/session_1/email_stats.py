f1 = open('emails_rand.txt')

duplicate_email = ('duplicate_emails.txt','w')

unique_count = 0
obj = {}
for line in f1:
    email = line.strip()
    if email in obj:
        obj[email] = obj[email] + 1
    else:
        obj[email] = 1

print('no of unique email are ',len(obj.keys()))

for key,value in obj.items():
    duplicate_email.write(value + ' ' + key + '\n')


# print(obj)    
    
duplicate_email.close()
f1.close()