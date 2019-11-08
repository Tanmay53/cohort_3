function checkDisjointArrays (array1, array2) {
    //Case when both arrays are empty.
    if (array1.length == 0 && array2.length == 0) {
        console.log("Both the Arrays cannot be empty.");
    }
    //Case when one of the arrays is empty.
    else if (array1.length == 0 || array2.length == 0) {
        console.log("Arrays are disjoint.");
    }
    else {
        var flag = 0;     //Variable to keep track if two arrays are disjoint or not.
        for (var i = 0; i < array1.length; i++) {
            for (var j = 0; j < array2.length; j++) {
                /*If two arrays have a common element then flag will be set to 1 and both loops will 
                break else flag will be 0. */
                if (array1[i] === array2[j]) {
                    flag = 1;
                    break;
                }
                else {
                    flag = 0;
                }
            }
            if (flag == 1) {
                break;
            }
        }
        if (flag == 0) {
            console.log("Arrays are disjoint.");
        }
        else {
            console.log("Arrays are not disjoint.");
        }
    }
}


/* Test Cases :-
  I/P :- [1,2,5], [85,47,12]   O/P :- "Arrays are disjoint."
  I/P :- [25, 40, 78, 85, 98], [92, 74, 85, 12]   O/P :- "Arrays are not disjoint."
*/