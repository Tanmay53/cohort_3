function average_divisible_while(n)
{
    var i=0,sum=0,avg,n
    var arr = [];
    while(i<=n)
    {   
        if(i%6 ==0)
        {
            sum=sum+i
            avg=sum%i
            
        }
        i++
    }
        console.log(sum)
        console.log(avg)
}
average_divisible_while(100)
