var givenArr = [14, 13, 10, 5, 60, 7, 27] //given Array

//Invoking function;
addEven(givenArr);


//function for sum of even numbers from given array
function addEven(givenArr) {
    var sum = 0;
    for (var i = 0; i < givenArr.length; i++) {
        if (Number(givenArr[i]) % 2 === 0) {
            console.log("Numbers: ", givenArr[i]);
            sum = sum + Number(givenArr[i]);
        }
    }
    console.log("Total addition of even numbers in given array is: ", sum);
}


//TEST CASES
// input:
// givenArr = [14, 13, 10, 5, 60, 7, 27]
//output:
//Total addition of even numbers in given array is:  84