userInput = list(input("Enter values of list with space between: ").split())
print(userInput)
joiner = input("Enter Join character: ")
string = ""
for i in range(0,len(userInput)):
    if i == len(userInput)-1:
        string += userInput[i]
    else:
        string += userInput[i] + joiner
print(string)