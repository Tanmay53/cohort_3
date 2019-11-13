//Function to check if first array is subset of second array or not.
function subsetArray(array1, array2) {
    //Case when array1 is empty.
    if (array1.length == 0) {
        return true
    }
    else {
        var obj1 = {};
        var obj2 = {};
        var combinedObj = {};
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
        if (Object.values(combinedObj).length == Object.values(obj2).length) {
            return true;
        }
        else {
            return false;
        }
    }
}


/* Test Cases :- 
   I/P :- [1,2,3], [1,2,3,5,6,8]  O/P :- true
   I/P :- [1,2,3], [1,5,6,8]  O/P :- false
*/