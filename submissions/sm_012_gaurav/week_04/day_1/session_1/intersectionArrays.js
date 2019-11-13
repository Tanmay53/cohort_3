//Function to find intersection of two arrays.
function intersectionArrays(array1, array2) {
    var obj1 = {};
    var obj2 = {};
    for (var i = 0; i < array1.length; i++) {
        obj1[array1[i]] = array1[i];
    }
    for (var i = 0; i < array2.length; i++) {
        obj2[array2[i]] = array2[i];
    }
    var uniqueArray1 = Object.values(obj1);   //Unique elements of array1.
    var uniqueArray2 = Object.values(obj2);   //Unique elements of array2.
    var countObj = {};   //Variable to store of count of each element of array1 and array2.
    for (var i = 0; i < uniqueArray1.length || i < uniqueArray2.length; i++) {
        if (i < uniqueArray1.length) {
            countObj[uniqueArray1[i]] = 0;
        }
        if (i < uniqueArray2.length) {
            countObj[uniqueArray2[i]] = 0;
        }
    }
    for (var i = 0; i < uniqueArray1.length || i < uniqueArray2.length; i++) {
        if (i < uniqueArray1.length) {
            countObj[uniqueArray1[i]]++;
        }
        if (i < uniqueArray2.length) {
            countObj[uniqueArray2[i]]++;
        }
    }
    var intersecArray = [];   //Variable to hold intersection of two arrays.
    for (key in Object.keys(countObj)) {
        if (countObj[key]>1) {
            intersecArray.push(Number(key));
        }
    }
    return intersecArray;
}


/* Test Cases :- 
   I/P :- [1,2,3,7,8,9,1], [2,3,4,5]   O/P :- [2,3]
   I/P :- [1,2,3,7,8,9,1], [4,5,6]   O/P :- []
*/