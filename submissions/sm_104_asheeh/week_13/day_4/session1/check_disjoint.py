set1 = {3,5,6,7}
set2 = {9,10,12,3,13}
disjoint = set()
disjoint = True
for i in set1:
    for j in set2:
        if i == j:
            disjoint = False
if disjoint:
    print("set1 and set2 are disjoint")
else:
    print("set1 and set2 are not disjoint")

