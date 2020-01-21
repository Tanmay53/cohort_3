# Create a set with the intersection of two given sets
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
intersection_set = set()

for i in set1:
    if i in set2:
        intersection_set.add(i)
print(intersection_set if len(intersection_set) > 0 else "NO COMMON ITEMS")
