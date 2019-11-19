function countVowel (vowel) {
    var count = 0;
    for(var i = 0;i < vowel.length; i++) {
        if(vowel[i] == "a" || vowel[i] == "e" || vowel[i] == "i" || vowel[i] == "o" || vowel[i] == "u") {
            count ++;
        }
    }
    return count;
}

console.log(countVowel("prabhatranjan"));