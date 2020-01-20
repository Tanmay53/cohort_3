setA = {1,2,3}
setB = {1,2,3,4,5,6}


count = 0
for i in setA:
    for j in setB:
        if i == j:
            count += 1


if count == len(setA):
    print('A is subset of B')
else:
    print('A is not subset B')

print(setA.issubset(setB))