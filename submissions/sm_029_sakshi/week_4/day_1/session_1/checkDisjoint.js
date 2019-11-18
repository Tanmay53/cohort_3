

function checkDisjoint(arr1, arr2) {
    var obj = {}
    var isDisjoint = true
    for(var i = 0; i < arr1.length; i++) {
        obj[arr1[i]]=1
    }
    for ( i = 0 ; i < arr2.length ; i++)
    {
        if(obj[arr2[i]] == obj[arr1[i]])
        {
            isDisjoint = false
            
        }
    }

    if(isDisjoint) {
        console.log("true")
    }
    else console.log("false")
}

checkDisjoint ([1,2,3,4,5,6],[7,8,9])