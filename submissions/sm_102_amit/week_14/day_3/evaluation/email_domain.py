# Find the email domain
email = input("Enter email address: ")
flg = False
result = ""
for x in email:
    if flg:
        result += x

    if x == "@":
        flg = True
print(result)

# Sample Case:
'''
Enter email address: akamit21@gmail.com
gmail.com
'''
