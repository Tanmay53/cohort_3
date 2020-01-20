set1 = input("Enter Set1 Values(Space Seperated): ").split()
set2 = input("Enter Set2 Values(Space Seperated): ").split()
flag = True
if len(set2) == 0:
    flag = True
else:
    for a in set2:
        if a not in set1:
            flag = False
            break
if not flag:
    print("Not a Subset")
else:
    print("Subset")