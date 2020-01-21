set1 = [1,2,3,4]
set2 = [3,4,5,6]

# difference set1 - set2

res = []
for i in set1:
    if i not in set2:
        res.append(i)


print(res)        
