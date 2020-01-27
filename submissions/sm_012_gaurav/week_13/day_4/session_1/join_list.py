inputList = input("Enter List (Space Seperated): ").split(' ')
joinChar = input("Enter Joining Character: ")
joinedStr = ''
for i in range(len(inputList)):
    if i != len(inputList)-1:
        joinedStr += (inputList[i]+joinChar)
    else:
        joinedStr += inputList[i]
print(joinedStr)