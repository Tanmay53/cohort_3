setA = {1,2}
setB = {1,2,3,7}

unionSet = set()
for i in setA:
    unionSet.add(i)
    for j in setB:
        if j != i:
            unionSet.add(j)
# print(setA.union(setB))
print(unionSet)

