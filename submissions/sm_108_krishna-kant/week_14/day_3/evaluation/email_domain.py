email_address = input("Enter the email address")

# @param : "email"
def domain(email) :
    domain_name = ""
    for i in range(len(email)):
        if email[i] is "@":
            domain_name = email[i+1:]
    return  "Invalid Email Address" if len(domain_name) is 0 else domain_name

print(domain(email_address))