inputString = input()
reversedString = ''
for i in range(-1, -len(inputString)-1, -1):
    reversedString += inputString[i]
print(reversedString)