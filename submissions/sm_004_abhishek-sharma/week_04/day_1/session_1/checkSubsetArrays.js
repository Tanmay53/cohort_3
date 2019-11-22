// Time Complexity: O(m+n)
var test1 = [1, 2], test2 = [5, 6, 1, 3, 2, 4]
var test3 = [1, 2, 8], test4 = [5, 6, 1, 3, 2, 4]

function checkSubset(arr1, arr2) {
    var obj = {}
    for (var i = 0; i < arr2.length; i++) {
        obj[arr2[i]] = arr2[i]
    }
    for (var i = 0; i < arr1.length; i++) {
        if (obj[arr1[i]] == undefined)
            return false
    }
    return true
}

console.log(checkSubset(test1, test2))
console.log(checkSubset(test3, test4))