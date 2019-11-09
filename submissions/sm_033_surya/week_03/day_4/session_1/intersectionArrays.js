var first = [3,10,5,6]
var second = [10,11,12]
var inter = []
function intersec(){
for ( i = 0 ; i < first.length ; i++)
{
    for (j = 0 ; j < second.length ; j++)
    {
        if(first[i] == second[j] ) //comparing array elements
        {
            inter.push(first[i]) // ush to new array
        }
    }
}

console.log(inter)
}

intersec(first,second)

// sample test--
// first = [3,10,5,6]
// second = [1,2,3,4,5,6]

// first = [3,10,5,6]
// second = [10,11,12]