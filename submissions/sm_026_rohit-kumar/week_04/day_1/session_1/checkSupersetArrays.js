// using intersection function from last question
function equal(arr1, arr2) {
    var dict = {}

    if(arr1.length != arr2.length)
        return false
    
    arr1.map(function(element) {
        dict[element] = true
    })
    

    for(var i = 0; i < arr2.length; i++) {
        if(dict[arr2[i]] == undefined)
            return false
    }

    return true
}

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


function checkSubset(arr1, arr2) { 
    var interRes = intersection(arr1, arr2)  // == first array
    // if this result is equal to the array1 
    return equal(arr2, interRes)
}


var arr1 = [1,2,3,7,4,5]
var arr2 = [4,5,6,7,1,2,3]

console.log(checkSubset(arr1, arr2))

/*
---------------------------------------------Test Cases------------------------------------------
Input                                                                   Output
var arr1 = [4,5,6,7,1,2,3] 
var arr2 =  []                                                          true

var arr1 = [4,5,6,7,1,2,3]
var arr2 = [1,2,3]                                                      true

var arr1 = [4,5,6,7,1,2,3]
var arr2 = [1,2,3,9]                                                    false


var arr1 = [1,2,3,7,4,5,6]  
var arr2 = [4,5,6,7,1,2,3]                                              true

var arr1 = [4,5,6,7,1,2,3]
var arr2 = [1,2,3,7,4,5,6,9]                                              false

*/
