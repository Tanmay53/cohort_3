// beg and end keep track of extreme characters
function palindrome(string) {
    var beg = 0
    var end = string.length - 1

    while(beg <= end) {
        if(string[beg] != string[end])
            return false
        beg++
        end--
    }
    return true
}


var str = "yooooooy"
console.log(palindrome(str))
/*
-------------------------------- Test Cases ------------------------------------------------
Input                                                                       Output

ywy                                                                         true
madam                                                                       true
sam                                                                         false

yooooooy                                                                    true
*/
