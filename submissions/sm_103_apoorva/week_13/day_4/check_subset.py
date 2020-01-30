li1 = set(map(int,input("Enter values of 1st set: ").split()))
li2 = set(map(int,input("Enter values of 2nd set(to check for subset): ").split()))
print(li1,li2)
count = 0
for i in li2:
    if i in li1:
        count += 1
print(count)
if count == len(li2):
    print("2nd set is subset of 1st")
else:
    print("2nd set is not subset of 1st")