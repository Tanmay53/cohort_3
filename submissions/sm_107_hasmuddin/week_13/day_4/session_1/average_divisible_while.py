''' Print the average of all the
numbers from 0 to the given limit that are divisible by the given number'''
limit = int(input("limit: "))
num = int(input("Number: "))
sum = 0
count = 0
i = 0
while i < limit:
    if i % num == 0:
        sum += i
        count += 1
    i += 1
ave = sum/count
print(ave)