setA = {1,2,3,4}
setB = {1,2,3,7}

symm_diff_set = set()

for i in setA:
    if i not in setB:
        symm_diff_set.add(i)

for i in setB:
    if i not in setA:
        symm_diff_set.add(i) 

print(symm_diff_set)
# print(setA.symmetric_difference(setB))