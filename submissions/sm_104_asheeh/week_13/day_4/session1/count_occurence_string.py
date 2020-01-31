phrase = "Hello Masai"
charOccurenceDict = dict()

for char in phrase:
    if char in charOccurenceDict:
        charOccurenceDict[char] += 1
    else:
        charOccurenceDict[char] = 1
        
print(charOccurenceDict)