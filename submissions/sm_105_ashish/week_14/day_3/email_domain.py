input_str = "hello@masaischool.com"

email_in_str = ''
flag = False
for i in input_str:
    if flag == True:
        email_in_str += i
    if i == "@":
        flag = True
print(email_in_str)