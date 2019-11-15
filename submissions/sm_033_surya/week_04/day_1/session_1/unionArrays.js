var arra1 = [1,2,3,4,4,5,6,7]
var arra2 = [8,9,10]
var obj = {}
unionArrays (arra1,arra2)

function unionArrays(){
    for( i = 0 ; i < arra1.length || i < arra2.length ; i++ )
    {
        if (i < arra1.length)
        {
            obj[arra1[i]] = arra1[i]
        }
        if ( i < arra2.length)
        {
            obj[arra2[i]] = arra2[i]
        }
    }

    console.log(Object.values(obj))



}