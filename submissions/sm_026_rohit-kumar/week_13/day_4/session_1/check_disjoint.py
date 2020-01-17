set1 = [1,2]
set2 = [3,4,5,6]

isDisjoint = True

for i in set1:
    if i in set2:
        isDisjoint = False
        break

if isDisjoint:
    print('True')
else:
    print('False')
