function unique(arr) {
    var new_arr = []

    for(var i = 0; i < arr.length; i++) {
        if(new_arr.indexOf(arr[i]) == -1) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}

function union(arr1, arr2) {
    // keep all elements of arr1 as it is
    var new_arr = []
    arr1 = unique(arr1)

    for(var i = 0; i < arr1.length; i++) {
        new_arr.push(arr1[i])
    }

    // pick elements from arr2
    for(var i = 0; i < arr2.length; i++) {
        if (new_arr.indexOf(arr2[i]) == -1) {
            new_arr.push(arr2[i])
        }
    }
    return new_arr
}


// main
var arr1 = [1, 2, 3 ]
var arr2 = [4, 5, 6]

var arr1 = [1, 2, 3, 4 ]
var arr2 = [4, 5, 6]


var arr1 = [1, 2, 3, 4, 4]
var arr2 = [4, 4, 5, 6]



console.log(union(arr1, arr2))


/*

---------------------------------- Test Cases----------------------------------
Input                                                   Output
var arr1 = [1, 2, 3 ]
var arr2 = [4, 5, 6]                                    [1,2,3,4,5,6]

var arr1 = [1, 2, 3, 4 ]
var arr2 = [4, 5, 6]                                    [ 1, 2, 3, 4, 5, 6 ]

var arr1 = [1, 2, 3, 4, 4]
var arr2 = [4, 4, 5, 6]                                 [ 1, 2, 3, 4, 5, 6 ]



*/