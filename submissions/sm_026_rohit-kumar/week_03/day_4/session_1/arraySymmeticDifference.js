// union function from earlier question

function union(arr1, arr2) {
    // keep all elements of arr1 as it is
    var new_arr = []
    new_arr = new_arr.concat(arr1)

    // pick elements from arr2
    for(var i = 0; i < arr2.length; i++) {
        if (new_arr.indexOf(arr2[i]) == -1) {
            new_arr.push(arr2[i])
        }
    }
    return new_arr
}

// intersection function from earlier question

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

// difference function from previous questions
function difference(arr1, arr2) {
    var new_arr = []

    for(var i = 0; i < arr1.length; i++) {
        if(arr2.indexOf(arr1[i]) == -1){
            new_arr.push(arr1[i])
        }
    }

    return new_arr
}

// symmetric difference will be union of arrays minus the intersection of arryas
function symmetric_difference(arr1, arr2) {
    arr_union = union(arr1, arr2)
    arr_inter = intersection(arr1, arr2)

    return difference(arr_union, arr_inter)
}


// main
var arr1 = [1,2,3,4,5]
var arr2 = [4,5,6,7,8,9]


console.log(symmetric_difference(arr1, arr2))
