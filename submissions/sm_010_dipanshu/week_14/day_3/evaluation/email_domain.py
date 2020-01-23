print("Please enter the email")
email = input()

# email = "hello@masaischool.com"  # hard coded value

split_index = 0
count = 0

for char in email:
    if (char == '@'):
        split_index = count + 1
        break
    count += 1

domain = email[split_index:]
print("The domain is:", domain)
