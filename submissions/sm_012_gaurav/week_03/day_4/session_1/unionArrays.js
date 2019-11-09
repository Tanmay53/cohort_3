//Function to find union of two arrays.
function unionArrays(array1, array2) {
    var unionOfArrays = [];   //Variable to store union of two arrays.
    for (var i = 0; i < array1.length; i++) {
        if (unionOfArrays.indexOf(array1[i]) == -1) {
            unionOfArrays.push(array1[i]);
        }
    }
    for (var j = 0; j < array2.length; j++) {
        if (unionOfArrays.indexOf(array2[j]) == -1) {
            unionOfArrays.push(array2[j]);
        }
    }
    return unionOfArrays;
}


/* Test Case :- 
   I/P :- [1,2,3,4,5,8,8,8], [8,5,7,2,1,3,2]  O/P :- [1,2,3,4,5,8,7]
   I/P :- ['a','b','c','d','e','f'], ['e','f','g','h']  O/P :- ['a','b','c','d','e','f','g','h']
*/