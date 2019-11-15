var arra1 = [2,4,5,6,7,8,9]
var arra2 = [5,6,7,10,11]
var obj = {}
var newArra = []
intersectionArrays(arra1,arra2)

function intersectionArrays() {

for ( i = 0 ; i < arra1.length ; i++)
{
    obj[arra1[i]] = 1
}
    for ( i = 0 ; i < arra2.length ; i++)
    {
        if(obj[arra2[i]] !== undefined)
        {
            newArra.push(arra2[i])
        }
    }

    console.log(newArra)
}
