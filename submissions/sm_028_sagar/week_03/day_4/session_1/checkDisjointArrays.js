var inputArr1 = [2, 3, 5, 9] //input array 1
var inputArr2 = [6, 8, 1] //input array 2

// var inputArr1 = ['a', 'sagar', 'rakshu', 'bell', 0];
// var inputArr2 = ['b', 'mentor', 'rakshu', 8, 9, 0]

//Invoking function
checkDisjointArrays(inputArr1, inputArr2);



//function for checking disjoint property:
function checkDisjointArrays(inputArr1, inputArr2) {
    var count = 0;
    for (var i = 0; i < inputArr1.length; i++) {
        for (var j = 0; j < inputArr2.length; j++) {
            if (inputArr1[i] === inputArr2[j]) {
                count++; //if there is any common element then loop will break
                break;
            }
        }
        if (count > 0) {
            break;
        }
    }

    if (count > 0) {
        console.log("Both the arrays are not disjoint arrays")
    } else {
        console.log("Both the arrays are disjoint arrays")
    }
}


//TEST CASE
// input:
// var inputArr1 = ['a', 'sagar', 'rakshu', 'bell', 0];
// var inputArr2 = ['b', 'mentor', 'rakshu', 8, 9, 0]
// output:
// Both the arrays are not disjoint arrays

// input:
// var inputArr1 = [2, 3, 5, 9] 
// var inputArr2 = [6, 8, 1] 
// output:
// Both the arrays are disjoint arrays