function countVowels(inputString){

    var vowels = ['a','e','i','o','u','A','E','I','O','U']
       
    var vowelCount = 0

    for(var i = 0; i < inputString.length; i++){
        for(var j = 0; j < vowels.length; j++){
            if(inputString[i] == vowels[j]){
                //console.log('matched '+vowels[j])
                vowelCount ++
            }
        }
    }

    return vowelCount
}

var count = countVowels("masai school")
console.log(count + " Vowel(s)")