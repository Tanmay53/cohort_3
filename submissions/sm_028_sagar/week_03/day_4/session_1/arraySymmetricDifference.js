var inputArr1 = [5, 6, 9, 10] //first input
var inputArr2 = [6, 9, 6, 7] //second input

//Invoking function
symmetricDifferenceArrays(inputArr1, inputArr2)



//function for symmetric difference
function symmetricDifferenceArrays(inputArr1, inputArr2) {

    var common = [] //commont elements between two arrays

    //array for seprating common elements
    for (var i = 0; i < inputArr1.length; i++) {
        for (var j = 0; j < inputArr2.length; j++) {
            if (inputArr1[i] === inputArr2[j]) {
                common.push(inputArr1[i]);
            }
        }
    }
    // console.log("common : ", common)



    //array for different elements from input 1
    var differenceArray = [];
    for (var i = 0; i < inputArr1.length; i++) {
        var count = 0;
        for (var j = 0; j < common.length; j++) {
            if (inputArr1[i] === common[j]) {
                count++;
            }
        }
        if (count === 0) {
            differenceArray.push(inputArr1[i])
        }
    }
    // console.log(differenceArray)


    //array for different elements from input 2

    for (var i = 0; i < inputArr2.length; i++) {
        var count = 0;
        for (var j = 0; j < common.length; j++) {
            if (inputArr2[i] === common[j]) {
                count++;
            }
        }
        if (count === 0) {
            differenceArray.push(inputArr2[i])
        }
    }

    console.log("Symmetric difference array: ", differenceArray)
}



//test case
// input:
// var inputArr1 = [5, 6, 9, 10] 
// var inputArr2 = [6, 9, 6, 7]
// output:
// Symmetric difference array:  [ 5, 10, 7 ]