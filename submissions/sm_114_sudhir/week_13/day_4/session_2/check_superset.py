setA = {1,2,3,4,5,6}
setB = {1,2,3}


count = 0
for i in setA:
    for j in setB:
        if i == j:
            count += 1


if count >= len(setA):
    print('A is not supersset of B')
else:
    print('A is supersset B')
            

print(setA.issuperset(setB))