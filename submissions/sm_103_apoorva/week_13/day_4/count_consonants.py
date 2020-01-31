userInput = list(input("Enter values of list with space between: ").split())
print(userInput)
vowels = ["A","E","I","O","U","a","e","i","o","u"]
count = 0
for i in userInput:
    for j in i:
        if j not in vowels:
            count += 1
print(count)