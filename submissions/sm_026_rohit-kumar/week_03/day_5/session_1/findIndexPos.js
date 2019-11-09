function indexOf(array, element) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] === element)
            return i
    }

    return -1
}


// main

var array   = [1, 2, 3, true, 5, 6, "sama"]
var element = true

console.log(indexOf(array, element))

/*
----------------------- Test Cases ----------------------
Input                                           Output
array   = [1, 2, 3, 4, 5, 6, 7]                 4 
element = 5                                      

array   = [1, 2, 3, 4, 5, 6, "sama"]
element = "sama"                                6

array   = [1, 2, 3, 4.5, 5, 6, "sama"]
element = true                                  3

var array   = [1, 2, 3, true, 5, 6, "sama"]
var element = true                              3

*/


