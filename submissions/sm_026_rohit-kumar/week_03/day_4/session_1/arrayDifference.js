
/*
push all elements from first array which are not in second array
*/
function difference(arr1, arr2) {
    var new_arr = []

    for(var i = 0; i < arr1.length; i++) {
        if(arr2.indexOf(arr1[i]) == -1){
            new_arr.push(arr1[i])
        }
    }

    return new_arr
}


// main

var arr1 = [1,2,3]
var arr2 = [1,2,3]

console.log(difference(arr1, arr2))

/*
--------------------------------- Test Cases -----------------------------------
Input                                                   Output
var arr1 = [1]
var arr2 = [5,6]                                        [1]

var arr1 = [1,2,3]
var arr2 = [3,4,5,6]                                    [1,2]


var arr1 = [1,2,3]
var arr2 = [1,2,3]                                      []

*/