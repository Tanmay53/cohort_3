function arrayDifference(arr1, arr2) {
    // arr1 - arr2
    var dict = {}
    var difference = []
    arr2.forEach(function(element){
        dict[element] = true
    })

    arr1.forEach(function(element){
        if(dict[element] == undefined) {
            difference.push(element)
        }
    })

    return difference    
}


var arr1 = [4,1,2,3]
var arr2 = [4,5,6,7,8]

console.log(arrayDifference(arr1, arr2))

/*------------------------------Test Case-------------------------------------------------
Input                                                           Output
var arr1 = [1,2,3,4,5,6]
var arr2 = [4,5,6,7,8]                                          [ 1, 2, 3 ]


var arr1 = [4,5,6]
var arr2 = [4,5,6,7,8]                                          []


var arr1 = [4,1,2,3]
var arr2 = [4,5,6,7,8]                                           [ 1, 2, 3 ]




*/