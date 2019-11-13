//Function to find union of two arrays.
function unionArrays(array1, array2) {
    var combinedObj = {};
    for (var i = 0; i < array1.length || i < array2.length; i++) {
        if (i < array1.length) {
            combinedObj[array1[i]] = array1[i];
        }
        if (i < array2.length) {
            combinedObj[array2[i]] = array2[i];
        }
    }
    return Object.values(combinedObj);
}


/* Test Case :- 
   I/P :- [1,2,3,4], [2,3,4,5,7,8,9]  O/P :- [ 1, 2, 3, 4, 5, 7, 8, 9 ]
*/
