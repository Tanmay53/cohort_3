'''Check if the first set is a subset
of the second set (NOTE: You can't use inbuilt set function)'''

superSet = set(map(int, input("Set: ").split()))
subset = set(map(int, input("Subset: ").split()))
count = 0
for i in superSet:
    for j in subset:
        if i==j:
            count +=1

if count==len(subset):
    print("This is subset of this set")

else:
    print("This is not subset")