userInput = list(map(int,input("Enter values of list with space between: ").split()))
# print(userInput)
sum = 0
for i in userInput:
    if i % 2 == 0:
        sum += i
print(sum)

    
