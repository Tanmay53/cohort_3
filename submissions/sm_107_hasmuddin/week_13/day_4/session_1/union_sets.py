'''Create a set with
the union of two given sets (NOTE: You can't use inbuilt set function)'''

set1 = set(map(int, input("set1: ").split()))
set2 = set(map(int, input("set2: ").split()))
li = []
for i in set1:
    li.append(i)
for j in set2:
    li.append(j)

if len(li) ==0:
    print("We can't find union of this set")
else:
    unionSet = set(map(int, li))
    print(unionSet)







