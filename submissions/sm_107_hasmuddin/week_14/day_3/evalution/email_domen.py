email = str(input("Email: "))
output = ""
condition = False
for em in email:
    if em == "@":
        condition = True
        continue
    if condition is True:
        output += em

print(output)