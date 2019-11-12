var num=[2,5,4,6,8,10,7,20]
sum=0
//console.log(typeof(num))
var i
for(i=0;i<=num.length;i++)
{
    //console.log(sum[i])
    if(num[i]%2==0)
    {
        sum=sum+num[i]
    }

}
console.log(sum)
