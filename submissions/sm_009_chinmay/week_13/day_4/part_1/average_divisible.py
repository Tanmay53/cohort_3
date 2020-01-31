# Print the average of all the numbers from 0 to the given limit that are divisible by the given number (HINT: User range())

limit = int(input('Enter limit: '))
num = int(input('Enter number: '))
sum = 0
cnt = 0

for i in range(limit+1):
    if i % num == 0:
        sum = sum + i
        cnt = cnt + 1

print(sum/cnt)