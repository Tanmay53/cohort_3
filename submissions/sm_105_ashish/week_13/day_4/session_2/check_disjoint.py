set1 = {1,2,3,4,5}
set2 = {6,7,8,9,10}
count = 0
for i in set1:
    for j in set2:
        if i == j:
            count -= -1
if count > 0:
    print("given sets have some common values")
else:
    print("gven sets are disjoint")