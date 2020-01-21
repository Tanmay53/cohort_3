number = [2,3,4,5,6,7,8,9,10]
sum = 0
for i in range(len(number)):
    if(number[i] % 2 == 0):
        sum += number[i]
print(sum)