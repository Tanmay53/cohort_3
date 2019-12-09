function checkSubsetArrays (arr1,arr2) {
    for( var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                return true
            }
        }
    }
    return false;
}

var arr = {
    arr1: [2,5,8,9,6],
    arr2: [3,1,7]
}
console.log(checkSubsetArrays(arr.arr1,arr.arr2))