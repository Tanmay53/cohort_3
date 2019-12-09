function unionArrays (arr1,arr2) {
    var union = []
    for( var i = 0; i < arr1.length; i++){
        var flag = true
        for(var j = 0; j < union.length; j++){
            if(arr1[i] == union[j]){
                flag = false
            }
        }
        if(flag)
        union.push(arr1[i])
    }

    for( var i = 0; i < arr2.length; i++){
        var flag = true
        for(var j = 0; j < union.length; j++){
            if(arr2[i] == union[j]){
                flag = false
            }
        }
        if(flag)
        union.push(arr2[i])
    }
    return union;
}

var arr = {
    arr1: [2,5,8,9,3,6],
    arr2: [2,5,3,1,7]
}
console.log(unionArrays(arr.arr1,arr.arr2))