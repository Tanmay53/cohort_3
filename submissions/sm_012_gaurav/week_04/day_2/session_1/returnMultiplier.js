//Function to return an array where each element is multiplied by a target value.
function returnMultiplier(arr, target) {
    var newArr = arr.map(function(element) {
        return element * target;
    });
    return newArr;
}


/* Test Case :- 
   I/P :- [10,20,30,40,50], 5  O/P :- [50, 100, 150, 200, 250]
*/