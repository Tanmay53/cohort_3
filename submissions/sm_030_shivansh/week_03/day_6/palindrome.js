// function  to check  whether the string is palindrome or not

function palindrome(str) {

    var reverse = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    if (reverse === str)
        console.log("Palindrome");
    else
        console.log("Not a Palindrome");
}


palindrome("masai");
palindrome("a");
palindrome("aabcbaa");