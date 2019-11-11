//  check for upper case
function isUpper(char){
    if(char>='A' && char<='Z')
        return true
    else    
        return false
}

function toUpper(char){
    var highAlphabets=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var lowAlphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(var i=0;i<lowAlphabets.length;i++){
        if(char==lowAlphabets[i])
            return highAlphabets[i]
    }
}

function toLower(char){
    var highAlphabets=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var lowAlphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(var i=0;i<26;i++){
        if(char==highAlphabets[i])
            return lowAlphabets[i]
    }
}
// camelCase- first letter of every word,expcept first word, is upper case and rest is lower case
function camelCase(str){
    var result='',capsLetter=false
    for(i=0;i<str.length;i++){
        if(str[i]!=' ')
            if(capsLetter){
                result+=toUpper(str[i])
                // result+=str[i].toUpperCase()
                capsLetter=false
            }
            else{
                if(isUpper(str[i]))
                    result+=toLower(str[i])
                else
                    result+=str[i]
            }
        else
            capsLetter=true
    }
    return result
}

// snake_Case - words are seperated by underscore and all are lower case
function snakeCase(str){
    var result=''
    for(i=0;i<str.length;i++){
        if(str[i]!=' '){
            if(isUpper(str[i]))
                result+=toLower(str[i])
            else
                result+=str[i]
        }
        else
            result+='_'
    }
    return result
}

// words are sepetated by hyphen and all are lower case
function hyphenCase(str){
    var result=''
    for(i=0;i<str.length;i++){
        if(str[i]!=' '){
            if(isUpper(str[i]))
                result+=toLower(str[i])
            else
                result+=str[i]
        }
        else
            result+='-'
    }
    return result
}
console.log(camelCase('I am miHir'))
console.log(snakeCase('I am miHir'))
console.log(hyphenCase('I am miHir'))

/*
Passed test case
'I am miHir'

*/