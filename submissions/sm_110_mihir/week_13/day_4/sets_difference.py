# set3=set1-set3
set1={1,2,3}
set2={2,3,4,5}
set3=set()
intersectionSet=set()
for x in set1:
    if x in set2:
        intersectionSet.add(x)
for x in set1:
    if x not in intersectionSet:
        set3.add(x)
print(set3)
