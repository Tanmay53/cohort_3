function splitChar(inputString){

    var temp = []   //empty array to store string characters

    for(var i = 0; i < inputString.length; i++){
        temp[i] = inputString[i]   //moving string character to array
    }

    return temp
}

var splitChars = splitChar('masai school')
console.log(splitChars)