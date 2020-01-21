li = input("Please enter seperated by commas").split(',')

sum = 0
for it in range(0, int(len(li)+1)):
    if it % 2 == 0:
        sum = sum + it


print(sum)