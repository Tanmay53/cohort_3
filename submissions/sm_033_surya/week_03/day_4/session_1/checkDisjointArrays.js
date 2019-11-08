var first = [2,5,6]
var second = [8,9,10]
var x = 0
function disjoint(){

for(i =0 ; i < first.length ; i++)
{
    for (j = 0 ; j < second.length ; j++)
    {
        if(first[i] == second[j]) // comparing array elements
        {
            x++
        }
    }
}

if(x == 0){
    console.log("Given arrays are disjoint arrays")
}
else {
    console.log("Given arrays are not disjoint arrays")
}
}

disjoint (first,second)
//  smaple test--
//first = [1,9,4]
// second = [2,5,6,8,9,10]

// first = [2,5,6]
// second = [8,9,10]
