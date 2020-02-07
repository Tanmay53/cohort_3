set1= input("Input for the set here : ")
set2= input("Input for the other set : ")
set1=set1.split(" ")
set2=set2.split(" ")
set1=set(set1)
set2=set(set2)
difference=set()
for i in set1:
    if i not in set2:
        difference.add(i)


print("their difference is => ",difference)        