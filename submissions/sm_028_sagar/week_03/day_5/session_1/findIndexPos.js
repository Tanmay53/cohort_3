var input = 8; //input value
var arr = [2, 8, 10, 6.33, 'sagar', 45, 'Sagar'] //input array

//Invoking function
var position = indexPos(input, arr);

if (position >= 0) {
    console.log("Index of ", input, " in array is: ", position);
} else {
    console.log("number does not exist")
}



//function for finding first position of value in array:
function indexPos(input, arr) {

    var position = 0;
    for (var i = 0; i < arr.length; i++) {
        var flag = false;
        if (input === arr[i]) {
            flag = true;
            position = i;
            break;
        }
    }
    if (flag == false) {
        return -1;
    }

    return position;
}