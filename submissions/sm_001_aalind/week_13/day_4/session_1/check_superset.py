set1 = set(map(int, input("Enter comma(,) separated values: ").split(',')))
set2 = set(map(int, input("Enter comma(,) separated values: ").split(',')))
is_superset = True

for val in set2:
    if val not in set1:
        is_superset = False
        break

print(is_superset)