set1= input("Input integers for the set here : ")
set2= input("Input integers for the other set : ")
set1=set1.split(" ")
set2=set2.split(" ")
set1=set(set1)
set2=set(set2)
isSubset=True
for i in set1:
    if i not in set2:
        isSubset=False

print("is 1st set subset of 2nd set => ",isSubset)        
