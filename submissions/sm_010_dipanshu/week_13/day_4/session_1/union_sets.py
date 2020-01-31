set1 = [1, 2, 3, 4, 5, 5, 1, 3]
set2 = [1, 2, 1, 3, 6, 7, 8, 9, 4, 6, 0, 1, 2, 4, 6]

union = {}

for num in set1:
    if num not in union:
        union[num] = num

for num in set2:
    if num not in union:
        union[num] = num

print(list(union.keys()))
