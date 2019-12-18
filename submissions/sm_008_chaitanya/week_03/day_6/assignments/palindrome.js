function isPalindrome(str) {
    var result = ''
    for (j = str.length - 1; j >= 0; j--) {
        result += str[j]
    }
    if (str === result) {
        return 'Palindrome'
    }
    else {
        return 'Not a Palindrome'
    }
}
var str = 'tacocat'
console.log(isPalindrome(str))
