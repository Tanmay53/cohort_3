function indexAllOf(array, element) {
    index = []
    for(var i = 0; i < array.length; i++) {
        if(array[i] === element)
            index.push(i)
    }

    if (index.length > 0)
        return index
    else
         return -1
}


// main

var array   = []
var element = 5

console.log(indexAllOf(array, element))

/*
----------------------- Test Cases ----------------------
Input                                           Output
var array   = [1, 2, 1, 4 ,1 ,6 ,1 ]
var element = 1                                [ 0, 2, 4, 6 ]   
                                     

var array   = [1, 2, 1, 4 ,1 ,6 ,1 ]
var element = 5                                 -1


var array   = []
var element = 5                                 -1

*/


