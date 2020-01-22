email="hello@masaischool.com"
domain=""
flag=False
for char in email:
    if char == '@':
        flag=True
        continue
    if flag:
        domain+=char
print (domain)
