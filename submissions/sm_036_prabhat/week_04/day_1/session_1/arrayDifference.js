function arrayDifference (arr1,arr2){
    var common = []
    var diff = [];
    for( var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                common.push(arr1[i])
            }
        }
    }
    for( var i = 0; i < arr1.length; i++){
        var flag = true
        for(var j = 0; j < common.length; j++){
            if(arr1[i] == common[j]){
                flag = false;
            }
        }
        if(flag)
        diff.push(arr1[i])
    }
    return diff;
}

var arr = {
    arr1: [2,5,8,9,3,6],
    arr2: [2,5,3,1,7]
}
console.log(arrayDifference(arr.arr1,arr.arr2))