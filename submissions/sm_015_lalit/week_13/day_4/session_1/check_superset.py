set1= input("Input integers for the set here : ")
set2= input("Input integers for the other set : ")
set1=set1.split(" ")
set2=set2.split(" ")
set1=set(set1)
set2=set(set2)
isSuperset=True
for i in set2:
    if i not in set1:
        isSuperset=False

print("is 1st set superset of 2nd set => ",isSuperset)        
