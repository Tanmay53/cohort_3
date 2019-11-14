//Function to check element before the current element.
function checkElementBefore(arr) {
    var newArr = arr.map(function(element, index, array) {
            if (element < array[index - 1]) {
                return -1;
            }
            else {
                return 1;
            }
    });
    return newArr;
}


/* Test Case :- 
   I/P :- [5,4,6,2,9]  O/P :- [1,-1,1,-1,1]
*/