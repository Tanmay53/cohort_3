var arra1 = [6,3,4]
var arra2 = [1,2,3,4,5]
var obj = {}
var count = 0
checkSupersetArrays(arra1,arra2)

function checkSupersetArrays () {
        for ( i = 0 ; i < arra1.length ; i++)
        {
            obj[arra1[i]] = 1
        }
        for ( i = 0 ; i < arra2.length ; i++)
        {
            if ( obj[arra2[i]]!= undefined)
                count++
        }
        if (count == arra1.length)
        {
            console.log("true")
        }
        else 
        {
            console.log("false")
        }

}