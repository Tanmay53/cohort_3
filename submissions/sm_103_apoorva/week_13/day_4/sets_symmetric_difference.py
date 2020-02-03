li1 = set(map(int,input("Enter values of 1st set: ").split()))
li2 = set(map(int,input("Enter values of 2nd set: ").split()))
union = {"empty"}
union.update(li1)
union.update(li2)
union.discard("empty")
print(union)

intersection = {"empty"}
for i in li1:
    if i not in li2:
        intersection.add(i)
for i in li2:
    if i not in li1:
        intersection.add(i)
intersection.discard("empty")
print(intersection)
symmetric = {"empty"}
for i in union:
    if i not in intersection:
        symmetric.add(i)
symmetric.discard("empty")
print("Symmectric Difference: ",symmetric)