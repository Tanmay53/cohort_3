set1 = set(map(int, input("Enter comma(,) separated values: ").split(',')))
set2 = set(map(int, input("Enter comma(,) separated values: ").split(',')))
is_subset = True

for val in set1:
    if val not in set2:
        is_subset = False
        break

print(is_subset)