set1 = [0, 1, 2, 3, 4, 5, 1, 2, 3, 1, 4, 5]
set2 = [4, 5, 6, 7, 8, 9, 4, 5, 7, 8, 4]

union = {}
intersection = {}
symmetric_difference = []

for num in set1:
    union[num] = num

for num in set2:
    union[num] = num

for num in set1:
    if num in set2:
        intersection[num] = num

for num in list(union.keys()):
    if num not in list(intersection.keys()):
        symmetric_difference.append(num)

print(symmetric_difference)
