set1 = input("Enter Set1 Values(Space Seperated): ").split()
set2 = input("Enter Set2 Values(Space Seperated): ").split()
symm_diff = []
for a in set1:
    if a not in set2:
        symm_diff.append(a)
for a in set2:
    if a not in set1:
        symm_diff.append(a)
print(symm_diff)