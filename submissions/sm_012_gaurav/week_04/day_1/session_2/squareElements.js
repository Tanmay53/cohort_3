//Function to return square of each element of the array.
function squareElements(arr) {
    var newArr = arr.map(function(value) {
        return value ** 2;
    });
    return newArr;
}


/* Test Case :- 
   I/P :- [5,8,9,10,3]  O/P :- [25,64,81,100,9]
*/