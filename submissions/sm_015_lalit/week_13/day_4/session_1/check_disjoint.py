set1=input("Input a set here : ")
set2=input("Input another set for comparison : ")
set1=set1.split(" ")
set1=set(set1)
set2=set2.split(" ")
set2=set(set2)
isDisjoint=True
for i in set1:
    i=int(i)
    for j in set2:
        j=int(j)
        if i==j:
            isDisjoint=False

print("disjoint status => ",isDisjoint)

