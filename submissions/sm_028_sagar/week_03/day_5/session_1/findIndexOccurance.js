var input = 9.333 //input value
var arr = [9, 5, 89, 'sagar', 5, 9.333, 'sagar'] //given array

//Invoking function
positions = allIndexPos(input, arr);
if (positions === -1) {
    console.log("input does not exist")
} else {
    console.log("Occurrences are: ", positions);
}


//function for finding all occurrence of input
function allIndexPos(input, arr) {

    var position = 0;
    var occurrence = []; //track of all occurences
    var count = 0;
    for (var i = 0; i < arr.length; i++) {

        if (input === arr[i]) {
            count++;
            occurrence.push(i);
        }
    }
    if (count === 0) {
        return -1;
    }

    return occurrence;
}