limit = int(input('Enter limit : '))
num = int(input('Enter number : '))

sum = 0
i = 0

while i <= limit:
    if i % num == 0:
        sum = sum + i
    i = i + 1


print(sum)    