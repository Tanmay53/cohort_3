a = [1, 2, 3, 4, 5]
# b = [0, 6, 7, 8, 9]
b = [1, 6, 7, 8, 9, 9]

disjoint = True

for num in a:
    if num in b:
        disjoint = False
        break

if disjoint:
    print("Sets are disjoint")
else:
    print("sets are not disjoint")
