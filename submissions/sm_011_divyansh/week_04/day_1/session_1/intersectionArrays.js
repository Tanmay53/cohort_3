function intersectionOfArrays(arr1, arr2) {
    var obj = {}, result = [];
    arr1.forEach( function(key) {
        obj[key] = key;
    })
    arr2.forEach( function(key) {
        if( obj[key] == key){
            result.push(key)
        }
    })
    console.log(result)
    return result
}

intersectionOfArrays([1,2,3,4], [3,4,5,6])