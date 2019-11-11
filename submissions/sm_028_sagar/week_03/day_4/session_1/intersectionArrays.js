var inputArr1 = [5, 6, 9, 10] //first input
var inputArr2 = [6, 9, 6]

//Invoking function
intersectionArrays(inputArr1, inputArr2)


//function for intersection array
function intersectionArrays(inputArr1, inputArr2) {

    var intersection = [] //intersection array
    for (var i = 0; i < inputArr1.length; i++) {
        for (var j = 0; j < inputArr2.length; j++) {
            if (inputArr1[i] === inputArr2[j]) {
                intersection.push(inputArr1[i]);
                break;
            }
        }
    }

    console.log("Intersection array: ", intersection);
}


//test case:
// var inputArr1 = [5, 6, 9, 10] 
// var inputArr2 = [6, 9, 6]
// output:
// Intersection array:  [ 6, 9 ]