input_str = "hello@masaischool.com"

email_in_str = ''
for i in range(len(input_str)):
    if input_str[i] == "@":
        email_in_str += input_str[i+1:]
print(email_in_str)