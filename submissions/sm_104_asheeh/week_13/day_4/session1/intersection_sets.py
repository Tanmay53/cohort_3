set1 = {4,6,78,8,99,3,4,55}
set2 = {5,6,788,8}
masterSet = set()

for ele in set1:
    if ele in set2:
        masterSet.add(ele)

print(masterSet)
