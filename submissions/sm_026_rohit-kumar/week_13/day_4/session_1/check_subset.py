set1 = [3,4]
set2 = [3,4,5,6]

isSubset = True

# checking if set1 is subset of set2

for i in set1:
    if i not in set2:
        isSubset = False

if isSubset:
    print('True')
else:
    print('False')        