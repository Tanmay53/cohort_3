set1 = [1,2,3,4,6,7,8,9]
set2 = [3,4,5,6]

dict = {}

# union
for i in set1:
    dict[i] = True

for i in set2:
    dict[i] = True
union = list(dict.keys())

#intersection
intersection = []
for i in set1:
    if i in set2:
        intersection.append(i)


#set difference
res = []
for i in union:
    if i not in intersection:
        res.append(i)


print(res)        


            








