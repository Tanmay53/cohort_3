function filterEqual(arr, target) {
    var res = arr.filter(function(element){
                    return element != target
              }).map(function(element){
                    return element **2
              })

    return res
}

var arr = [1,2,3,4,5,6,7,8]
console.log(filterEqual(arr, 9))

/*
----------------------------------- Test Cases ----------------------------------------------
Input                                                                       Output
[1,2,3,4,5,6,7,8], 4                                                        [ 1, 4, 9, 25, 36, 49, 64 ]

[1,2,3,4,5,6,7,8], 5                                                        [ 1, 4, 9, 16, 36, 49, 64 ]


[1,2,3,4,5,6,7,8], 8                                                        [ 1, 4, 9, 16, 25, 36, 49 ]


[1,2,3,4,5,6,7,8], 9                                                        [ 1, 4, 9, 16, 25, 36, 49, 64 ]


*/