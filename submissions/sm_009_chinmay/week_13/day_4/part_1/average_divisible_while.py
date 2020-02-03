# Print the average of all the numbers from 0 to the given limit that are divisible by the given number (HINT: User while)

limit = int(input('Enter limit: '))
num = int(input('Enter number: '))
sum = 0
cnt = 0

while limit >= 0:
    if(limit % num == 0):
        sum = sum + limit
        cnt = cnt + 1
    limit = limit - 1
print(sum/cnt)