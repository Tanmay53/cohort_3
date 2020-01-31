li1 = set(map(int,input("Enter values of list with space between: ").split()))
li2 = set(map(int,input("Enter values of list with space between: ").split()))
print(li1,li2)
count = 0
for i in li1:
    if i in li2:
        count += 1
if count > 0:
    # print(count)
    print("Not Disjoint set")
else:
    print("Disjoint set-as intersection is null")