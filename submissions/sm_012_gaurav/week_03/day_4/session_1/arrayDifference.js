//Function to find difference of two arrays.
function arrayDifference(array1, array2) {
    var differenceOfArrays = [];   //Variable to store difference of two arrays.
    var flag = false;   //Variable to keep if an element from first array is present in second array or not.
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array2[j] == array1[i]) {
                flag = true;
                break;
            }
            else {
                flag = false;
            }
        }
        if (!flag) {
            differenceOfArrays.push(array1[i]);
        }
    }
    return differenceOfArrays;
}


/* Test Case :- 
   I/P :- [1,2,3,4,5], [2,3,4,9,7,10]  O/P :- [1,5]
*/