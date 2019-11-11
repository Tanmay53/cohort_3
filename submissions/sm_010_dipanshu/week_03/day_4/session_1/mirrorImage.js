function mirror(input){
    letters = 'abcdefghijklmnopqrstuvwxyz'
    var mirrorString = ''

    for(var i=0; i<input.length; i++){

        //checkfor uppercase
        if(input[i] == input[i].toUpperCase()){
            lower = input[i].toLowerCase()
            indexInLetters = letters.indexOf(lower)
            if(indexInLetters != -1){
                mirrorString += letters[25 - indexInLetters].toUpperCase()
            }
            else{
                mirrorString += input[i]
            }
        }

        //check for lowercase
        else{
            indexInLetters = letters.indexOf(input[i])
            if(indexInLetters != -1){
                mirrorString += letters[25 - indexInLetters]
            }
            else{
                mirrorString += input[i]
            }
        }
    }
    
    console.log(mirrorString)
}

mirror('AaBb-CcDd')
