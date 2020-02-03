li1 = set(map(int,input("Enter values of 1st set: ").split()))
li2 = set(map(int,input("Enter values of 2nd set: ").split()))
intersection = {"empty"}
difference = {'empty'}
for i in li1:
    if i not in li2:
        intersection.add(i)
for i in li2:
    if i not in li1:
        intersection.add(i)
intersection.discard("empty")
print(intersection)
print(li1)
for i in li1:
    if i not in intersection:
        difference.add(i)
difference.discard("empty")
print("li1-li2: ",difference)
