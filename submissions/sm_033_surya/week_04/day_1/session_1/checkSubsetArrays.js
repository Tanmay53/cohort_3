var arra1 = [1,2,3,4,5,6]
var arra2 = [7,8,9]
var obj = {}
checkSubsetArrays(arra1,arra2)

function checkSubsetArrays(){

    for ( i = 0 ; i< arra1.length ; i++ )
    {
        obj[arra1[i]] = 1
    }

    for ( i = 0 ; i< arra2.length ; i++) {

        if ( obj[arra2[i]] !== undefined) {
            a = 0
        }
        else 
        {
            a = 1      
          }

    }
    if ( a == 0)
    {
        console.log("true")
    }
    else 
    {
        console.log("false")
    }
}