div_num = 5
max_limit = 30
sum = 0
avg = 0
count = 0
for x in range(0,max_limit,div_num):
    count += 1
    sum += x
else:
    sum += x+div_num

avg = sum / count
print(avg)