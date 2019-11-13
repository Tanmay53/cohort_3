//Function to find number of digits in an integer.
function lenInt(number) {
    var cnt = 0;  //Variable to keep track of number of digits in number.
    while (number !== 0) {
        cnt++;
        number = Math.floor(number/10);
    }
    return cnt;
}

//Function to find reverse of a integer.
function reverseInteger(number) {
    var isNegative = false;  //Variable to keep track if number is negative or not.
    if (number<0) {
        isNegative = true;
        number = number * (-1);
    }
    var reverse = 0;   //Variable to store reverse of number.
    lenNumber = lenInt(number);
    for (var i = 0; i < lenNumber; i++) {
        var digit = number%10;
        reverse += digit*(10 ** (lenNumber-i-1));
        number = Math.floor(number/10);
    }
    if (isNegative) {
        reverse = reverse * (-1);
    }
    return reverse;
}

console.log(reverseInteger(-1234))
/* Test Cases :- 
   I/P :- 12345  O/P :- 54321
   I/P :- 1000  O/P :- 1 
   I/P :- 225896471367  O/P :- 763174698522
   I/P :- -1234  O/P :- -4321
*/