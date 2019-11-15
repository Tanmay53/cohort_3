function splitStrings(inputString,splitCharacter){

    var tempWord = ''
    var tempArray = []

    for(var i = 0; i < inputString.length; i++){
        
        if(inputString[i] != splitCharacter){

            tempWord += inputString[i]

        }
        else{

            if(tempWord.length > 0){
                tempArray.push(tempWord)        
            }

            tempWord = ''                       

        }
    }

    if(tempWord.length > 0){

        tempArray.push(tempWord)               

    }

    return tempArray
}

function joinStrings(str){
    var array = str.join('')
    return array
}

function palindrome(str){
    var input = splitStrings(str,' ')
    var output = joinStrings(input)

    len = output.length

    isPalindrome = true

    for(var i=0;i<=Math.floor(len/2);i++){

        if(output[i] === output[len-1-i]){
            isPalindrone =true
        }
        else{
            isPalindrome = false
            break
        }
    }

    if(isPalindrome){
        return ('String is a palindrome')
    }
    else{
        return ('String is not a palindrome')
    }
}

console.log(palindrome('madam'))
console.log(palindrome('maam'))
console.log(palindrome('dipanshu'))
console.log(palindrome('race car'))