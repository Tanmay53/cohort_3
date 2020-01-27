set_1 = {1,2,3,4,5,6}
set_2 = {5,6,7,8,9}

difference_set = set()
for i in set_1:
   if i not in set_2:
       difference_set.add(i)
print(difference_set)