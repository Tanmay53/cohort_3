set1 = input("Enter Set1 Values(Space Seperated): ").split()
set2 = input("Enter Set2 Values(Space Seperated): ").split()
diff = []
for a in set1:
    if a not in set2:
        diff.append(a)
print(diff)