set1 = set(map(int, input("Enter comma(,) separated values: ").split(',')))
set2 = set(map(int, input("Enter comma(,) separated values: ").split(',')))
len1 = len(set1)
len2 = len(set2)

for val in set2:
    set1.add(val)

if len(set1) == len1+len2:
    print("Disjoint")
else:
    print("Not disjoint")