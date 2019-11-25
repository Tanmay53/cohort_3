function upper(char){
    if(char >= 'A' && char <='Z')
    return true
    else
    return false
}
// 
function mirrorImage(str){
    var smallAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var bigAlpha = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var letters = str.split('')
    for (var i = 0; i < letters.length ; i++){
        //
        if(upper(letters[i])){
        for(var j = 0; j < bigAlpha.length; j++)
            if ((letters[i] == bigAlpha[j])){
                letters[i] = bigAlpha[25-j]
                break
            }
        }
        else{
            for(var j = 0; j < smallAlpha.length; j++)
                if(letters[i] == smallAlpha[j]){
                    letters[i] = smallAlpha[25-j]
                    break
                }
            }
    }
        return letters.join('')
}
var mirror = mirrorImage ("aCd")
console.log(mirror)