var first = [9,3,4,10]
var second = [3,4,5,6,7]
var diff = []
var a = 0
function diifer(){
for(i = 0; i < first.length; i++)
{
    for (j=0 ; j < second.length; j++)
    {
        if(first[i] == second[j])    // comparing srray elements
        {
            a = 1
        }
    }
    if (a == 0)
    {

        diff.push(first[i]) // push intonew array
    }
     a = 0
}
return diff
}
var diff = diifer(first,second)
console.log(diff)

// sample test --
//  first = [1,2,3,4,8,9]
//   second = [3,4,5,6,7]

// first = [9,3,4,10]
// second = [3,4,5,6,7]