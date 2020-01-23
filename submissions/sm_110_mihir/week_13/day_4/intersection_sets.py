set1={1,2,3}
set2={2,3,4,5}
intersectionSet=set()
for x in set1:
    if x in set2:
        intersectionSet.add(x)
print(intersectionSet)