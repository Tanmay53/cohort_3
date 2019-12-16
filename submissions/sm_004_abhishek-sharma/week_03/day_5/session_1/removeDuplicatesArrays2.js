function removeDuplicateArrays(arr) {
    console.log(arr)
    var unique = {
        arr1 : arr,
        arr2 : Array
    }
    length = unique.arr1.length
    // Making Duplicates null
    for(var i = 0; i < length; i++){
        for(var j = i + 1; j < length; j++){
            if(unique.arr1[i] == unique.arr1[j]){
                unique.arr1[j] = null
            }
        }
    }
    // console.log(unique.arr1)
    for(var i = 0, j = 0; i < length; i++, j++){
        if(unique.arr1[i] != null){
            unique.arr2[j] = unique.arr1[i]
        }
    }
    return unique.arr2
}

console.log(removeDuplicateArrays([1, 2, 3, 2, 5, 4, 1, 9, 1, 45, 23, 9, 45, 99, 99]))
