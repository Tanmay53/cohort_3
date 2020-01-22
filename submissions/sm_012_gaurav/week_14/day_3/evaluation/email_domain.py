email = input("Enter Email: ")
idx = 0
for a in email:
    idx += 1
    if a == "@":
        break
print(email[idx : ])