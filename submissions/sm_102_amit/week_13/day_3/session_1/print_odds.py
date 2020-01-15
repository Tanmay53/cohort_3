# Print the odd numbers from 0 to given limit
num = int(input("Enter the limit: "))
i = 0
while i < num:
    if i % 2 != 0:
        print(i)
    i += 1
