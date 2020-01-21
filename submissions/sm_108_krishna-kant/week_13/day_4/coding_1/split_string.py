givenString = "Hello My Name Is Krishna"
key = " "
splittedString = [] 
tempString = ""
for i in givenString:
    if i == key:
        splittedString.append(tempString)
        tempString = ""
    else:
        tempString += i
splittedString.append(tempString)
print(splittedString)