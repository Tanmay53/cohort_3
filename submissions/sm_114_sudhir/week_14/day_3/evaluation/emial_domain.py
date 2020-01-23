given_email = input()


email_flag = False
email_domain = ""
for i in given_email:
    if i == "@":
        email_flag = True
    elif email_flag == True:
        email_domain += i
print(email_domain)