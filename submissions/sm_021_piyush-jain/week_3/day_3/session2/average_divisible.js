var limit=10,num=3,average,n=0,sum=0
for (var i=1;i<=limit;i++)
{
    if((i%num)==0)
    {
        sum+=i  
         n++
    }
}
average=sum/n
console.log(average)