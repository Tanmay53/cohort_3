function checkSubsetArrays(array1, array2) {
    //Case when first array is empty.
    if (array1.length == 0 && array2.length != 0) {
        console.log("First array is subset of Second array.");
    }
    else {
        var flag = true;   //Variable to track if first array is subset of seccond array or not.
        for (var i = 0; i<array1.length; i++) {
            if (array2.indexOf(array1[i]) == -1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            console.log("Array 1 is subset of Array 2.");
        }
        else {
            console.log("Array 1 is not subset of Array 2.");
        }
    }
}

checkSubsetArrays([1,2,3,4,5], [1,2,3,4,8,6,7]);

/* Test Cases :-
   I/P :- [1,2,3,4,5], [1,2,3,4,8,6,7]  O/P :- "Array 1 is not subset of Array 2."
   I/P :- [1,2,3,4,5], [1,2,3,4,5,6,7]  O/P :- "Array 1 is subset of Array 2."
*/