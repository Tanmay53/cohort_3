# Check if two given sets are disjoint or not
set1 = {5, 8, 9}
set2 = {1, 4, 7, 3, 2}
flag = False
for i in set1:
    for j in set2:
        if int(i) == int(j):
            flag = True
            break

print("DISJOINT SETS" if flag == False else "NOT DISJOINT SETS")
