//Function to check if two arrays are disjoint or not.
function disjointArrays(array1, array2) {
    obj1 = {};   //Variable to store elements of array1.
    obj2 = {};   //Variable to store elements of array2.
    combinedObj = {};   //Variable to store contents of both arrays.
    for (var i = 0; i < array1.length; i++) {
        obj1[array1[i]] = array1[i];
    }
    for (var i = 0; i < array2.length; i++) {
        obj2[array2[i]] = array2[i];
    }
    for (var i = 0; i < array1.length || i < array2.length; i++) {
        if (i < array1.length) {
            combinedObj[array1[i]] = array1[i];
        }
        if (i < array2.length) {
            combinedObj[array2[i]] = array2[i];
        }
    }
    if (Object.values(combinedObj).length == Object.values(obj1).length+Object.values(obj2).length) {
        return true;
    }
    else {
        return false;
    }

}

console.log(disjointArrays([1,1,2,3,4], [5,6,9]));
/* Test Case :- 
   I/P :- [1,1,2,3,4], [5,6,9]  O/P :- true
   I/P :- [1,1,2,3,4], [1,5,6,9]  O/P :- false
*/
