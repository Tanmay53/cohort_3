//Function to remove duplicates from an array using Object.
function removeDuplicatesArrays(array) {
    object = {};
    for (var i = 0; i < array.length; i++) {
        object[array[i]] = array[i];
    }
    return Object.keys(object);
}



/* Test Case :- 
   I/P :- [25,25,25,84,84,79,85,96]  O/P :- ['25','84','79','85','96']
   I/P :- [12,85,-1,-1,85]  O/P :- ['12','85','-1']
*/