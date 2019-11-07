/*
new_arr keeps common element from both arrays
*/
function intersection(arr1, arr2) {
    var new_arr = []

    for(var i = 0; i < arr1.length; i++) {
        for(var j = 0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]) {
                new_arr.push(arr1[i])
                arr2.splice(j, 1) // in case there are duplicate
            }
        }
    }
    return new_arr
}


// main
var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [4, 5, 6, 7, 7, 8, 9]

console.log(intersection(arr1, arr2))