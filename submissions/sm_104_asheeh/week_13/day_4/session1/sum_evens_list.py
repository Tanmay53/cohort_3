# li = list(map(int, input().split()))
li = [2,4,6,8,9,10,13,24]
sum = 0
for i in li:
    if i % 2 == 0:
        sum += i
print("Sum of even numbers in list is: ",sum)