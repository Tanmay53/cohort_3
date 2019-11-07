//Function to return sum of all even numbers in given array of numbers.
function sumEvensArray(array) {
    if (array.length === 0) {
        return "Array is Empty."
    }
    var sumEven = 0;   //Variable to hold sum of even numbers.
    for (i=0; i<array.length; i++) {
        if (array[i]%2 == 0) {
            sumEven += array[i];
        }
    }
    return sumEven;
}

//Calling sumEvensArray function.
console.log(sumEvensArray([25,20,12,87,98,8,13]));    //Prints 138.