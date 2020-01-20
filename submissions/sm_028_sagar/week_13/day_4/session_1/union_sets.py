a = [1,5,8]
b = [6,5,1,4,7,3]

union = []
idx = 0
for i in range(0,len(a)):
    union.append(a[i])

for j in range(0,len(b)):
    isPresent = 'false'
    for k in range(0,len(union)):
        if(b[j] == union[k]):
            isPresent = 'true'
    if(isPresent == 'false'):
        union.append(b[j])

print(union)