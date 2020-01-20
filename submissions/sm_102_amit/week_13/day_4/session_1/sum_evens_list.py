# Print the sum of all the even numbers in the given list of numbers
numList = [12, 15, 7, 78, 45]
sum = 0
for x in numList:
    if x % 2 == 0:
        sum += x
print(sum)
