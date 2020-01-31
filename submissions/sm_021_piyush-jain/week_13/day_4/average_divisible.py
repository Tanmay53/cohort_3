number=input()
x = 0
sum= 0
cnt=0
for x in range(input()):
    if(x%number==0):
        sum=sum+x
        cnt=cnt+1
avg=sum/cnt
print(avg,sum,cnt)    
