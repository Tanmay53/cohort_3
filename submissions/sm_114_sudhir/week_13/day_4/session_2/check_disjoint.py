setA = {1,2,3}
setB = {4,5,6}


count = 0
for i in setA:
    for j in setB:
        if i == j:
            count += 1


if count >= 1:
    print('Not Disjoint')
else:
    print('Disjoint')
            