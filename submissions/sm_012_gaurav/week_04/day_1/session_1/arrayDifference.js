//Function to find difference of two given arrays.
function arrayDifference(array1, array2) {
    var obj1 = {};
    var obj2 = {};
    for (var i = 0; i < array1.length; i++) {
        obj1[array1[i]] = array1[i];
    }
    for (var i = 0; i < array2.length; i++) {
        obj2[array2[i]] = array2[i];
    }
    var uniqueArray1 = Object.values(obj1);
    var uniqueArray2 = Object.values(obj2);
    var countObj1 = {};   //Variable to store count of each element of uniqueArray1.
    for (var i = 0; i < uniqueArray1.length; i++) {
        countObj1[uniqueArray1[i]] = 0;
    }
    for (var i = 0; i < uniqueArray2.length; i++) {
        countObj1[uniqueArray2[i]]++;
    }
    var diffArr = [];
    keys = Object.keys(countObj1);
    for (var i = 0; i < keys.length; i++) {
        if (countObj1[keys[i]] === 0) {
            diffArr.push(Number(keys[i]));
        }
    }
    return diffArr;
}


/* Test Case :- 
   I/P :- [1,2,3,4,5,6], [2,3,9,8]  O/P :- [1,4,5,6]
*/