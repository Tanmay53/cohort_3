given_email = input()


email_flag = False
email_domain = ""
for i in range(len(given_email)):
    if given_email[i] == "@":
       email_domain += given_email[i+1:]
print(email_domain)