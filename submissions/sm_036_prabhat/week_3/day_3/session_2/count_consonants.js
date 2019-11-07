function countConso (consonant){
    var count = 0;
    for(var i = 0;i < consonant.length; i++) {
        if(consonant[i] != "a" && consonant[i] != "e" && consonant[i] != "i" && consonant[i] != "o" && consonant[i] != "u") {
            count ++;
        }
    }
    return count;
}

console.log(countConso("prabhatranjan"));