set1 = [1,2,3,4]
set2 = [3,4,5,6]

# intersection

set3 = []
for i in set1:
    if i in set2:
        set3.append(i)


print(set3)