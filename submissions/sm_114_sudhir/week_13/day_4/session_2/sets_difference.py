setA = {1,2,3,4}
setB = {1,2,3,7}

difference_set = set()

for i in setA:
    if i not in setB:
        difference_set.add(i)  

print(difference_set)
# print(setA.difference(setB))