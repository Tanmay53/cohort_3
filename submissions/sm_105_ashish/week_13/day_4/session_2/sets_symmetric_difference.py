set_1 = {1,2,3,4,5,6,7}
set_2 = {3,4,5,6,7,8,9,10,11,12} 
symmetric_difference = set()
for i in set_1:
    if i not in set_2:
        symmetric_difference.add(i)
for i in set_2:
    if i not in set_1:
        symmetric_difference.add(i)
print(symmetric_difference)       
