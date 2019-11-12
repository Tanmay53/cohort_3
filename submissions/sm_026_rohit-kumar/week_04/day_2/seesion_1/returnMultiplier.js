// multiply each element with given target value
function returnMultiplier(arr, target) {
    var res = arr.map(function(element){
                return element * target
            })

    return res
}


var arr = [1,2,3,4,5,6]
var target = 0

console.log(returnMultiplier(arr, target))


/*
------------------------------------ Test Cases ----------------------------------------------
Input                                                                              Output

[1,2,3,4,5,6] , 10                                                                 [1,2,3,4,5,6] , 10                                                                   

[1,2,3,4,5,6] , 1                                                                  [ 1, 2, 3, 4, 5, 6 ]

[1,2,3,4,5,6] , 0                                                                  [ 0, 0, 0, 0, 0, 0 ]

*/