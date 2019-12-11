function checkSubsetArrays(arr1, arr2) {
    var obj1 = {}
    var obj2 = {}
    if (arr1.length > arr2.length) {
        flag = false
    }
    for (i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = arr1[i]
    }
    for (j = 0; j < arr2.length; j++) {
        obj2[arr2[j]] = arr2[j]
    }
    var flag = true
    for (key in obj1) {
        if (!(key in obj2)) {
            flag = false
        }
    }
    return flag
}
var arr1 = []
var arr2 = [1, 2, 3, 4, 5]
console.log(checkSubsetArrays(arr1, arr2))