var inputArr1 = [4, 4, 'sagar']; //first input
var inputArr2 = [4, 5, 10, 'a', 78, 'sagar', 36] //second input



//Invoking function
unionArray(inputArr1, inputArr2)


//function for union array
function unionArray(inputArr1, inputArr2) {

    var demoArr = inputArr1;
    //concatenation of two arrays
    for (var i = 0; i < inputArr2.length; i++) {
        demoArr.push(inputArr2[i]);
    }

    var sampleArr = [];

    for (var i = 1; i < demoArr.length; i++) {
        var count = 0;

        for (var j = 0; j < sampleArr.length; j++) {
            if (demoArr[i] === sampleArr[j]) {
                count++;
                break;
            }
        }
        if (count === 0) {
            sampleArr.push(demoArr[i]);
        }
    }

    console.log(sampleArr);
}



//test case
// var inputArr1 = [4, 4, 'sagar'];
// var inputArr2 = [4, 5, 10, 'a', 78, 'sagar', 36]
// output:
// [ 4, 'sagar', 5, 10, 'a', 78, 36 ]