function arrayDifference(arr1, arr2){
    var obj1 = {}
    var obj2 = {}
    var res = []
    for (var i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = arr1[i]
    }
    for (var i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = arr2[i]
    }

    for(key in obj1){
        if(!(key in obj2)){
            res.push(Number(key));
            
        }
    }
    return res

}

console.log(arrayDifference([1,2,3,4,5], [1,2,3]))