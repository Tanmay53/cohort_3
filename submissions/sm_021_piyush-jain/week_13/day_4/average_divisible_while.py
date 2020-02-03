number=input()
limit=input()
x = 0
sum= 0
cnt=0
while x < limit:
    if(x%number==0):
        sum=sum+x
        cnt=cnt+1
    x=x+1
avg=sum/cnt
print(avg)    
