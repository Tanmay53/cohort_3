//Function to remove all values in the array which are equal to target value and square remaining elements.
function arrayEqualTo(arr, target) {
    var newArr = arr.filter(function(element) {
        return element != target;
    }).map(function(element) {
        return element*element;
    });
    return newArr;
}


/* Test Case :- 
   I/P :- [10,20,50,10,15,10], 10  O/P :- [400,2500,255]
*/