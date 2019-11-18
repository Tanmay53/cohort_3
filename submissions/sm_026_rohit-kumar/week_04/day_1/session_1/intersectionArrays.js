function intersection(arr1, arr2) {
    var dict = {}
    var new_arr = []

    arr1.map(function(element){
        dict[element] = true
    })

    arr2.forEach(function(element){
        if(dict[element] == true) {
            new_arr.push(element)
        }
    })

    return new_arr
}


var arr1 = [1,2,3,4,5]
var arr2 = [1,2,3,4,5]

console.log(intersection(arr1, arr2))

/*
-------------------------------------------- Test Case -----------------------------------------------------
Input                                                                               Output
var arr1 = [1,2,3,4,5,6]
var arr2 = [4,5,6,7,8,9]                                                            [ 4, 5, 6 ]


var arr1 = [1,2,3,4,5,6]
var arr2 = [6,7,8,9]                                                                [ 6 ]


var arr1 = [1,2,3,4,5]
var arr2 = [6,7,8,9]                                                                  []


var arr1 = [1,2,3,4,5]
var arr2 = [1,2,3,4,5]                                                              [ 1, 2, 3, 4, 5 ]                                                               


*/
