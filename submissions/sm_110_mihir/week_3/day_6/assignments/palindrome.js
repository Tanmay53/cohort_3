// remove space in a string
function noSpace(str){
    var newStr=''
    for(i=0;i<str.length;i++)
        if(str[i]!=' ')
            newStr+=str[i]
    return newStr
}

function toLower(char){
    var highAlphabets=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var lowAlphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(var i=0;i<26;i++){
        if(char==highAlphabets[i])
            return lowAlphabets[i]
    }
}
//  check for upper case
function isUpper(char){
    if(char>='A' && char<='Z')
        return true
    else    
        return false
}

function toLowerCase(str){
    var newStr=''
    for(i=0;i<str.length;i++)
        if(isUpper(str[i]))
            newStr+=toLower(str[i])
        else
            newStr+=str[i]
    return newStr
}

function palindrome(str){
    str=noSpace(str)
    str=toLowerCase(str)
    var reverseStr=''
    for(var i=str.length-1;i>=0;i--){
        reverseStr+=str[i]
    }
    // compare reverse string with original
    for(i=0;i<str.length;i++){
        if(str[i]!=reverseStr[i])
            return false
    }
    return true
}

console.log(palindrome('Never Odd Or Even'))

/*
passed test cases
taco cat
nitin
10801
108 01
Never Odd Or Even
*/