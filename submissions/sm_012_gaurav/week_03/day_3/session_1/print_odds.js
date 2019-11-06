//Function to print odd numbers from 0 to given limit.
function printOddNumbers(limit) {
    for (var i=0;i<=limit;i++) {
        if(i%2 != 0) {
            console.log(i);
        }
    }
}

//Calling printOddNumbers function.
printOddNumbers(14);