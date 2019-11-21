// Time Complexity : O(m+n)
var arr5 = [1, 2, 3], arr6 = [1, 5, 6]
var arr3 = [1, 2, 3], arr4 = [5, 6]

function checkDisjoint(arr1, arr2) {
    var obj = {}
    for (var i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr1[i]
    }
    for (var i = 0; i < arr2.length; i++) {
        if (obj[arr2[i]] == undefined)
            obj[arr2[i]] = arr2[i]
        else
            return false
    }
    return true
}

console.log(checkDisjoint(arr5, arr6)) // false
console.log(checkDisjoint(arr3, arr4)) // true