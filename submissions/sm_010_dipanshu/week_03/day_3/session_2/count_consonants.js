function countVowels(inputString){

    var consonants = ['b','B','c','C','d','D','f','F','g','G','h','H','j','J','k','K','l','L','m','M','n','N','p','P','q','Q','r','R','s','S','t','T','v','V','w','W','x','X','y','Y','z','Z']

    var vowelCount = 0

    for(var i = 0; i < inputString.length; i++){
        for(var j = 0; j < consonants.length; j++){
            if(inputString[i] == consonants[j]){
                //console.log('matched '+consonants[j])
                vowelCount ++
            }
        }
    }

    return vowelCount
}

var count = countVowels("masai school")
console.log(count + " Consonant(s)")