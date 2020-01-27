# Check if the first set is a superset of the second set
set1 = {1, 4, 5, 3, 8, 7, 9}
set2 = {5, 8, 9, 11}

count = 0
for i in set1:
    for j in set2:
        if int(i) == int(j):
            count += 1
print("TRUE" if len(set2) == count else "FALSE")
