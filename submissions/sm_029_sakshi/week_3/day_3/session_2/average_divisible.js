function avgdiv(limit,number)
{
    var sum=0
    var count=0
    for(var i=0;i<=limit;i++)
    {
        if(i%number==0)
        {
            sum=sum+i
            count=count+1
          //console.log(sum)
           //console.log(count)
        }
      // 

    }
    return sum/count
}
avgdiv(30,4)
console.log(avgdiv(30,4))
