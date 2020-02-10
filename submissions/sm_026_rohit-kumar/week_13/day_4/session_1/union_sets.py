set1 = [1,2,3,4]
set2 = [3,4,5,6]

# union
dict = {}

for i in set1:
    dict[i] = True
for i in set2:
    dict[i] = True

print (list((dict.keys())))
