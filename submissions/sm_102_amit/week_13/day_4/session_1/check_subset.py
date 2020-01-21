# Check if the first set is a subset of the second set
set1 = {5, 8, 9}
set2 = {1, 4, 5, 3, 8, 7, 9}

count = 0
for i in set1:
    for j in set2:
        if int(i) == int(j):
            count += 1
print("TRUE" if len(set1) == count else "FALSE")
