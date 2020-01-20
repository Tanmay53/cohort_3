set1 = {1,2,3,4,5,6}
set2 = {1,2,6}
count = 0
for i in set1:
    for j in set2:
        if i == j:
            count += 1
if count == len(set2):
    print("set1 is a superset of set2")
else:
    print("set1 is not a superset of set2")