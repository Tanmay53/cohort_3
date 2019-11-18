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

function splitStringsCustom(inputString,splitCharacter){

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

function convertUpper(str){
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var word = ''
    for(i=0;i<str.length;i++){
        if(i == 0){
            for(var j=0;j<letters.length;j++){
                if(str[i] == letters[j]){
                    if(j<=25){
                        word += letters[26+j] 
                    }
                    else{
                        word += str[i]
                    }
                }
            }
        }
        else{
            word += str[i]
        }
    }
    return word
}

function convertLower(str){
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var word = ''
    for(i=0;i<str.length;i++){
        if(i == 0){
            for(var j=0;j<letters.length;j++){
                if(str[i] == letters[j]){
                    if(j<=25){
                        word += letters[26+j] 
                    }
                    else{
                        word += str[i]
                    }
                }
            }
        }
        else{
            word += str[i]
        }
    }
    return word
}

function stringsJoin(array,str){
    return array.join(str)
}

function camelCase(str){
    var array = splitStringsCustom(str,' ')

    for(var i=0;i<array.length;i++){
        array[i] = convertUpper(array[i])
    }

    var arr = stringsJoin(array,'')

    var camels = convertLower(arr)
    return camels
}

function snakeCase(str){
    var array = splitStrings(str, ' ')
    for(var i=0;i<array.length;i++){
        var lowerCase = convertLower(array[i])
        array [i] = lowerCase
    }
    var snakes = stringsJoin(array,'_')
    return snakes
}

function hyphenCase(str){
    var array = splitStrings(str,' ')
    for(var i=0;i<array.length;i++){
        var lowerCase = convertLower(array[i])
        array [i] = lowerCase
    }
    var hyphens = stringsJoin(array,'-')
    return hyphens
}

console.log(camelCase('masai     School           rocks'))
console.log(camelCase('masai     school         is     different '))
console.log(snakeCase('masai     School         is     different'))
console.log(hyphenCase('masai     School             rocks'))