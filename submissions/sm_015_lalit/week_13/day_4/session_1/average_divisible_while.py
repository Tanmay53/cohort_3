userLimit=int(input("type limit here : "))
userNumber=int(input("type number now : "))
tsum=0
tcount=0
interationsX=userLimit
i=1
while i<=interationsX:
    if i%userNumber==0:
        tsum=tsum+i
        tcount=tcount+1
        
    i=i+1    
   

print(tsum/tcount)        