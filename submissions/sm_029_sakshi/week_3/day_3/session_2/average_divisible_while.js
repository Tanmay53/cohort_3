function avgdiv(limit,number)
{
    var sum=0
    var count=0
    var i=0
    while(i<=limit)
    {
        if(i%number==0)
        {
            sum=sum+i
            count=count+1
          //console.log(sum)
           //console.log(count)
        }
      i++

    }
    return sum/count
}
avgdiv(20,4)
console.log(avgdiv(20,4))
