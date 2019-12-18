// var input = 'taco  1  ocat' //input
input = '10801'

//Invoking function
palindrome(input)

//function for checking palindrome
function palindrome(input) {
    var temp = input; //temporary input storage

    //filtering space from string
    input = ''
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] === ' ') {
            continue;
        }
        input = input + temp[i];
    }
    // console.log(input)

    //creating reverse input string
    var str = '';
    for (var i = input.length - 1; i >= 0; i--) {
        str = str + input[i];
    }

    if (input === str) {
        console.log("input is palindrome")
    } else {
        console.log("input is not palindrome")
    }
}