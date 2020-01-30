li1 = set(map(int,input("Enter values of 1st set: ").split()))
li2 = set(map(int,input("Enter values of 2nd set: ").split()))
res = {"empty"}
for i in li1:
    if i not in li2:
        res.add(i)
for i in li2:
    if i not in li1:
        res.add(i)
res.discard("empty")
print(res)