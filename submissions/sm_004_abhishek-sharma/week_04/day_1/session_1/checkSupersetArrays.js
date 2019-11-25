// Time Complexity: O(m+n)
var test1 = [1, 2, 3, 5, 6, 8, 9], test2 = [5, 6, 1, 3, 2, 4]
var test3 = [1, 2, 3, 4, 5, 10, 95, 7, 88, 45, 6], test4 = [5, 6, 1, 3, 2, 4]

function checkSuperset(arr1, arr2) {
    var obj = {}
    for (var i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr1[i]
    }
    for (var i = 0; i < arr2.length; i++) {
        if (obj[arr2[i]] == undefined)
            return false
    }
    return true
}

console.log(checkSuperset(test1, test2)) // false
console.log(checkSuperset(test3, test4)) // true