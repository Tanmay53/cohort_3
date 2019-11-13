//Function to check if first array is superset of second array or not.
function supersetArray(array1, array2) {
    //Case when array2 is empty.
    if (array2.length == 0) {
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
        if (Object.values(combinedObj).length == Object.values(obj1).length) {
            return true;
        }
        else {
            return false;
        }
    }
}


/* Test Cases :- 
   I/P :- [1,2,3,5,6,8], [3,6,8,5]  O/P :- true
   I/P :- [1,2,3,5,6,8], [4,5,7,9]  O/P :- false
*/