limit = int(input("Enter limit: "))
num = int(input("Enter divisor: "))

start = 1
sum = 0
count = 0

while start <= limit:
    if start % num == 0:
        sum += start
        count += 1
    start += 1

print(sum/count)