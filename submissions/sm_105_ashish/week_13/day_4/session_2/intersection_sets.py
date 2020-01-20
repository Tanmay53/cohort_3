set_1 = {1,2,3,4,5,6,7,8}
set_2 = {4,5,6,7,12,15,17}
intersection_set = set()

for i in set_1:
    for j in set_2:
        if i == j:
            intersection_set.add(i)
print(intersection_set) 