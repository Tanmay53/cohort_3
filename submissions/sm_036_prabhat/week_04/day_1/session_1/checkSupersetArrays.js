function checkSupersetArrays (arr1,arr2) {
    var superSet = [];
    for( var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                superSet.push(arr1)
            }
        }
    }
    if(superSet.length == arr1.length || superSet.length == arr2.length)
    return true
    else
    return false
}

var arr = {
    arr1: [2,5,8,9,6],
    arr2: [2,5,8,1]
}
console.log(checkSupersetArrays(arr.arr1,arr.arr2))