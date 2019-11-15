var arra1 = [1,2,3,4,5,6]
var arra2 = [7,8,9]

checkDisjoint (arra1,arra2)

function checkDisjoint(arr1, arr2) {
    var obj = {}
    var isDisjoint = true
    for(var i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = 1
    }
    for ( i = 0 ; i < arra2.length ; i++)
    {
        if(obj[arr2[i]] !== undefined) {
            isDisjoint = false
            break
        }
    }

    if(isDisjoint) {
        console.log("true")
    }
    else console.log("false")
}
