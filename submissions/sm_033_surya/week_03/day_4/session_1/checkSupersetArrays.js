var first =[1,2,3,5,6]
var second = [2,5]
var x = 0

function checksuperset(){
for (i = 0; i < first.length ; i++)
{
    for(j= 0 ; j < second.length; j++)
    {
        if(first[i] == second [j]) // comparing array elements
        {
            x++
        }
    }
}
if (x == second.length)
{
    console.log("Given arry is superset of second array")
}
    else 
    {
        console.log("Given arry is not a superset of second array")
    }
}
checksuperset (first,second)
// Sample test --
// first =[1,2,3,5,6]
// second = [2,4,10,11,12,14]

// first =[1,2,3,5,6]
// second = [2,5]