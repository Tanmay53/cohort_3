set1 = {2,3,7}
set2 = {1,2,3,4,7}

count = 0
for i in set1:
    for j in set2:
        if i == j:
            count += 1
if count == len(set1):
    print("set1 is subset of set2")
else:
    print("set1 is not subset of set2")           