/*
new_arr keeps common element from both arrays
*/

function unique(arr) {
    var new_arr = []

    for(var i = 0; i < arr.length; i++) {
        if(new_arr.indexOf(arr[i]) == -1) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}



function intersection(arr1, arr2) {
    arr1 = unique(arr1)
    arr2 = unique(arr2)
    var new_arr = []

    for(var i = 0; i < arr1.length; i++) {
        for(var j = 0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]) {
                new_arr.push(arr1[i])
            }
        }
    }
    return new_arr
}


// main
var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [7, 8, 9]


var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [1, 2, 3, 4, 5, 6]



console.log(intersection(arr1, arr2))


/*
-------------------------- Test Cases -----------------------------
Input                                                           Output
var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [4, 5, 6, 7, 8, 9]                                   [4, 5, 6]


var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [7, 8, 9]                                             []                                   


var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [1, 2, 3, 4, 5, 6]                                    [1, 2, 3, 4, 5, 6]

*/