//Function to remove elements of an array greater than the target value.
function filterArray(arr, target) {
    var newArr = arr.filter(function(element) {
        return element < target;
    });
    return newArr;
}


/* Test Case :-
   I/P :- [10,20,50,40,100,150],100  O/P :- [10,20,50,40]
*/