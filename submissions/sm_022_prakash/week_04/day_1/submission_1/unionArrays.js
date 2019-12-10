var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [1, 2, 3, 8, 9]


function unionArrays(arr1, arr2) {
    var obj1 = {}
    for (var i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = arr1[i]   //appending elements in arr1 to the object
    }

    for (var j = 0; j < arr2.length; j++) {
        obj1[arr2[j]] = arr2[j]   //updating elements in arr2 to the same object
    }
    return Object.keys(obj1)    // returning keys of the obj 
}
console.log(unionArrays([1, 2, 3, 4, 5, 6], [1, 2, 3, 8, 9]))