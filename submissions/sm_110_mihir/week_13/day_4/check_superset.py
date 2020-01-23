set1={1,2,3,10}
set2={1,2,3,4,5,6}
flag=True
for item in set1:
    if item not in set2:
        print("set2 is not a superset of set1")
        flag=False
if flag:
    print("set2 is a superset of set1")