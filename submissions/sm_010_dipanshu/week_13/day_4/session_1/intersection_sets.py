set1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 8, 9, 0]
set2 = [5, 6, 7, 8, 9, 5, 8, 9, 5, 8]

intersection = {}

for num in set2:
    if num in set1:
        intersection[num] = num

print(list(intersection.keys()))
