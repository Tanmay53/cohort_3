var arra = [1,2,2,7,7,4,4,4,5,6]

removeDup (arra)

function removeDup () {
var obj = {}
    for  ( i= 0; i < arra.length ; i++)
    {
        if (i<arra.length)
        {
        obj[arra[i]] = arra[i]
        }
    }

console.log(Object.values(obj))

}