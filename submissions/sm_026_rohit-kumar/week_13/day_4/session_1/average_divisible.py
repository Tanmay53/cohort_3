limit = int(input('Enter limit : '))
num = int(input('Enter number : '))

sum = 0
for i in range(limit + 1):
    if i % num == 0:
        sum = sum + i

print(sum)