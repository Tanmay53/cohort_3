li = [2,3,4,43,2,222,3,5,5,6,5,6,6]
occurenceDict = dict()

for ele in li:
    if ele in occurenceDict:
        occurenceDict[ele] += 1
    else:
        occurenceDict[ele] = 1

for key in occurenceDict:
    if occurenceDict[key] > 1:
        print(key)