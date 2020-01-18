first = [2,3,4,5,7]
second = [3,4,90]



count = 0
for i in range(0,len(first)):
    for j in range(0,len(second)):
        if(first[i] == second[j]):
            count += 1
if(count == len(second)):
    print('first set is superset of second array')
else:
    print('first set is not superset of second array')
    