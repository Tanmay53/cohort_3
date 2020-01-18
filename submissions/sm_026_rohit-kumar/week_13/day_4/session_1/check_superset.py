set1 = [1,2,3,4,6,7,8,9]
set2 = [3,4,5,6]

isSuerset = True

for i in set2:
    if i not in set1:
        isSuerset = False

print(isSuerset)        
