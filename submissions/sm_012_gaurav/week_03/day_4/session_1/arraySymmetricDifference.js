//Function to find symmetric difference of two arrays.
function arraySymmetricDifference (array1, array2) {
    var symmetricDifferenceArrays = [];   //Variable to store symmetric difference of two arrays.
    for (var i = 0; i < array1.length; i++) {
        //If element of array1 is not in array2.Push it into symmetricDifferenceArrays.
        if (symmetricDifferenceArrays.indexOf(array1[i]) == -1 && array2.indexOf(array1[i]) == -1) {
            symmetricDifferenceArrays.push(array1[i]);
        }
    }
    for (var i = 0; i < array2.length; i++) {
        //If element of array2 is not in array1.Push it into symmetricDifferenceArrays.
        if (symmetricDifferenceArrays.indexOf(array2[i]) == -1 && array1.indexOf(array2[i]) == -1) {
            symmetricDifferenceArrays.push(array2[i]);
        }
    }
    return symmetricDifferenceArrays;
}



/* Test Case :- 
   I/P :- [1,2,3], [3,4]  O/P :- [1,2,4]
*/