var sum = 0
var j = 0
var average
function average(limit,number) {
    

for (i = 1 ; i<= limit ; i++ )
{
    if (i % number == 0)
    {
        sum = sum+i
        j++
    }
    
}
average = sum / j 
    console.log(average)
}
average(50,5)