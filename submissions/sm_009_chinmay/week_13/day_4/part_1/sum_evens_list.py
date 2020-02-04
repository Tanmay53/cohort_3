# Print the sum of all the even numbers in the given list of numbers
list = [1,2,3,4,5,6,7,8,9,10]
sum = 0
for i in range(len(list)):
    if list[i] % 2 == 0:
        sum = sum + list[i]
print(sum)