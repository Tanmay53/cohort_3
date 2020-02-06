set1= input("Input for the set here : ")
set2= input("Input for the other set : ")
set1=set1.split(" ")
set2=set2.split(" ")
set1=set(set1)
set2=set(set2)
intersection=set()
for i in set1:
    if i in set2:
        intersection.add(i)

print("their intersection is => ",intersection)        