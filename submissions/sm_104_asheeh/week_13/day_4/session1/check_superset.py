# check if the set1 is the superset of the set2
set1 = {2,5,6,78,9} 
set2 = {2,5,6}
count = 0
for i in set2:
    for j in set1:
        if i == j:
            count += 1
            break;
if count == len(set2) and len(set1) > len(set2):
    print("set1 is the superset of set2.")  
else:
    print("set1 is not the superset of set2")