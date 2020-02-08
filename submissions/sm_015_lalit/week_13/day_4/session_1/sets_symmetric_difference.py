set1= input("Input for the set here : ")
set2= input("Input for the other set : ")
set1=set1.split(" ")
set2=set2.split(" ")
set1=set(set1)
set2=set(set2)
sdifference=set()
for i in set1:
    if i not in set2:
        sdifference.add(i)
        
for i in set2:
    if i not in set1:
        sdifference.add(i)        


print("their symmetric difference is => ",sdifference)        