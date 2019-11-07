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


// main
var arr1 = [1, 2, 3, 4, 5, 10]
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(union(arr1, arr2))