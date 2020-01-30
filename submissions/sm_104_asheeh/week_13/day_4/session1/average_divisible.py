limit = int(input())
num = int(input())
count = 0
sum = 0
for i in range(0, limit + 1, 1):
    if i % num == 0:
        sum += i
        count += 1
avg = sum / count
print("Average is: ",avg)