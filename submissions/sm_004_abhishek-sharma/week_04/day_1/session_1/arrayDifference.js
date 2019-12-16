// Time Complexity : O(m+n)
var test1 = [1, 2, 5], test2 = [8, 1, 3]
var test3 = [2, 3, 5, 7, 11, 13, 17, 19], test4 = [4, 6, 8, 9, 10, 12, 14, 16, 18, 20]
var test5 = [5, 8, 16, 27, 0, 69, 13, 95], test6 = [0, 16, 18, 99, 5, 69, 96, 99]

function arrayDifference(arr1, arr2) {
    var obj = {}, result = []
    for (var i = 0; i < arr2.length; i++) {
        obj[arr2[i]] = arr2[i]
    }
    for (var i = 0; i < arr1.length; i++) {
        if (obj[arr1[i]] == undefined)
            result.push(arr1[i])
    }
    return result
}

console.log(arrayDifference(test1, test2))
console.log(arrayDifference(test3, test4))
console.log(arrayDifference(test5, test6)) 