email_address = input("Enter the email address")

# @param : "email"
def domain(email) :
    domain_name = ""
    is_domain = False
    for char in email:
        if is_domain:
            domain_name += char
        if char is "@":
            is_domain = True
    return  "Invalid Email Address" if len(domain_name) is 0 else domain_name

print(domain(email_address))