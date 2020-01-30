li1 = set(map(int,input("Enter values of 1st set: ").split()))
li2 = set(map(int,input("Enter values of 2nd set: ").split()))
print(li1,li2)
count = 0
for i in li2:
    if i in li1:
        count += 1
print(count)
if count == len(li2):
    print("1st set is superset of 2nd")
else:
    print("1st set is not superset of 2nd")