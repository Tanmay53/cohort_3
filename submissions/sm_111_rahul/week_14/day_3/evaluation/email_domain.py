# no inbuit function

email = "rahul@gmail.com"
flag = False
domain = ""
for i in email:
    if i == "@":
        flag = True
    elif flag == True:
        domain += i
print(domain)




#  by using split

li = email.split("@")
print(li[1])