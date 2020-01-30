userInput = input("Enter a string: ")
print(userInput)
splitter = input("Enter splitter: ")
out = []
string = ""
for i in range(0,len(userInput)):
    if userInput[i] is not splitter:
        string += userInput[i]
    else:
        out.append(string)
        string = ""
out.append(string)
print(out)




