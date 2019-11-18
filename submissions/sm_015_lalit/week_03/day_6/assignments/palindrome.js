function palindrome(input) {
    len = input.length
    ispalindrome = "Yes"
    for (i = 0; i < len; i++) {
        if (input[i] !== input[len - (1 + i)]) {
            ispalindrome = "No"
        }
    }
    console.log(ispalindrome)
}

palindrome("12321")
palindrome("aba")