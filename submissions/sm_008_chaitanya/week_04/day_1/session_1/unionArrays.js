var arr1 = [1, 2, 3, 1, 2, 3]
var arr2 = [4, 5, 6, 4, 5, 7, 8, 9]
function unionArrays(arr1, arr2) {
    var obj = {}
    for (i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr1[i]
        for (j = 0; j < arr2.length; j++) {  //since the second array is of different length .
            obj[arr2[j]] = arr2[j]
        }
    }
    return Object.keys(obj)
}
console.log(unionArrays(arr1, arr2))