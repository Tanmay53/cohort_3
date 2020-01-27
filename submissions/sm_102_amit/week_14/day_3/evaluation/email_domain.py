# Find the email domain
email = input("Enter email address: ")
result = ""
for i in range(len(email)):
    if email[i] == "@":
        result = email[i + 1:]
print(result)

# Sample Case:
'''
Enter email address: akamit21@gmail.com
gmail.com
'''
