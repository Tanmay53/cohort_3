arr1 = ['s','k','a','b']
arr2 = ['d','x','s']

isdisJoint = 'true'

for i in arr1:
    for j in arr2:
        if(i == j):
            isdisJoint = 'false'
            break
if(isdisJoint == 'true'):
    print('two arrays are disjoint')
else:
    print('two arrays are not disjoint')
    