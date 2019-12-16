function intersectionArrays (arr1,arr2) {
    var intersection = []
    for( var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                intersection.push(arr1[i])
            }
        }
    }
    return intersection;
}

var arr = {
    arr1: [2,5,8,9,3,6],
    arr2: [2,5,3,1,7]
}
console.log(intersectionArrays(arr.arr1,arr.arr2))