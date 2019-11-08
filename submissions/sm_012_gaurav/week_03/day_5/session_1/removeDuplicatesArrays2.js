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



function removeDuplicatesArrays (array) {
    object = {
        arr: array,
        uniqueArray: [],
        reomveDuplicateElements: function() {
            for (var i = 0; i < this.arr.length; i++){
                if (indexPos(this.uniqueArray, this.arr[i]) == -1) {
                    this.uniqueArray.push(this.arr[i]);
                }
            }
            return this.uniqueArray
        }
    }
    return object.reomveDuplicateElements();
}


/* Test Case :- 
   I/P :- [25,25,25,84,84,79,85,96]  O/P :- [25,84,79,85,96]
   I/P :- [12,85,-1,-1,85]  O/P :- [12,85,-1]
*/