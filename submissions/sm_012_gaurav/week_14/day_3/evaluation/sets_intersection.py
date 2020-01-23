set1 = input("Enter Set1 values(Space Seperated): ").split()
set2 = input("Enter Set2 values(Space Seperated): ").split()
set3 = input("Enter Set3 values(Space Seperated): ").split()

intersection = []

for a in set1:
    if a in set2 and a in set3:
        intersection.append(a)

print(intersection)