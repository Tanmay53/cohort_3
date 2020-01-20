'''Check if two given sets are disjoint or
not (NOTE: You can't use inbuilt set function)'''

set1 = set(map(int, input("Set1: ").split()))
set2 = set(map(int, input("Set2: ").split()))

disjoint = True

for i in set1:
    for j in set2:
        if i==j:
            disjoint = False

print(disjoint)