set1 = input("Enter Set1 Values(Space Seperated): ").split()
set2 = input("Enter Set2 Values(Space Seperated): ").split()
union = []
for a in set1:
    if a not in union:
        union.append(a)
for a in set2:
    if a not in union:
        union.append(a)
print(union)