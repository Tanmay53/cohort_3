var inputArr1 = [2, 3, 5, 9] //input array 1
var inputArr2 = [6, 8, 10, 9] //input array 2


//Invoking function
checkDisjointArrays(inputArr1, inputArr2)



//function for checking Disjoint
function checkDisjointArrays(inputArr1, inputArr2) {

    var demoObj = {};
    for (var i = 0; i < inputArr1.length; i++) {
        demoObj[inputArr1[i]] = inputArr1[i];
    }
    for (var j = 0; j < inputArr2.length; j++) {
        if (inputArr2[j] == demoObj[inputArr2[j]]) {
            return console.log("Both arrays are not disjoint arrays")
        }
    }
    return console.log("Both arrays are disjoint arrays")
}

//input
// var inputArr1 = [2, 3, 5, 9] //input array 1
// var inputArr2 = [6, 8, 10] //input array 2
//output: Both arrays are disjoint arrays
//input
// var inputArr1 = [2, 3, 5, 9] //input array 1
// var inputArr2 = [6, 8, 10, 9] //input array 2
//output: Both arrays are not disjoint arrays