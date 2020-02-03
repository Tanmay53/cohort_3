print("Enter first set")
set1 = list(input())
print("Enter second set")
set2 = list(input())
count = 0
# print(set1,set2)
for x in range(len(set1)):
    for y in range(len(set2)):
        if set1[x] == set2[y]:
            count += 1
            break
if count > 0:
    print("Sets are not disjoint")
else:
    print("Sets are disjoint")