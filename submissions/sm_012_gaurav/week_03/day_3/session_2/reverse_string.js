//Function to print string in a reverse order.
function printReverseString(string) {
    var reversedString = '';
    for  (var i=string.length-1;i>=0;i--) {
        reversedString += string[i];
    }
    return reversedString;
}

//Calling printReverseString function.
console.log(printReverseString("Hello Masai"));   //Prints "iasaM olleH".