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

function checkDisjoint(arr1, arr2) {
    if(intersection(arr1, arr2).length == 0) 
        return true
    else
        return false
}

var arr1 = [1,2]
var arr2 = [3,4]

console.log(checkDisjoint(arr1, arr2))

//console.log(intersection(arr1, arr2))


/*
------------------------------------------ Test Cases -----------------------------
Input                                                                       Output

var arr1 = [1,2,3,4]
var arr2 = [4,5,6,7,8,9]                                                     true


var arr1 = [1,2,3,4]
var arr2 = [4,5,6,7,8,9]                                                     false

var arr1 = []
var arr2 = []                                                                 true
*/

