print("Input diviser")
div_num = int(input())
print("Input max limit")
max_limit = int(input())
sum = 0
avg = 0
count = 1
for x in range(0,max_limit,div_num):
    count += 1
    sum += x
else:
    sum += x+div_num

avg = sum / count
print(avg)