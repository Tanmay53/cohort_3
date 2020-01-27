'''
Read the data from the file and find out the count of unique email address from the file
Create a file called duplicate_emails.txt with all the emails that are duplicates along with the count of no of times they are repeated
'''
f1 = open("duplicate_emails.txt", "a")
f = open("emails_rand.txt", "r")

unique_email = set()
duplicate_email = dict()

for x in f:
    unique_email.add(x)
    if x in duplicate_email:
        duplicate_email[x] = duplicate_email[x] + 1
    else:
        duplicate_email[x] = 1


print("Unique Emails: ", str(len(unique_email)))

for x in duplicate_email:
    if duplicate_email[x] > 1:
        f1.write(str(duplicate_email[x]) + " : " + x + "\n")

f.close()
f1.close()
