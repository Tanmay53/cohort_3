set1 = input("Enter Set1 Values (Space Seperated): ").split()
set2 = input("Enter Set2 Values (Space Seperated): ").split()
flag = True
if len(set1) == 0:
    flag = True
else:
    for a in set1:
        if a not in set2:
            flag = False
            break
if not flag:
    print("Not a Subset")
else:
    print("Subset")