limit = int(input('Please enter the limit :'))
number = int(input('Please enter the number :'))
sum = 0
count = 0
for x in range(0, limit+1,number):
    if x%number == 0:
        sum = sum + x
        count = count + 1
print(sum/(count-1))    