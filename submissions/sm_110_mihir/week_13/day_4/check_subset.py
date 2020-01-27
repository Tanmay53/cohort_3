set1={1,2,3,10}
set2={1,2,3,4,5,6}
flag=True
for item in set1:
    if item not in set2:
        print("set1 is not a subset of set2")
        flag=False
if flag:
    print("set1 is a subset of set2")

