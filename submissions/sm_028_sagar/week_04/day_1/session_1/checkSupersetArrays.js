var inputArr1 = [8, 10, 2, "I am sagar"] //first input
var inputArr2 = [2, 3, 2, 10, 12, 8, 5, 'a', "I am sagar"]; //second input


//invoking function
console.log(checkSuperset(inputArr2, inputArr1))



//function to checkSuperset
function checkSuperset(inputArr2, inputArr1) {
    var demo = {} //demo object to check
    for (var j = 0; j < inputArr2.length; j++) {
        demo[inputArr2[j]] = inputArr2[j];
    }
    var temp = Object.keys(demo).length;
    for (var i = 0; i < inputArr1.length; i++) {
        demo[inputArr1[i]] = inputArr1[i];
    }

    if (Object.keys(demo).length === temp) {
        return true;
    } else {
        return false;
    }
}

//input:
// var inputArr1 = [8, 10, 2, "I am sagar"] //first input
// var inputArr2 = [2, 3, 2, 10, 12, 8, 5, 'a', "I am sagar"]; //second input
//output: 'true' (i.e. inputArr2 is superset of inputArr1)