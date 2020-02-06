userlimit=int(input("type the limit here : "))
userNum=int(input("type number now : "))
tcount=0
tsum=0
for i in range(1,userlimit+1):
    if i%userNum==0:
        tsum=tsum+i
        tcount=tcount+1

print(tsum/tcount)