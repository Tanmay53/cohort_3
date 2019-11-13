//Function to find index of first occurance of value in the array.
function findIndexPos(array, value) {
    var indexPos = -1;   //Variable to store index of first occurance of a value.
    for (var i = 0; i < array.length; i++) {
        //If first occurance is encountered then save i to indexPos and break loop else return -1.
        if (array[i] === value) {
            indexPos = i;
            break;
        }
    }
    return indexPos;
}


/* Test Cases :- 
   I/P :- "[2,85,74,63,85,74], 85"  O/P :- 1
   I/P :- "[2,85,74,63,85,74], 96"  O/P :- -1
*/