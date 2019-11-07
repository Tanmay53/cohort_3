//function to split a string according to a give character and generate an array of strings, splitting at the occurence of each split character
function splitStrings(inputString,splitCharacter){
    console.log(inputString)

    //temporary string and array to hold split values
    var tempWord = ''
    var tempArray = []

    for(var i = 0; i < inputString.length; i++){
        
        if(inputString[i] != splitCharacter){

            tempWord += inputString[i]          //add character to temp string until splitting characer is found

        }
        else{

            //not trying to push empty strings if 2 splitting characters are found sequentially
            if(tempWord.length > 0){
                tempArray.push(tempWord)        //push words to temp array if splitting character is found
            }

            tempWord = ''                       //reset the temp string

        }
    }

    if(tempWord.length > 0){

        tempArray.push(tempWord)                //Special case. Push characters from temp string to temp array when end of input is reached

    }

    return tempArray
}

var splitString = splitStrings('aaabbbc/ccdddd', '/')
console.log(splitString)