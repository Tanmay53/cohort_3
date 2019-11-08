var first = [1,2,3,4,7]
var second = [6,8,9]
var sydif = []
var a = 0
function symdiff(){
for (i = 0 ;i < first.length ; i++)
{
    for( j = 0 ; j < second.length ; j++)
    {
        if ( first[i] == second [j]) // compare array elements
        {
            a = 1
        }

    }
    if( a == 0)
    {
        sydif.push(first[i])
    }
    a = 0
}
for( i = 0 ; i < second.length ; i++)

{
    for(j = 0; j < first.length ; j++)
    {
        if (first[j] == second[i])
        {
            a = 1
        }
    }
    if ( a == 0)
    {
        sydif.push(second[i])
    }
    a = 0

}
return sydif
}
var resultarray = symdiff(first,second) 
console.log(sydif)

// Sample test-- 

// var first = [1,2,3,4,7]
// var second = [2,3,4,5,6]

// first = [1,2,3,4,7]
// second = [6,8,9]


