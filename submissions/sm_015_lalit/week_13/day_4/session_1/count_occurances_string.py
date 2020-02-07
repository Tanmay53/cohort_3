inputX=input("Provide a string here : ")
dictX={}
for i in inputX:
    if i in dictX:
        dictX[i]=dictX[i]+1
    else:
        dictX[i]=1

for k,v in dictX.items():
        print(k,v)
