'''Create a set with
the intersection of two given sets (NOTE: You can't use inbuilt set function)'''

set1 = set(map(int, input("set1: ").split()))
set2 = set(map(int, input("set2: ").split()))

tempDic = {}
li = []
for i in set1:
    for j in set2:
        if i==j:
            li.append(i)

if len(li) ==0:
    print("We can't find intersection of this set")
else:
    intersection = set(map(int, li))
    print(intersection)







