var inputArr1 = [2, 3, 2, 10, 12, 8, 5, 'a', "I am sagar"]; //first input
var inputArr2 = [2, 3, 8, 'a', "I am sagar"] //second input

//Invoking function
checkSupersetArrays(inputArr1, inputArr2)


//function for checking superset
function checkSupersetArrays(inputArr1, inputArr2) {
    if (inputArr1.length > inputArr2.length) { //length of superset should be greater than subset array
        var count = 0;
        for (var i = 0; i < inputArr2.length; i++) {
            for (var j = 0; j < inputArr1.length; j++) {

                if (inputArr2[i] === inputArr1[j]) {
                    count++;
                    break;
                }
            }
        }
        // console.log("count: ", count)
        if (count >= inputArr2.length) {
            console.log(inputArr1, " is superset of ", inputArr2);
        } else {
            console.log(inputArr1, " is not superset of ", inputArr2);
        }

    } else {
        console.log(inputArr1, " is not superset of ", inputArr2);
    }

}

//test case

// input:
// var inputArr1 = [2, 3, 2, 10, 12, 8, 5, 'a', "I am sagar"]; 
// var inputArr2 = [2, 3, 8, 'a', "I am sagar"] 
// output:
// [ 2, 3, 2, 10, 12, 8, 5, 'a', 'I am sagar' ] ' is superset of ' [ 2, 3, 8, 'a', 'I am sagar' ]