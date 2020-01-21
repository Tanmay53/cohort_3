set1 = input("Enter Set1 Values (Space Seperated): ").split(' ')
set2 = input("Enter Set2 Values (Space Seperated): ").split(' ')
flag = True
for a in set1:
    if a in set2:
        flag = False
        break
if flag:
    print("Sets are Disjoint")
else:
    print("Sets are not Disjoint")