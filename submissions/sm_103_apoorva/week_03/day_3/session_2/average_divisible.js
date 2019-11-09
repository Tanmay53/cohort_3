function average_divisible(n)
{
    var i=0,sum=0,avg,n
    var arr = [];
    for(i=0;i<n;i++){
        if(i%6 ==0)
        {
            sum=sum+i
            avg=sum%i
            
        }
    }


        console.log(sum)
        console.log(avg)
}
average_divisible(100)
