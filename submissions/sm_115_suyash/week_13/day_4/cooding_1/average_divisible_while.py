print("Input diviser")
div_num = int(input())
print("Input max limit")
max_limit = int(input())
count = 0
avg = 0
sum = 0
i = 0
while i <= max_limit:
    if i % div_num == 0:
        count += 1
        sum += i
    i += 1
avg = sum / count
print(avg)
    