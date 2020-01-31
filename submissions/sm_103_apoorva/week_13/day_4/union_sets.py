li1 = set(map(int,input("Enter values of 1st set: ").split()))
li2 = set(map(int,input("Enter values of 2nd set: ").split()))
res = {"empty"}
res.update(li1)
res.update(li2)
res.discard("empty")
print(res)