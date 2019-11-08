//Function to print Even numbers from 0 to given limit.
function printEvenNumbers(limit) {
    for (i=0; i<=limit; i++) {
        if (i%2 == 0) {
            console.log(i);
        }
    }
}

//Calling printEvenNumbers function.
printEvenNumbers(20);  //Prints Even Numbers from 0 to 20.