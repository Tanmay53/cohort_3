li = [1, 2, 3, 4, 5, 6]
sum = 0
for i in range(0, len(li)):
    if li[i] % 2 == 0:
        sum = sum + li[i]
print(sum)
