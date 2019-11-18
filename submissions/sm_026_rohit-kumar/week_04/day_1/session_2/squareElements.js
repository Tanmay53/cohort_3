// function to square elements of array
function squareElements(arr) {
    var res =  arr.map(function(element) {
                    return element **2
                })

    return res
}

var arr = []
console.log(squareElements(arr))


/*
----------------------- Test Case -----------------------------
Input                                               Output
[1,2,3,4,5,6]                                       [ 1, 4, 9, 16, 25, 36 ]

[-1,-2,-3,4]                                        [ 1, 4, 9, 16]

[]                                                  []


*/


