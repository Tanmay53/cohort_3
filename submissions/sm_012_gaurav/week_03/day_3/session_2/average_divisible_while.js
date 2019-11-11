//Function to print the average of numbers from 0 to given limit that are divisible by a given number using while.
function averageDivisible (limit, divisor) {
    if (divisor == 0) {
        return "Divisor cannot be Zero.";
    }
    var sumDivisible = 0;    //Variable to hold sum of divisible numbers.
    var countDivisible = 0;   //Variable to hold count of divisible numbers.
    var i = 0;
    while (i<=limit) {
        if (i%divisor == 0) {
            sumDivisible += i;
            countDivisible++;
        }
        i++;
    }
    return sumDivisible/countDivisible;
}

//Calling averageDivisible function.
console.log(averageDivisible(20, 4));   //Prints average of numbers between 0 and 20 which are divisible by 4 i.e. "10".