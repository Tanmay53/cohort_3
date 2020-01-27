set1 = input("Enter Set1 Values (Space Seperated): ").split()
set2 = input("Enter Set2 Values (Space Seperated): ").split()

intersection = []

for a in set1:
    if a not in intersection and a in set2:
        intersection.append(a)
for a in set2:
    if a not in intersection and a in set1:
        intersection.append(a)
print(intersection)