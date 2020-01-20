sum = 0
num = 0
total = 0
for i in range(0, 20):
    if i % 4 == 0:
        sum = sum + i
        total = total + 1
    num = num + 1
print(sum/total)
