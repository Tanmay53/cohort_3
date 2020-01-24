limit = 30
num = 3

sum_of_factors = 0
count = 0
avg = 0

for i in range(1, limit + 1):
    if i % num == 0:
        sum_of_factors += i
        count += 1

avg = sum_of_factors / count
print(avg)
