var inputArr1 = [8, 10, 5, "I am sagar"] //first input
var inputArr2 = [2, 3, 2, 10, 12, 8, 5, 'a', "I am sagar"]; //second input

//Invoking function
checkSubsetArrays(inputArr1, inputArr2)


//function for checking subset
function checkSubsetArrays(inputArr1, inputArr2) {
    if (inputArr1.length < inputArr2.length) { //length of subset should be less than main array
        var count = 0;
        for (var i = 0; i < inputArr1.length; i++) {
            for (var j = 0; j < inputArr2.length; j++) {

                if (inputArr1[i] === inputArr2[j]) {
                    count++;
                    break;
                }
            }
        }
        // console.log("count: ", count)
        if (count >= inputArr1.length) {
            console.log(inputArr1, " is subset of ", inputArr2);
        } else {
            console.log(inputArr1, " is not subset of ", inputArr2);
        }

    } else {
        console.log(inputArr1, " is not subset of ", inputArr2);
    }

}


//test case
// var inputArr1 = [8, 10, 5, "I am sagar"] 
// var inputArr2 = [2, 3, 2, 10, 12, 8, 5, 'a', "I am sagar"];
// output:
// [ 8, 10, 5, 'I am sagar' ] ' is subset of ' [ 2, 3, 2, 10, 12, 8, 5, 'a', 'I am sagar' ]