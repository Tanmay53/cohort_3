var arr1 = [1, 2, 3, 4, 5, 9]
var arr2 = [1, 2, 3, 4]
counter = 0
function supersetArray(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                counter++
            }
        }
    }
    if (counter == arr2.length && counter<=arr1.length) {
        console.log("The array is superset of given array")
    }
    else {
        console.log("The array is not a superset of the given array")
    }
}
supersetArray([1,2,3,4,5,6],[1,2,3,4,5])