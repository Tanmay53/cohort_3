var first = [4]
var second = [1,2,3,4,5,7]
var a = 0
function union() {
for ( i = 0 ; i < first.length ; i++)
{       
    for (j = 0 ; j < second.length ; j++)
    {
        if(first[i] == second[j]) // comparing aelements of array
        {   
        a=1            
        }
    }
    if (a == 0)
    {
        second.push(first[i])
    }
    a = 0
}
console.log(second)
}

union (first, second)
// sample test --
// first = [4,10,5,6]
// second = [1,2,3,4,5,7]

// first = [4]
// second = [1,2,3,4,5,7]