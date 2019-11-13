var inputArr1 = [6, 9, 6, 7] //first input
var inputArr2 = [5, 6, 9, 10, 'Sagar'] //second input 

//Invoking function
differenceArrays(inputArr1, inputArr2)



//function for symmetric difference
function differenceArrays(inputArr1, inputArr2) {

    var common = [] //common elements between two arrays

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
    console.log("Difference Array: ", differenceArray)

}


//test case:
// input:
// var inputArr1 = [6, 9, 6, 7] 
// var inputArr2 = [5, 6, 9, 10, 'Sagar']
// output:
// Difference Array:  [ 7 ]