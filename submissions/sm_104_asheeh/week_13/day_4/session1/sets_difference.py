set1 = {3,5,6,8,9,7,65,4,33,"aman"}
set2 = {5,6,8,99,4,6,8, "albert"}
difference = set()

for ele in set1:
    if ele not in set2:
        difference.add(ele)

print(difference)