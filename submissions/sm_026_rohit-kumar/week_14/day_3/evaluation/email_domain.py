def process_email(email):
    new_str = ''
    valid = False

    for c in email:
        if valid:
            new_str = new_str + c
            continue
        
        if c is '@':
            valid = True
    
    return new_str


email = input('Please enter valid email address : ')
print(process_email(email))