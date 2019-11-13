//Function to remove spaces from the string.
function removeSpaces(input) {
    var newString = ''
    for (var i = 0; i < input.length; i++) {
        if (input[i] != ' ') {
            newString += input[i];
        }
    }
    return newString;
}

//Function to find index of a character in the given string.
function indexOf(input, character) {
    var index = -1;   //Variable to keep track of the index of the character.
    for (var i = 0; i < input.length; i++) {
        if (character == input[i]) {
            index = i;
            break;
        }
    }
    return index;
}

//Function to convert string to lower case.
function lowerCase(input) {
    var lowerCaseString = '';   //Variable to hold Lower case String.
    var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < input.length; i++) {
        var indexInCapital = indexOf(capitalLetters, input[i]);
        if (indexInCapital != -1) {
            lowerCaseString += smallLetters[indexInCapital];
        }
        else {
            lowerCaseString += input[i];
        }
    }
    return lowerCaseString;
}


//Function to find if a string is palindrome or not.
function palindrome(input) {
    input = lowerCase(input);   //Converts string to lower case.
    input = removeSpaces(input);   //Removes spaces from string.
    var isPalindrome = true;   //Variable to keep track if a string is palindrome or not.
    for (var i = 0; i < Math.floor(input.length/2); i++) {
        if (input[i] != input[input.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        console.log("Input string is a Palindrome.");
    }
    else {
        console.log("Input string is not a Palindrome.");
    }
}


palindrome('Madamadam')

/* Test Cases :- 
   I/P :- "Madam"  O/P :- "Input string is a Palindrome."
   I/P :- "taco cat"  O/P :- "Input string is a Palindrome."
   I/P :- "10801"  O/P :- "Input string is a Palindrome."
   I/P :- "108901"  O/P :- "Input string is not a Palindrome."
*/