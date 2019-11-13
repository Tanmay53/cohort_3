var arra = [2,2,3,4,4,5,6,4,7,7]
var n = 7
findcount (arra,n)
function findcount (arra,n){
    var obj = {}
    var count = 0
for ( i= 0 ; i< arra.length ; i ++)
{
    obj[arra[i]] = arra[i]
    if(obj[arra[i]] == n)
    {
        count++
        
    }
}
console.log(count)
}