limit = int(input('Please enter the limit :'))
number = int(input('Please enter the number :'))
i = 0
sum = 0
count = 0
while i <= limit:
    if i % number == 0:
        sum = sum + i
        count = count + 1
    i = i + number   
print(sum/(count-1))
