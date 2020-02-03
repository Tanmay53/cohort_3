phrase = "masaischool"
splitChar = "s"
tempStr = ""
finalList = []
for char in phrase:
    if char == splitChar:
        finalList.append(tempStr)
        tempStr = ""
    else:
        tempStr += char
finalList.append(tempStr)
print(finalList)