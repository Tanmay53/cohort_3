# check if set1 is the subset of set2 or not
set1 = {3,10}
set2 = {9,10,12,3,13}
count = 0
for i in set1:
    for j in set2:
        if i == j:
            count += 1
            break;
if count == len(set1) and len(set1) < len(set2):
    print("set1 is the subset of set2.")
else:
    print("set1 is not the subset of set2.")
