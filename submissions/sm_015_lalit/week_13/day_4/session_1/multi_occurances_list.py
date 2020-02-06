inputX=input("Provide input for a list : ").split(" ")
inputX=list(inputX)
dictX={}
for i in inputX:
    if i in dictX:
        dictX[i]=dictX[i]+1
    else:
        dictX[i]=1

for k,v in dictX.items():
    if v > 1:
        print(k)       