set1 ={1,2,3,4}
set2 = {2,3,4,5,6,7}
union_set = set()
for i in set1:
    union_set.add(i)
for k in set2:
    if k not in union_set:
        union_set.add(k)
print(union_set)
