UpperAL=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
lowerAL=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for i in range(26):
    lowerAL[i]=lowerAL[i].lower()

inputX=input("Type the string here : ")
output=""
for i in inputX:
    if i.isupper():
        for j in UpperAL:
            if i == j:
                inx=UpperAL.index(j)+1
                output+=UpperAL[26-inx]
    else:
        for p in lowerAL:
            if i == p:
                inxP=lowerAL.index(p)+1
                output+=lowerAL[26-inxP]

print("Mirror image of the string => ",output)                
            