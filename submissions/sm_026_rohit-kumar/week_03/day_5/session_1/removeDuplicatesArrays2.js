// using objects to keep track of seen elements
function removeDuplicates(arr) {
    var new_arr = []
    var end = 0
    dict = {}

    for(var i = 0; i < arr.length; i++) {
        if (dict[arr[i]] == undefined) {
            dict[arr[i]] = 1
            new_arr[end] = arr[i]
            end++
        }
    }

    return new_arr   
}


// main
var arr = [1, 2, "ram", "ramesh", 4.5, true , false, 1, "ram", 4.5]
console.log(removeDuplicates(arr))



/*
------------------------------------- Test Cases -------------------------------------------------
Input                                                                           Output

var arr = [1, 2, "ram", "ramesh", 4.5, true , false, 1, "ram", 4.5]                [ 1, 2, 'ram', 'ramesh', 4.5, true, false ]
 
arr  = [ 1,1,1,1,1,12,2,2,2]                                                       [ 1, 12, 2 ]

arr  = [ 1]                                                                        [1]
*/