var sum = 0
var j = 0
var average
function average(limit,number) {
    
var i=1 
while (i<= limit)
{
    if (i % number == 0)
    {
        sum = sum+i
        j++
    }
    i++
}
average = sum / j 
    console.log(average)
}
average(100,5)