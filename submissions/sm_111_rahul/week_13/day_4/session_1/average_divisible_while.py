sum = 0
num = 0
total = 0
while num < 20:
    if num % 4 == 0:
        sum = sum + num
        total = total + 1
    num = num + 1
print(sum/total)
