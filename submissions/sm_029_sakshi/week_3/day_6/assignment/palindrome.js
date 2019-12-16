function palindrome(str) 
{
    var len = str.length;
    var mid = Math.floor(len/2);
    var len1=str.length-1;
    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len1- i]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome("madam"))