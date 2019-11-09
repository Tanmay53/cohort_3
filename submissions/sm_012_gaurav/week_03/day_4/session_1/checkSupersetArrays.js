//Function to check if first array is a superset of second array or not.
function checkSupersetArrays(array1, array2) {
    //Case when array2 is empty.
    if (array2.length === 0) {
        console.log("First array is superset of first array.");
    }
    else {
        var flag = true;   //Variable to keep track if array1 is superset of array2 or not.
        for (var i = 0; i < array2.length; i++) {
            if (array1.indexOf(array2[i]) == -1) {
                flag = false;
                break;
            }
        }

        if (flag) {
            console.log("First array is superset of second array.");
        }
        else {
            console.log("First array is not a superset of second array.");
        }

    }
}


/* Test Cases :- 
   I/P :- [1,2,3,4,5], [1,2,3]  O/P :- "First array is superset of second array."
   I/P :- [1,2,3,4,5], [1,2,8]  O/P :- "First array is not a superset of second array."
*/