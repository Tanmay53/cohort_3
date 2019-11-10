//Function to find intersection of two arrays.
function intersectionArrays(array1, array2) {
    var intersectionOfArrays = [];   //Variable to store intersection of two arrays.
    var flag = false;   //Variable to keep track if the elements in the array are same or not.
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                flag = true;
                break;
            }
            else {
                flag = false;
            }
        }
        if (flag) {
            intersectionOfArrays.push(array1[i]);
        }
    }

    return intersectionOfArrays;
}


/* Test Case :- 
   I/P :- [1,2,3,4,5],[2,5,6,7]  O/P :- [2,5]
   I/P :- ['b','c','z','r'],['a','b','c','d']  O/P :- ['b','c']
*/