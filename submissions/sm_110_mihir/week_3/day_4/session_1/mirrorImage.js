//  check for upper case
function isUpper(char){
    if(char>='A' && char<='Z')
        return true
    else    
        return false
}

function mirrorImage(str){
    // creating array of alphabets
    var alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var letters=str.split('')
    var upperFlag=false
    for(var i=0;i<letters.length;i++){
        if(isUpper(letters[i]))
            upperFlag=true
        letters[i]=letters[i].toLowerCase()
        for(var j=0;j<alphabets.length;j++)
            if(letters[i]==alphabets[j]){
                if(upperFlag)
                    letters[i]=alphabets[25-j].toUpperCase()
                else
                    letters[i]=alphabets[25-j]
            }
        // reset
        upperFlag=false
    }
    return letters.join('')
}

var mirror=mirrorImage("AyCzB")
console.log(mirror)