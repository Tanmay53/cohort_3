var limit=10,sum=0
var divisiblenums=[]
var i=1
while(i<=limit)
{
    if(i%2==0)
    {
        divisiblenums.push(i)
        sum=sum+i;
    }
   i++
}
 avg=sum/divisiblenums.length
console.log(avg)