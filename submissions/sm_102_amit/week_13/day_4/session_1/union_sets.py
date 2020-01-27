# Create a set with the union of two given sets
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
union_set = set()

for i in set1:
    union_set.add(i)
for j in set2:
    if j not in union_set:
        union_set.add(j)
print(union_set)
