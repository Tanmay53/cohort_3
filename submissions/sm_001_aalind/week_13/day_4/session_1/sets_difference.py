set1 = set(map(int, input("Enter comma(,) separated values: ").split(',')))
set2 = set(map(int, input("Enter comma(,) separated values: ").split(',')))

final_set = {}

for val in set1:
    if val not in set2:
        final_set.add(val)

print(final_set)