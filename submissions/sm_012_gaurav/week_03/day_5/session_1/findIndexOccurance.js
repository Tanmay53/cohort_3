function findIndexOccurance(array, value) {
    var indexOccurances = [];   //Variable to hold indexes of all the occurances of a value in the array.
    //If value is value is present in array push index of all occurances to indexOccurances array else return -1.
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            indexOccurances.push(i);
        }
    }
    if (indexOccurances.length === 0) {
        return -1;
    }
    else {
        return indexOccurances;
    }
}


/* Test Cases :- 
   I/P :- "['a','b','c','a','d','e','a','a'], 'z'"   O/P :- -1
   I/P :- "['a','b','c','a','d','e','a','a'], 'a'"   O/P :- [0,3,6,7]
*/