//Function to find index of first occurance of value in the array.
function indexPos(array, value) {
    var position = -1;   // Variable to hold first position of value in the array.
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            position = i;
            break;
        }
    }
    return position;
}

function removeDuplicatesArrays(array) {
    var uniqueArray = [];   //Variable to hold unique elements of array.
    for (var i = 0; i < array.length; i++) {
        /*Condition to check if particular element is present in the uniqueArray or not.
        If not, push the element into uniqueArray.*/
        if (indexPos(uniqueArray, array[i]) == -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}


/* Test Cases :- 
    I/P :- [8,8,5,8,6,7]  O/P :- [8,5,6,7]
    I/P :- [25, 85, 96, 74, 85, 74, 96]  O/P :- [25,85,96,74]
*/