def process_email(email):
    for i, c in enumerate(email):
        if c is '@':
            return email[i+1:]
            
email = input('Please enter valid email address : ')
print(process_email(email))