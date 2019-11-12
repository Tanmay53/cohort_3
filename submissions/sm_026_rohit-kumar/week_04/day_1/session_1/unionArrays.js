function union(arr1, arr2) {
    var dict = {}

    arr1.map(function(element){
        dict[element] = true
    })
    
    arr2.map(function(element){
        dict[element] = true
    })

    var arr = Object.keys(dict).map(function(element){
        return Number(element)
    })
    return arr
}


var arr1 = []
var arr2 = []

console.log(union(arr1, arr2))


/*
--------------------------------------------------- Test Case --------------------------------------------
Input                                                                                       Output
var arr1 = [1,2,3,4]
var arr2 = [5,6,7,8]                                                                     [ 1, 2, 3, 4, 5, 6, 7, 8 ]

var arr1 = []
var arr2 = [5,6,7,8]                                                                     [5,6,7,8]  


var arr1 = []
var arr2 = []                                                                             []  

*/
