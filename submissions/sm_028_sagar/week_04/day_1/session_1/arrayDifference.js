var input2 = [10, 3.5, 22, 5, 7, 0, 0];
var input1 = [55, 49, 0, 10, 22, 99, 3.5] //input

//invoking function
console.log(arrayDifference(input1, input2))


//function array difference
function arrayDifference(input1, input2) {

    var obj = {} //sample object
    var difference = [];
    for (var i = 0; i < input1.length; i++) {
        obj[input1[i]] = input1[i];
    }
    for (var j = 0; j < input2.length; j++) {
        if (input2[j] != obj[input2[j]]) {
            difference.push(input2[j]);
        }
    }
    return difference;
}


// input:
// var input2 = [10, 3.5, 22, 5, 7, 0, 0];
// var input1 = [55, 49, 0, 10, 22, 99, 3.5] //input
// output: [ 5, 7 ]