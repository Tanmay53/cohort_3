set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
difference_set = set()

for i in set1:
    if i not in set2:
        difference_set.add(i)

print(difference_set)
