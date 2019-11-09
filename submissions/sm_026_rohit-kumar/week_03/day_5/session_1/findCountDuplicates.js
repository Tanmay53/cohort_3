// counts the target return the result as object
function countDuplicates(arr, target) {
    var count = 0
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == target)
            count = count + 1
    }

    return {"target" : target, "count" : count}
}


// main

var arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3]
var target = 1
console.log(countDuplicates(arr, target))
