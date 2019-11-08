function sumarray(num)
{
    var sum=0
    for(var i=0;i<=num.length;i++)
    {
        if(num[i]%2==0)
        {
            sum=sum+num[i]
        }
    }
    return sum; 

}
console.log(sumarray([2,4,7,9,6,3]))