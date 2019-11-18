var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var loopLength = lowercase.length
function mirrorImage(str) {

    var count = str.length
    var mirror = ""
    for(var i = 0; i < count; i++){
        for(var j = 0; j < loopLength; j++){
            // checking lowercase
            if(str[i] === lowercase[j]){
                mirror += lowercase[25-j]
                break
            }
            // checking uppperrcase
            if(str[i] === uppercase[j]){
                mirror += uppercase[25-j]
                break
            }
        }
    }
    console.log(mirror)
}

mirrorImage("Masai")