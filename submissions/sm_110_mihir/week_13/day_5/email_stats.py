f1=open("emails_rand.txt","r")
f2=open("duplicate_emails.txt","a")
emails=set()
duplicateEmails={}
for line in f1:
    element = line.rstrip()
    emails.add(line)
    if element in duplicateEmails:
        duplicateEmails[element]=duplicateEmails[element]+1
    else:
        duplicateEmails[element]=1



print("Unique emails count: ", str(len(emails)))
for key in duplicateEmails:
    if duplicateEmails[key]>1:
        f2.write(key+" "+str(duplicateEmails[key])+"\n")
    
f1.close()
f2.close()