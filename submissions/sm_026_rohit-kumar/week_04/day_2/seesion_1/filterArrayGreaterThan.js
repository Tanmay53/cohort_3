function filterArray(arr, target) {
    var res = arr.filter(function(element){
                return element < target
            })

    return res
}


var arr = [1,2,3,4,5,6,7]
console.log(filterArray(arr, 8))

/*
--------------------------------Test Cases-------------------------------
Input                                                       Output
[1,2,3,4,5,6,7], 2                                           [1]

[1,2,3,4,5,6,7], 3                                           [1, 2]

[1,2,3,4,5,6,7], 4                                           [1, 2, 3]

[1,2,3,4,5,6,7], 8                                           [1,2,3,4,5,6,7]
*/
