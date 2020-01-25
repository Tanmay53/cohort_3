set1={1,2,3}
set2={4,5,6,1}
isDisjoint=True
for item in set1:
    if item in set2:
        isDisjoint=False
if isDisjoint:
    print("sets are disjoint")
else:
    print("sets are not disjoint")