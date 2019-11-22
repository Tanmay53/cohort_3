// Time Complexity: O(m+n)
var test1 = [1, 2, 3, 5, 6, 8, 9], test2 = [5, 6, 1, 3, 2, 15, 87]
var test3 = [1, 2, 8, 35, 1], test4 = [1997, 8, 15, 35]
function checkUnion(arr1, arr2) {
    var obj = {}, union = []
    for (var i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr1[i]
    }
    for (var i = 0; i < arr2.length; i++) {
        obj[arr2[i]] = arr2[i]
    }
    return union = Object.values(obj)
}

console.log(checkUnion(test1, test2))
console.log(checkUnion(test3, test4)) 