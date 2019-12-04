var limit=10
var num=2
var divisiblenums=[]
var sum=0;
var avg;
for(var i=1;i<=10;i++)
{
    if(i%2==0)
    {
        divisiblenums.push(i);
        sum=sum+i;
    }
}
   avg=sum/divisiblenums.length
   console.log(avg)