var input = 'racecar' //input

//Invoking function
palindrome(input)



//function for checking palindrome
function palindrome(input) {

    if (typeof input) {
        var str = '';
        for (var i = input.length - 1; i >= 0; i--) {
            if (input[i] === ' ') {
                continue;
            }
            str = str + input[i];
        }
        if (input === str) {
            console.log("input is palindrome")
        } else {
            console.log("input is not palindrome")
        }
    } else {

    }


}