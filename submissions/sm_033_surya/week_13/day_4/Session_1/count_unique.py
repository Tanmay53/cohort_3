a = [1,1,2,3,4,4,5,6,7]
newset = {a[0]}
for i in range(1,len(a)):
    newset.add(a[i])
print(newset)