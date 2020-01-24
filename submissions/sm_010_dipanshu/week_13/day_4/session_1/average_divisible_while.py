limit = 30
num = 3

sum_of_factors = 0
count = 0
avg = 0

i = 1
while i <= limit:
    if i % num == 0:
        sum_of_factors += i
        count += 1
    i += 1

avg = sum_of_factors / count
print(avg)
