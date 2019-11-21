// Time Complexity : O(m+n)
var test1 = [1, 2, 5], test2 = [8, 1, 3]
var test3 = [2, 3, 5, 7, 11, 13, 17, 19], test4 = [4, 6, 8, 9, 10, 12, 14, 16, 18, 20]
var test5 = [5, 8, 16, 27, 0, 69, 13, 95], test6 = [0, 16, 18, 99, 5, 69, 96, 99]


function checkIntersection(arr1, arr2) {
    var obj1 = {}, intersectArray = []
    for (var i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = arr1[i]
    }
    for (var i = 0; i < arr2.length; i++) {
        if (obj1[arr2[i]] != undefined)
            intersectArray.push(arr2[i])
    }
    return intersectArray
}

console.log(checkIntersection(test1, test2)) // 1 common element
console.log(checkIntersection(test3, test4)) // Empty array
console.log(checkIntersection(test5, test6)) // 4 common element