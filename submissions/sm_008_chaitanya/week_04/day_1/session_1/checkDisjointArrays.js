function checkDisjointArrays(arr1, arr2) {
    var obj1 = {}
    var obj2 = {}
    flag = true
    for (i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = arr1[i]
    }
    for (j = 0; j < arr2.length; j++) {
        obj2[arr2[j]] = arr2[j]
    }
    for (key in obj1) {
        if (key in obj2) {
            flag = false
        }
    }
    return flag
}
var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [7, 8, 9, 10, 11]
console.log(checkDisjointArrays(arr1, arr2))